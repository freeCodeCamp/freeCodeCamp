var User = require('./../models/User'),
	mongodb = require('mongodb'),
	User = require('./../models/User');
	PairUser = require('./../models/pairUser');


exports.index = function(req, res){
	if (!!!req.user){
		res.render('account/signin', {
			title: "Login",
			page: "Login"});
	} else {
		PairUser.find().populate('user', 'email profile').exec(function(err, pairUsers) {
			res.render('paircode/index.jade', {
				title: "Team up and Pair code",
				page: "pair-coding",
				onlineUsers: pairUsers || []
			});
		});
	}	
};

var newPairRequest = function(userid, username, comment, git) {
	var pairCode = new PairUser({});
		pairCode.user = userid;
		pairCode.username = username;
		pairCode.timeOnline = new Date();
		// save the comments from the form
		if (comment === ""){
				pairCode.comment = "Pair with me";
			} else {
				pairCode.comment = comment;
			}
		pairCode.userGit = git;

		pairCode.save(function(err) {
			if (err) {
				return res.status(400);
			} 
		});

};

exports.setOnline = function(req, res) {
	req.user.pair.timeOnline = Date.now();
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
		var gitSplit = req.user.profile.githubProfile.split("/");
		var gitUser = gitSplit[gitSplit.length-1];

		newPairRequest(req.user._id, req.user.profile.username, req.body.comment, gitUser);
	} 
	res.redirect('/pair-coding');
};



exports.editPairRequest = function(req, res) {
	// search for the user's pair request
	PairUser.findOne({user: req.user._id}, function(err, pairuser) {
		if (err) {
			console.log("There was an error finding the pair request.");
		}
		if (!pairuser) {
			// set their online status to false
			User.findById(req.user._id, function(err, user) {
				user.pair.onlineStatus = false;
				user.save(function(err) {
					if (err) {
						console.log("Error saving user's online status.");
					}
				});
			});
			// redirect to the index page

			console.log("No pair requests found, add a new one.");
			res.redirect('/pair-coding');
		} else {
			if (req.body.comment === ""){
				pairuser.comment = "Pair with me";
			} else {
				pairuser.comment = req.body.comment;
			}
			pairuser.timeOnline = new Date();
			pairuser.save(function(err) {
				if (err) {
					console.log("There was an error saving the pairuser.");
				}
				else {
					res.redirect('/pair-coding');
				}
			});
		}
	});
};

exports.removeOldPosts = function() {
	// this is the oldest possible time to keep
	var cutoff = Date.now() - 1800000;	// 30 minutes
	//var cutoff = Date.now()-(120000/4);		// test value, 2 minutes

	// get all old pairusers and remove them.
	PairUser.find().where('timeOnline').lt(cutoff).exec(function(err, pairs) {
		if (err) {
			console.log("There was an error finding pair requests: "+err);
		}
		// remove all of the pairs
		pairs.forEach(function(pair, index) {
			// set that user to be offline
			User.findById(pair.user, function(err, user) {
				user.pair.onlineStatus = false;
				user.save(function(err) {
					if (err) {
						console.log("error saving user with new online stauts.");
					}
				});
			});


			pair.remove(function(err) {
				if (err) {
					console.log("There was an error removing this pair user: "+pair);
				}
				return;
			});

		});
	});

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
		if (pair !== null){
			pair.remove(function(err) {
				if (err) {
					console.log("error removing old posts.");
				}
			});
		}
	});
	res.redirect('/pair-coding');
};

exports.returnPairInfo = function(req, res){
	var usernameToPair = req.params.onlinePostuserName;
	
	PairUser.findOne({username: usernameToPair}, function(err, pair) {
		if (err) {
			console.log("Error finding the pair user.");
		}
		if (!pair) {
			console.log("Expired");
			res.redirect('/pair-coding');
		} else {
		// get comment information to port to template
		var comment = pair.comment;
			res.render('paircode/index.jade', {
				title: "Chat with "+usernameToPair+" about "+comment,
				page: "pairWithUser",
				pairWithUser: pair.username,		
				comment: comment,
				userGit: pair.userGit
			});
		}
		});
};


