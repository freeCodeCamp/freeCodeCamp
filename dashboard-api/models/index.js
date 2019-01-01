const mongoose = require('mongoose');

const pr = new mongoose.Schema({
  _id: Number,
  updatedAt: Date,
  username: String,
  title: String,
  filenames: [String]
});

const info = new mongoose.Schema({
  lastUpdate: Date,
  numPRs: Number,
  prRange: String
});

const PR = mongoose.model('PR', pr, 'fccprs');
const INFO = mongoose.model('INFO', info, 'info');
module.exports = { PR, INFO };
