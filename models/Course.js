var mongoose = require('mongoose');
var secrets = require('../config/secrets');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var courses = require('../seed_data/courses.json');

console.log(courses);

var courseSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    link: String,
    image: String,
    time: Number,
    directions_1: String,
    directions_2: String,
    directions_3: String,
});

var Courses = module.exports = mongoose.model('Course', courseSchema);

if (require.main === module) {
    mongoose.connect(secrets.db);
    Courses.create(courses, function(err, data) {
        if (err) console.log(err);
        else console.log('Saved ', data );
        process.exit(0);
    });
}