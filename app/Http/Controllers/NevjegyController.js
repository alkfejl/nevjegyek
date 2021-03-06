'use strict'

const Nevjegy = use('App/Model/Nevjegy')
const Validator = use('Validator')

class NevjegyController {
    * list(req, res) {

        const nevjegyek = yield Nevjegy.all();

        yield res.sendView('list', {
            nevjegyek: nevjegyek.toJSON(),
        });   
    }

    * own(req, res) {

        const nevjegyek = yield Nevjegy.all();

        yield res.sendView('own', {
            nevjegyek: nevjegyek.toJSON(),
        });   
    }

    * create(req, res) {

        yield res.sendView('create');
    }

    * submitCreate(req, res) {
        var post = req.only('name', 'address', 'phone', 'email', 'author');
        var nevjegyData ={
            name: post.name,
            address: post.address,
            phone: post.phone,
            email: post.email,
            author: req.currentUser.username
        }
        console.log(nevjegyData);
        const validation = yield Validator.validate(nevjegyData, Nevjegy.rules)

        if(validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            res.redirect('back')
            return
        }
        
        const nevjegy = new Nevjegy();
        nevjegy.name = post.name;
        nevjegy.address = post.address;
        nevjegy.phone = post.phone;
        nevjegy.email = post.email;
        nevjegy.author = nevjegyData.author;
        console.log(nevjegy.author)
        yield nevjegy.save();

        res.redirect('/main');
    }

    
}

module.exports = NevjegyController
