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
    tests: Array,
    challengeSeed: String,
    bonfireNumber: Number,
    challengeEntryPoint: String,
    challengeEntryPointNegate: String

});

module.exports = mongoose.model('Bonfire', bonfireSchema);
