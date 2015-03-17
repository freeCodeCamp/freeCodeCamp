var User = require('./../models/User'),
	mongodb = require('mongodb');

exports.index = function(req, res){
	res.render('paircode/pair-coding.jade', {
		title: "Team up and Pair code",
		page: "pair-coding"	
	});
};

exports.online = function (req, res){
	res.json(['User1', 'User2', 'SpiderMan', 'UncleBen', 'MaryJane']);
};

function setCurrentUserOnline(req, res){

};

function setCurrentUserOffline(req, res){

};
