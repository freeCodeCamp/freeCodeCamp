var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var postSchema = new mongoose.Schema({
    headline: String,
    link: String,
    body: String,
    rank: Number,
    upVotes: [
        {
            upVotedBy: ObjectId,
            upVotedTime: Number
        }
    ],
    author: {
        username: String,
        id: ObjectId,
        picture: String
    }
});

module.exports = mongoose.model('BonfireCompletion', bonfireCompletionSchema);

