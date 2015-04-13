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

var stream = User.find( { needsMigration: true }).batchSize(10000).stream();
stream.on('data', function(user) {
  console.log('test');
  user.needsMigration = true;
  user.save();
}).on('error', function(err) {
  console.log(err);
}).on('close', function() {
  console.log('done with set');
});
  //console.log(typeof(user.challengesHash));
  //if (user.challengesHash && typeof(user.challengesHash) === Object) {
  //  var oldChallenges = Object.keys(user.challengesHash).filter(function (challenge) {
  //    console.log(challenge);
  //    return user.challengesHash[challenge];
  //  }).map(function (data) {
  //    return ({
  //      challengeNum: data,
  //      timeStamp: user.challengesHash[data]
  //    });
  //  });
  //  oldChallenges.forEach(function (challenge) {
  //    user.progressTimestamps.push(challenge.timeStamp);
  //  });
  //  newChallenges = newChallenges.filter(function (elem) {
  //    return elem.newId;
  //  });
  //  console.log(newChallenges);
  //});
//});
