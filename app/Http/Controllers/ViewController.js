'use strict'

class ViewController {
    * login(req, res) {
        yield res.sendView('login');
    }

    

    * main(req, res) {
        yield res.sendView('main', {
            
        });
    }
}

module.exports = ViewController
