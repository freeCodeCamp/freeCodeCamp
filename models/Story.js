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
    description: {
        type: String,
        unique: false
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

storySchema.pre('save', function(next) {
    console.log('pre save test');
    next();
});

module.exports = mongoose.model('Story', storySchema);

/*
 author: {
 userId: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'User'
 }
 },
 */
