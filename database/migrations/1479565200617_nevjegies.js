'use strict'

const Schema = use('Schema')

class NevjegiesTableSchema extends Schema {

  up () {
    this.create('nevjegies', (table) => {
      table.increments()
      table.string('name', 50).notNullable().unique()
      table.string('address', 50)
      table.string('phone', 50)
      table.string('email', 50)
      table.string('author', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('nevjegies')
  }

}

module.exports = NevjegiesTableSchema