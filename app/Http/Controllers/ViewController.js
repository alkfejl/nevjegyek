'use strict'

class ViewController {
    * login(req, res) {
        yield res.sendView('login');
    }

    * loginSubmit(req, res) {
        yield res.sendView('main');
    }

    * main(req, res) {
        yield res.sendView('main');
    }
}

module.exports = ViewController
