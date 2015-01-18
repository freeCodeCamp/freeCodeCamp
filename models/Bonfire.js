var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var bonfireSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    link: String,
    time: String,
    bonfireNumber: Number
});

module.exports = mongoose.model('Bonfire', bonfireSchema);
