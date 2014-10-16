var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var challengeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    source: String,
    solution: String,
    link: String,
    image: String,
    time: Number,
    directions: Array
});

var Challenge = module.exports = mongoose.model('Challenge', challengeSchema);