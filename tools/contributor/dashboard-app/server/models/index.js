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

const allRepos = new mongoose.Schema({
  _id: String,
  prs: [
    {
      _id: Number,
      title: String,
      username: String,
      prLink: String
    }
  ]
});

const dbCollections = {
  pr: 'openprs',
  info: 'info',
  boilerplate: 'boilerplate',
  otherPrs: 'otherPrs'
};

const PR = mongoose.model('PR', pr, dbCollections['pr']);
const INFO = mongoose.model('INFO', info, dbCollections['info']);
const ALL_REPOS = mongoose.model(
  'ALL_REPOS',
  allRepos,
  dbCollections['allRepos']
);
module.exports = { PR, INFO, ALL_REPOS, dbCollections };
