var mongoose = require('mongoose');

/**
 *
 * @type {exports.Schema}
 */

var jobSchema = new mongoose.Schema({
  position: String,
  company: String,
  logoUrl: String,
  postingUrl: String,
  copy: Array
});

module.exports = mongoose.model('Job', jobSchema);
