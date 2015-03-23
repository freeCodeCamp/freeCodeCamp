var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */


var nonprofitSchema = new mongoose.Schema({
    name: String,
    registeredNonprofit: true,
    requestedDeliverables: Array,
    existingUserbase: true,
    acceptJavascript: true,
    agreeToTerms: true,
    whatDoesNonprofitDo: String,
    websiteLink: String,
    stakeholderName: String,
    stakeholderEmail: String,
    endUser: String,
    approvedDeliverables: Array,
    projectDescription: String,
    logoUrl: String,
    imageUrl: String,
    interestedCampers: Array,
    confirmedCampers: Array,
    estimatedHours: String
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);
