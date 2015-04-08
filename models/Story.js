var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var storySchema = new mongoose.Schema({
    headline: {
        type: String,
        unique: false
    },
    timePosted: {
        type: Number,
        default: 0
    },
    link: {
        type: String,
        unique: false
    },
    metaDescription: {
        type: String,
        default: '',
        unique: false
    },
    description: {
        type: String,
        unique: false
    },
    originalStoryAuthorEmail: {
      type: String,
      default: ''
    },
    rank: {
        type: Number,
        default: -Infinity
    },
    upVotes: {
        type: Array,
        default: []
    },
    author: {},
    comments: {
        type: Array,
        default: []
    },
    image: {
        type: String,
        default: ''
    },
    storyLink: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Story', storySchema);
