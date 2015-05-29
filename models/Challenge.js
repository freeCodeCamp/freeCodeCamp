var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */

var challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  difficulty: String,
  description: Array,
  tests: Array,
  challengeSeed: Array,
  challengeType: Number, // 0 = html, 1 = javascript only, 2 = video, 3 = zipline, 4 = basejump
  MDNlinks: Array,
  nameCn: String,
  descriptionCn: Array,
  nameFr: String,
  descriptionFr: Array,
  nameRu: String,
  descriptionRu: Array,
  nameEs: String,
  descriptionEs: Array,
  namePt: String,
  descriptionPt: Array
});

module.exports = mongoose.model('Challenge', challengeSchema);
