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
        const validation = yield Validator.validateAll(userData, User.rules)

        if(validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('/')
            return
        }
        //userData.password = yield Hash.make(userData.password);
        const user = new User();
        user.username = post.username;
        user.email = post.email;
        user.password = post.password;
        yield user.save();
        //req.auth.login(user);
        res.sendView('/main');

    }

}

module.exports = UserController
