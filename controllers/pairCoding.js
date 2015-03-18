var User = require('./../models/User'),
	mongodb = require('mongodb'),
	PairUser = require('./../models/pairUser');

exports.index = function(req, res){
	// could run the expires script here ...
	PairUser.find().populate('user', 'email profile').exec(function(err, pairUsers) {
		//console.log(pairUsers);
		res.render('paircode/index.jade', {
			title: "Team up and Pair code",
			page: "pair-coding",
			onlineUsers: pairUsers
		});
	});


		
};

exports.setOnline = function(req, res) {
	req.user.pair.timeOnline = Date.now();
	console.log(req.user.pair.onlineStatus);
	
	if (!req.user.pair.onlineStatus) {
		// set the online status to true
		User.findById(req.user._id, function(err, user) {
			if (err) {
				console.log("there was an error finding the user");
			} 
			user.pair.onlineStatus = true;
			user.pair.timeOnline = new Date();
			user.save(function(err) {
				if (err) {
					console.log("there was an error saving the user: " + err);
				}
			});
		});
		
		// if not online, create a new online paircode instance
		var pairCode = new PairUser({});
		pairCode.user = req.user._id;
		pairCode.timeOnline = new Date();
		// save the comments from the form
		pairCode.comment = req.body.comment;


		pairCode.save(function(err) {
			if (err) {
				return res.status(400);
			} 
			else {
				res.redirect('/pair-coding');
			}
		});
	} else {
		// this shouldn't show, as the user should be able to check if they're online via the template.
		console.log("already online");
	}
};

exports.editPairRequest = function(req, res) {
	// search for the user's pair request
	PairUser.findOne({user: req.user._id}, function(err, pairuser) {
		if (err) {
			console.log("There was an error finding the user.");
		}
		pairuser.comment = req.body.comment;
		pairuser.timeOnline = new Date();
		pairuser.save(function(err) {
			if (err) {
				console.log("There was an error saving the pairuser.");
			}
			else {
				res.redirect('/pair-coding');
			}
		});
	});
};


//Used to check for expire online users
exports.removeOldOnlinePost = function () {
	var timeForExpired = 30; //Minutes

	var online = PairUser.find({});
	var working = online.exec(function(err, users){
		var now = new Date().getTime();

		for (var x=0; x<users.length; x++){
			var wentOnline = new Date(users[x]['timeOnline']);
			var onlineForMinutes = Math.round((now - wentOnline)/60000);
			if (onlineForMinutes >= timeForExpired){
				User.findById(users[x].user, function(err, user) {
					if (err) {
						console.log("ERROR: Could not find user, METHOD: removeOldOnlinePost");
					} 
					user.pair.onlineStatus = false;
					user.pair.timeOnline = new Date();
					user.save(function(err) {
						if (err) {
							console.log("ERROR: Could not save user, METHOD: removeOldOnlinePost: " + err);
						}
					});
				});

				users[x].remove(function(err, ele){
					if (err){
						console.log("ERROR: Could not remove user, METHOD: removeOldOnlinePost: " + err);
					}
				});
			}
		}
		return users;
	})
};

exports.setOffline = function(req, res){
	// change the user's online status
	User.findById(req.user._id, function(err, user) {
		if (err) {
			console.log("ERROR: Could not find user, METHOD: setOffline: " + err);
		} 
		user.pair.onlineStatus = false;
		user.pair.timeOnline = new Date();
		user.save(function(err) {
			if (err) {
				console.log("ERROR: Could not save user, METHOD: setOffline: " + err);
			}
		});
	});
	// remove the pair requests from that user
	PairUser.findOne({user: req.user._id}, function(err, pair) {
		if (err) {
			console.log("Error finding offline users.");
		} 
		pair.remove(function(err) {
			if (err) {
				console.log("error removing old posts.");
			}
		});
	});
	res.redirect('/pair-coding');
};




