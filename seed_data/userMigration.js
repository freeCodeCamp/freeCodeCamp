require('dotenv').load();
var bonfires = require('./bonfires.json'),
  app = require('../server/server'),
  mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient,
  User = app.models.User,
  UserIdentity = app.models.UserIdentity,
  oldUri='mongodb://localhost:27017/app30893198';

MongoClient.connect(oldUri, function(err, database) {
  database.collection('users').find({}).toArray(function(err, users) {
    if (users !== null && users.length !== 0) {
      users.forEach(function(user) {
        console.log(user._id);
      })
      process.exit(0);
    }
  });
});
