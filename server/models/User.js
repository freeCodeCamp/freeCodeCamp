var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  name: String,
  email: String,
  provider: String,
  facebook: String,
  twitter: String,
  google: String,
  linkedin: String
});

module.exports = mongoose.model('User', UserSchema);