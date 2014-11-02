var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var challengeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    source: String,
    time: String,
    links: Array,
    video: String,
    directions: Array
});

var Challenge = module.exports = mongoose.model('Challenge', challengeSchema);