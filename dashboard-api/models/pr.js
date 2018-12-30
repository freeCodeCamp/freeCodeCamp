const mongoose = require('mongoose');
const PR = new mongoose.Schema({
  number: Number,
  'updated_at': Date,
  username: String,
  title: String,
  filenames: [String]
}, {collection: 'fccprs'});

module.exports = mongoose.model('PR', PR);