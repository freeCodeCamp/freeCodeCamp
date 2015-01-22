var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var bonfireCompletionSchema = new mongoose.Schema({
    dateCompleted: Number,
    camper1: String,
    camper2: String,
    bonfireNumber: {
        bonfireNumber: Number,
        bonfireId: ObjectId
    },
    solution: String
});

module.exports = mongoose.model('BonfireCompletion', bonfireCompletionSchema);
