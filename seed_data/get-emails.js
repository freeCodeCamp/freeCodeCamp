require('dotenv').load();
var User = require('./../models/User'),
  secrets = require('../config/secrets'),
  mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient;

MongoClient.connect(secrets.db, function(err, database) {
  if (err) {
    console.log(err);
  }

  database.collection('users').aggregate([
    {$match: { 'email': { $exists: true } } },
    {$match: { 'email': { $ne: '' } } },
    {$match: { 'email': { $ne: null } } },
    {$match: { 'sendMonthlyEmail': true } },
    {$match: { 'email': { $not: /(test|fake)/i } } },
    {$group: { '_id': 1, 'emails': {$addToSet: '$email' } } }
  ], function(err, results) {
    console.log('\"email\"\n\"'+results[0].emails.join('\"\n\"') + '\"');
    process.exit(0);
  });
});
