var User = require('./../models/User'),
	mongodb = require('mongodb'),
	PairUser = require('./../models/pairUser');

exports.index = function(req, res){

	PairUser.find().populate('user', 'email profile').exec(function(err, pairUsers) {
		res.render('paircode/index.jade', {
			title: "Team up and Pair code",
			page: "pair-coding",
			onlineUsers: pairUsers
		});
	});


		
};

exports.setOnline = function(req, res) {
	// set the online status to true
	req.user.pair.onlineStatus = true;
	req.user.pair.timeOnline = Date.now();

	// create a new online paircode instance
	var pairCode = new PairUser({});
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

function getOnline(req, res) {
	/*
	// poll the db for online users and return them
	var working = "";
	pairUser.find(function(err, pairUsers) {
		console.log("1# getonline function: " + pairUsers);
		working = pairUsers;
	});
	return working;*/

	var online = PairUser.find({});
	var working = online.exec(function(err, users){
		return users;
	})
	console.log("getonlinefunction: " + working);

	return working[0];
};

exports.getSingle

