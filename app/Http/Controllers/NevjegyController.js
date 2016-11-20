'use strict'

const Nevjegy = use('App/Model/Nevjegy')

class NevjegyController {
    * list(req, res) {

        const nevjegyek = yield Nevjegy.all();

        yield res.sendView('list', {
            nevjegyek: nevjegyek.toJSON(),
        });   
    }

    
}

module.exports = NevjegyController
