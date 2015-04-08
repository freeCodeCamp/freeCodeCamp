var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var commentSchema = new mongoose.Schema({
    associatedPost: {
        type: String,
        required: true
    },
    originalStoryLink: {
      type: String,
      default: ''
    },
    originalStoryAuthorEmail: {
      type: String,
      default: ''
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
    },
    commentOn: {
        type: Number,
        default: Date.now()
    }
});

module.exports = mongoose.model('Comment', commentSchema);

/*
 author: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'User'
 },
 */
