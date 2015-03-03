var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var commentSchema = new mongoose.Schema({
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

