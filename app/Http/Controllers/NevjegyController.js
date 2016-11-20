'use strict'

const Nevjegy = use('App/Model/Nevjegy')

class NevjegyController {
    * list(req, res) {

        const nevjegyek = yield Nevjegy.all();

        yield res.sendView('list', {
            nevjegyek: nevjegyek.toJSON(),
        });   
    }

    * loginSubmit(req, res) {
        try{
            var post = req.post();
            yield req.auth.attempt(post.username, post.password);
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

module.exports = NevjegyController
