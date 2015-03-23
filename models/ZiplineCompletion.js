var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var ziplineCompletionSchema = new mongoose.Schema({
    dateCompleted: Number,
    completedWith: ObjectId,
    basejumpHash: ObjectId,
    githubUrl: String,
    demoUrl: String
});

module.exports = mongoose.model('ziplineCompletion', ziplineCompletionSchema);