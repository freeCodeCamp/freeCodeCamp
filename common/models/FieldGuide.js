var mongoose = require('mongoose');

var fieldGuideSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false
  },
  dashedName: {
    type: String,
    unique: false
  },
  description: {
    type: Array,
    unique: false
  }
});

module.exports = mongoose.model('FieldGuide', fieldGuideSchema);
