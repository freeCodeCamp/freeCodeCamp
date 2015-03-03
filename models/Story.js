var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var storySchema = new mongoose.Schema({
    headline: String,
    link: String,
    body: String,
    rank: { type: Number, default: -Infinity },
    upVotes: { type: Array, default: [] },
    author: {},
    comments: { type: Array, default: [] }
});

module.exports = mongoose.model('Story', storySchema);

