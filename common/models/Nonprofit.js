var mongoose = require('mongoose');

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
  estimatedHours: 0,
  interestedCampers: [],
  confirmedCampers: [],
  // "confirmed", "started", "completed", "aborted"
  currentStatus: String
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);
