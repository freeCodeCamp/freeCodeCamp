var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PairUserSchema = new mongoose.Schema({
	username: String,
  userPic: String,
  userSlack: String,
  bonfire: String,
  challenge: String,
  comment: String,
	timeOnline: {type:Date, default: null}
});



module.exports = mongoose.model('PairUser', PairUserSchema);
