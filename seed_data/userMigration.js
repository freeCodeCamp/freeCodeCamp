require('dotenv').load();
var mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient,
  Server = require('mongodb').Server,
  User = require('../models/User.js'),
  newChallenges = require('./challengeMapping.json'),
  secrets = require('../config/secrets');

var mongoClient = new MongoClient(new Server('localhost', 27017), {native_parser: true});
var mongoose = require('mongoose');
mongoose.connect(secrets.db);

User.find(function(err, users) {
  if (err) { console.log(err) }
  users.forEach(function(user) {
    console.log('in users');
    if (typeof user.challengesHash !== 'undefined') {
      var oldChallenges = Object.keys(user.challengesHash).filter(function (challenge) {
        return user.challengesHash[challenge];
      }).map(function (data) {
        return ({
          challengeNum: data,
          timeStamp: user.challengesHash[data]
        });
      });
      oldChallenges.forEach(function (challenge) {
        user.progressTimestamps.push(challenge.timeStamp);
      });
      newChallenges = newChallenges.filter(function (elem) {
        return elem.newId;
      });
      console.log(newChallenges);
    }
  });
});
