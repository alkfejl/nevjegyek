'use strict'

const Schema = use('Schema')

class FelhasznalokTableSchema extends Schema {

  up () {
    this.create('felhasznalok', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('felhasznalok')
  }

}

module.exports = FelhasznalokTableSchema
