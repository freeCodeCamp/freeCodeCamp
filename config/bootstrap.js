var mongoose = require('mongoose'),
    debug = require('debug')('freecc:config:boot'),
    secrets = require('./secrets'),
    courses = require('../seed_data/courses.json'),
    Course = require('./../models/Course'),
    challenges = require('../seed_data/challenges.json'),
    Challenge = require('./../models/Challenge');

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});


Course.create(courses, function(err, data) {
  if (err) {
    debug(err);
  } else {
    debug('Saved ', data);
  }
});

Challenge.create(challenges, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved ', data);
  }
});
