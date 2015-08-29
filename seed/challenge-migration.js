require('dotenv').load();
var bonfires = require('./bonfires.json'),
  app = require('../server/server'),
  mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient,
  User = app.models.User,
  UserIdentity = app.models.userIdentity,
  oldUri='mongodb://localhost:27017/app30893198',
  coursewares = require('./coursewares.json');

MongoClient.connect(oldUri, function(err, database) {

  database.collection('users').find({}).batchSize(20).toArray(function(err, users) {
    if (users !== null && users.length !== 0) {
      var mappedUserArray = users.map(function(user) {
        Object.keys(user.profile).forEach(function(prop) {
          user[prop] = user.profile[prop];
        });
        Object.keys(user.portfolio).forEach(function(prop) {
          user[prop] = user.portfolio[prop];
        });

        user.completedCoursewares = Object.keys(user.challengesHash)
          .filter(function(key) {
            return user.challengesHash[key] !== 0;
          })
          .map(function(key) {
            return({
              id: coursewares[key].id,
              completedDate: user.challengesHash[key]
            });
          });

        return user;
      });
      User.create(mappedUserArray, function(err) {
        if (err) {
          console.log(err);
        }
        console.log("a batch finished");
      });
    }
  });
});
