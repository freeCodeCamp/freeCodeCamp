var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var bonfireCompletionSchema = new mongoose.Schema({
    dateCompleted: Number,
    completedWith: ObjectId,
    bonfireHash: ObjectId,
    solution: String
});

module.exports = mongoose.model('BonfireCompletion', bonfireCompletionSchema);
