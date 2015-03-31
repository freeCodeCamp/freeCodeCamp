var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */


var nonprofitSchema = new mongoose.Schema({
    name: String,
    requestedDeliverables: Array,
    whatDoesNonprofitDo: String,
    websiteLink: String,
    stakeholderName: String,
    stakeholderEmail: String,
    endUser: String,
    approvedDeliverables: Array,
    projectDescription: String,
    logoUrl: String,
    imageUrl: String,
    estimatedHours: String
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);
