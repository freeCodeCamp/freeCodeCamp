var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var fieldGuideSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false
    },
    description: {
        type: Array,
        unique: false
    }
});

module.exports = mongoose.model('FieldGuide', fieldGuideSchema);
