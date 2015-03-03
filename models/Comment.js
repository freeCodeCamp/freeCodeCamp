var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var commentSchema = new mongoose.Schema({
    associatedPost: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: ''
    },
    rank: {
        type: Number,
        default: -Infinity
    },
    upvotes: {
        type: Array,
        default: []
    },
    author: {},
    comments: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Comment', commentSchema);