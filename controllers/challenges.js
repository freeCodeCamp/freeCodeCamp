/**
 * GET /
 * Challenges.
 */
var Challenge = require('./../models/Challenge');
var _ = require('lodash');

exports.returnChallenge = function(req, res, next) {
    var challengeNumber = req.params.challengeNumber;
    //if (!_.isNumber(challengeNumber)) {
    //    challengeNumber = 0;
    //}
    Challenge.findOne({challengeNumber: challengeNumber}, function(err, c){
        if (err) {
            console.error('Challenge err: ', err);
            next(err);
        }
        res.render('challenges/show', {
            title: 'Challenge',
            name: c.name,
            video: c.video,
            time: c.time,
            steps: c.steps,
            cc: req.user ? req.user.challengesCompleted : []
        });
    });
};