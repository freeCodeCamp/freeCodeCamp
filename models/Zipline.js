var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */


var zipLineSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    picture: String,
    gitHubLink: String,
    demoLink: String,
    description: Array,
});

module.exports = mongoose.model('Zipline', zipLineSchema);
