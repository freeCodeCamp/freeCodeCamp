var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */

var Long = mongoose.Types.Long;
var jobSchema = new mongoose.Schema({
  position: String,
  company: String,
  logoUrl: String,
  postingUrl: String,
  copy: Array
});

module.exports = mongoose.model('Job', jobSchema);
