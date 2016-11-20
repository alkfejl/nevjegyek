'use strict'

const Lucid = use('Lucid')

class Nevjegy extends Lucid {

    static get rules () {
        return {
            name: 'required|unique:nevjegies',
            address: 'required',
            phone: 'required',
            email: 'required'
        }        
    }

}

module.exports = Nevjegy
