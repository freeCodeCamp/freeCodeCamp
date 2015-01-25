/**
 * GET /
 * Challenges.
 */
var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:challenges'),
    Challenge = require('./../models/Challenge'),
    resources = require('./resources.json'),
    phrases = resources.phrases,
    verbs = resources.verbs,
    compliments = resources.compliments;

var highestChallengeNumber = 53;

exports.returnChallenge = function(req, res, next) {
    var challengeNumber = parseInt(req.params.challengeNumber) || 0;
    if (challengeNumber > highestChallengeNumber) { challengeNumber = 0; }
    Challenge.find({}, null, { sort: { challengeNumber: 1 } }, function(err, c) {
        if (err) {
            debug('Challenge err: ', err);
            next(err);
        }
        res.render('challenges/show', {
            title: 'Challenge: ' + c[challengeNumber].name,
            name: c[challengeNumber].name,
            video: c[challengeNumber].video,
            time: c[challengeNumber].time,
            steps: c[challengeNumber].steps,
            number: challengeNumber,
            cc: req.user ? req.user.challengesHash : undefined,
            points: req.user ? req.user.points : undefined,
            verb: verbs[Math.floor(Math.random() * verbs.length)],
            compliment: compliments[Math.floor(Math.random() * compliments.length)],
            phrase: phrases[Math.floor(Math.random() * phrases.length)],
            challenges: c
        });
    });
};
