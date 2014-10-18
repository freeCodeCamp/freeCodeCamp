/**
 * GET /
 * Home page.
 */
var Challenge = require('./../models/Challenge')

exports.index = function(req, res) {
    Challenge.find(function(err, challenges){
        res.render('challenge/index', {
            title: 'Challenges',
            challenges: challenges
        });
    });
};
exports.view = function(req, res) {
    Challenge.findById(req.param.id, function(err, challenge){
        res.render('challenge/view', {
            title: 'Challenge',
            challenge: challenge
        });
    });
};
exports.firstPairProgrammingSession = function(req, res) {
    Challenge.findOne({ name: "Start Your First Pair Programming Session" }).exec       (function(err, challenge) {
        res.render('challenge/first_pair_programming_session', {
            title: 'Challenge',
            challenge: challenge
        });
    });
};

//firstPairProgrammingSession
//firstCodePen
//firstDynamicWebsite
//firstWebsite