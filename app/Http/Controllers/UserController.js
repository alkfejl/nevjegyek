'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')

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
        //userData.password = yield Hash.make(userData.password);
        const user = new User();
        user.username = post.username;
        user.email = post.email;
        user.password = post.password;
        yield user.save();

        yield req.auth.login(user);
        

        res.redirect('/');

    }

}

module.exports = UserController
