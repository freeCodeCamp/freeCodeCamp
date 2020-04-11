const mongoose = require('mongoose');

const prTest = new mongoose.Schema({
  _id: Number,
  updatedAt: String,
  username: String,
  title: String,
  filenames: [String]
});

const infoTest = new mongoose.Schema({
  lastUpdate: Date,
  numPRs: Number,
  prRange: String
});

const dbCollections = {
   prtest: 'test_openprs',
   infotest: 'test_info'
};

const PRtest = mongoose.model('PRtest', prTest, dbCollections['pr']);
const INFOtest = mongoose.model('INFOtest', infoTest, dbCollections['info']);
module.exports = { PRtest, INFOtest, dbCollections };
