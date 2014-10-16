var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var courseSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    link: String,
    image: String,
    time: Number,
    directions: Array
});

var Courses = module.exports = mongoose.model('Course', courseSchema);