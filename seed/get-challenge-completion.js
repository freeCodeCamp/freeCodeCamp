/* eslint-disable no-process-exit */
require('dotenv').load();
var secrets = require('../config/secrets'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    _ = require('lodash');

MongoClient.connect(secrets.db, function(err, database) {
  if (err) {
    throw err;
  }

  database.collection('user').aggregate([
    {$match: { 'completedChallenges': { $exists: true } } },
    {$match: { 'completedChallenges': { $ne: '' } } },
    {$match: { 'completedChallenges': { $ne: null } } },
    {$group: { '_id': 1, 'completedChallenges': {$addToSet: '$completedChallenges' } } }
  ], function(err, results) {
    if (err) { throw err; }
    var testout = results.map(function(camper) {
      return _.flatten(camper.completedChallenges.map(function(challenges) {
        return challenges.map(function(challenge) {
          return { 
            name: challenge.name,
            completedDate: challenge.completedDate,
            solution: challenge.solution
          };
        });
      }), true); 
    });
    console.log(JSON.stringify(testout));
    process.exit(0);
  });
});