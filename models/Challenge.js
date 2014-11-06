var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var challengeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    link: String,
    time: String,
    challengeNumber: Number,
    video: String,
    steps: Array
});

var Challenge = module.exports = mongoose.model('Challenge', challengeSchema);