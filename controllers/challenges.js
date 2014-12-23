/**
 * GET /
 * Challenges.
 */
var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:challenges'),
    Challenge = require('./../models/Challenge');

exports.returnChallenge = function(req, res, next) {
    var challengeNumber = parseInt(req.params.challengeNumber) || 0;
    var verbs = [
        'ACED',
        'NAILED',
        'ROCKED',
        'SCORCHED',
        'DEVASTATED',
        'OWNED',
        'CRUSHED',
        'CONQUERED',
        'KILLED',
        'SHREDDED',
        'ANNIHILATED',
        'NUKED'
    ];
    var phrases = [
        "Shout it from on top of a mountain",
        "Tell everyone and their dogs",
        "Show them. Show them all!",
        "Inspire your friends",
        "Tell the world of your greatness",
        "Look accomplished on social media",
        "Share news of your grand endeavor",
        "Establish your alibi for the past two hours",
        "Prove to mom that computers aren't just for games"
    ];
    if (challengeNumber > 59) { challengeNumber = 0; }
    Challenge.find({}, function (err, c) {
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
            verb: verbs[Math.floor(Math.random() * verbs.length)],
            phrase: phrases[Math.floor(Math.random() * phrases.length)],
            challenges: c
        });
    });
};
