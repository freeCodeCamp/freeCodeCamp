/**
 * GET /
 * Challenges.
 */
var Challenge = require('./../models/Challenge');
var _ = require('lodash');

exports.returnChallenge = function(req, res, next) {
    var challengeNumber = parseInt(req.params.challengeNumber) || 0;
    if (challengeNumber > 59) { challengeNumber = 0; }
    Challenge.find({}, function (err, c) {
        if (err) {
            console.error('Challenge err: ', err);
            next(err);
        }
        res.render('challenges/show', {
            title: 'Challenge: ' + c[challengeNumber].name,
            name: c[challengeNumber].name,
            video: c[challengeNumber].video,
            time: c[challengeNumber].time,
            steps: c[challengeNumber].steps,
            cc: req.user ? req.user.challengesHash : undefined,
            challenges: c
        });
    });
};