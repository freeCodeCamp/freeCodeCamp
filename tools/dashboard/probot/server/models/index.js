const mongoose = require('mongoose');

const pr = new mongoose.Schema({
  _id: Number,
  updatedAt: String,
  username: String,
  title: String,
  filenames: [String]
});

const info = new mongoose.Schema({
  lastUpdate: Date,
  numPRs: Number,
  prRange: String
});

const dbCollections = {
   pr: 'openprs',
   info: 'info'
};

const PR = mongoose.model('PR', pr, dbCollections['pr']);
const INFO = mongoose.model('INFO', info, dbCollections['info']);
module.exports = { PR, INFO, dbCollections };
