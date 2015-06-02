var mongoose = require('mongoose');
/**
 *
 * @type {exports.Schema}
 */

var bonfireSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    difficulty: String,
    description: Array,
    tests: Array,
    challengeSeed: Array,
    MDNlinks: [String]
});

module.exports = mongoose.model('Bonfire', bonfireSchema);
