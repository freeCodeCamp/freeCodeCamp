/**
 * GET /
 * Challenges.
 */
var Challenge = require('./../models/Challenge');
var _ = require('lodash');

exports.returnChallenge = function(req, res, next) {
    var challengeNumber = parseInt(req.params.challengeNumber) || 0;
    if (challengeNumber > 59) { challengeNumber = 0; }
    Challenge.findOne({challengeNumber: challengeNumber}, function (err, c) {
        if (err) {
            console.error('Challenge err: ', err);
            next(err);
        }
        res.render('challenges/show', {
            title: 'Challenge: ' + c.name,
            name: c.name,
            video: c.video,
            time: c.time,
            steps: c.steps,
            cc: req.user.challengesHash
        });
    });
};