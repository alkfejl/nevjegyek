'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

    * signup(req, res) {
        yield res.sendView('signup');
    }
    
    * store(req, res) {
        var post = req.only('username', 'email', 'password');
        var userData ={
            username: post.username,
            email: post.email,
            password: post.password
        }
        const validation = yield Validator.validate(userData, User.rules)

        if(validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            res.redirect('back')
            return
        }
        
        const user = new User();
        user.username = post.username;
        user.email = post.email;
        user.password = yield Hash.make(post.password);

        yield user.save();

        yield req.auth.login(user);
        

        res.redirect('/');

    }

    * loginSubmit(req, res) {
        try{
            var post = req.only('email', 'password');
            console.log(post);
            yield req.auth.attempt(post.email, post.password);
            res.redirect('/');
        }catch(e){
            yield req
                .withOut('password')
                .andWith({ errors: [{
                    message:'Bad credentials'
                }] })
                .flash()
            res.redirect('back')
            console.log(e);
            return
        }
    }

}

module.exports = UserController
