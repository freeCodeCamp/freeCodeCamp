var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var bonfireCompletionSchema = new mongoose.Schema({
    dateCompleted: Number,
    completedWith: String,
    bonfireNumber: {
        bonfireNumber: Number,
        bonfireId: String
    },
    solution: String
});

module.exports = mongoose.model('BonfireCompletion', bonfireCompletionSchema);
