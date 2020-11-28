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

const boilerplate = new mongoose.Schema({
  _id: String,
  prs: [{
    _id: Number,
    title: String,
    username: String,
    prLink: String
  }]
});

const dbCollections = {
   pr: 'openprs',
   info: 'info',
   boilerplate: 'boilerplate'
};

const PR = mongoose.model('PR', pr, dbCollections['pr']);
const INFO = mongoose.model('INFO', info, dbCollections['info']);
const BOILERPLATE = mongoose.model('BOILERPLATE', boilerplate, dbCollections['boilerplate']);
module.exports = { PR, INFO, BOILERPLATE, dbCollections };
