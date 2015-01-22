var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */


var bonfireSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    difficulty: Number,
    description: Array,
    publicTests: Array,
    privateTests: Array,
    challengeSeed: String,
    bonfireNumber: Number
});

module.exports = mongoose.model('Bonfire', bonfireSchema);
