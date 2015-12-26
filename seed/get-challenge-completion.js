/* eslint-disable no-process-exit */

/**
 * Data creation script for academic data pushes. Run this script with
 * node seed/get-challenge-completion.js >> ~/output.json
 * For large data sets supply the flag --max_old_space_size=2000000 to node.
 * Run from the root FCC directory. Beware, this will generate a very large file
 * if you have a large user collection such as the production mongo db.
*/

require('dotenv').load();
var secrets = require('../config/secrets'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

MongoClient.connect(secrets.db, function(err, database) {
  if (err) {
    throw err;
  }
  var stream = database.collection('user')
        .find({'completedChallenges': { $ne: null }},
              {'completedChallenges': true})
        .stream();
  console.log('[');
  stream.on('data', function(results) {
    if (!results.completedChallenges) {
      // dud
    } else {
      var testout = [];
      results.completedChallenges.forEach(function(challenge) {
        testout.push({
          name: challenge.name,
          completedDate: challenge.completedDate,
          solution: challenge.solution
        });
      });
      if (testout.length) {
          console.log(JSON.stringify(testout) + ',');
      }
    }
  }).on('end', function() {
    console.log(']');
    process.exit(0);
  });
});
