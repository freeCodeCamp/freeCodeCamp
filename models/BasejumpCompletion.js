var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var basejumpCompletionSchema = new mongoose.Schema({
    dateCompleted: Number,
    completedWith: ObjectId,
    basejumpHash: ObjectId,
    githubUrl: String,
    demoUrl: String
});

module.exports = mongoose.model('BasejumpCompletion', basejumpCompletionSchema);
