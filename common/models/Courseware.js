var mongoose = require('mongoose');

/**
 *
 * @type {exports.Schema}
 */

var coursewareSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  difficulty: String,
  description: Array,
  tests: Array,
  challengeSeed: Array,
  // 0 = html, 1 = javascript only, 2 = video, 3 = zipline, 4 = basejump
  challengeType: Number
});

module.exports = mongoose.model('Courseware', coursewareSchema);
