var mongoose = require('mongoose');
var secrets = require('./secrets');
mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var courses = require('../seed_data/courses.json');
var challenges = require('../seed_data/challenges.json');

Challenge = require ('./../models/Challenge');
Course = require ('./../models/Course');

Course.create(courses, function(err, data) {
    if (err) console.log(err);
    else console.log('Saved ', data );
});

Challenge.create(challenges, function(err, data) {
    if (err) console.log(err);
    else console.log('Saved ', data );
});