'use strict'

class ViewController {
    * login(req, res) {
        yield res.sendView('login');
    }

    * signup(req, res) {
        yield res.sendView('signup');
    }

    * main(req, res) {
        yield res.sendView('main', {
            
        });
    }
}

module.exports = ViewController
