var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PairUserSchema = new mongoose.Schema({
	username: String,
  userPic: String,
  userSlack: String,
  bonfire: String,
  challenge: String,
	timeOnline: {type:Date, default: null},
  fiveMinuteWarning: Boolean
});



module.exports = mongoose.model('PairUser', PairUserSchema);
