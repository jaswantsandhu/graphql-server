var Datastore = require('nedb')
  , db = new Datastore({ filename: './database-dump' });

  module.exports = {
    db
  }