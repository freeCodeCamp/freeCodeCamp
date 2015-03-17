var User = require('./../models/User'),
	mongodb = require('mongodb'),
	pairUser = require('./../models/pairUser');

exports.index = function(req, res){
	res.render('paircode/pair-coding.jade', {
		title: "Team up and Pair code",
		page: "pair-coding"	
	});
};

exports.online = function (req, res){
	res.json(['User1', 'User2', 'SpiderMan', 'UncleBen', 'MaryJane']);
};

exports.setOnline = function(req, res) {
	// set the online status to true
	req.user.pair.onlineStatus = true;
	req.user.pair.timeOnline = Date.now();

	// create a new online paircode instance
	var pairCode = new pairUser({});
	pairCode.user = req.user._id;
	pairCode.save(function(err) {
		if (err) {
			return res.status(400);
		} 
		else {
			console.log("Paircode saved.");
		}
	});

};

exports.getOnline = function(req, res) {
	// poll the db for online users and return them
}

