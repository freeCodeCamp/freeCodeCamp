/**
 * GET /
 * Challenges.
 */
var Challenge = require('./../models/Challenge')

exports.returnChallenge = function(req, res) {
    Challenge.findOne({challengeNumber: req.params.challengeNumber}, function(err, c){
        res.render('challenges/show', {
            title: 'Challenge',
            name: c.name,
            video: c.video,
            time: c.time,
            steps: c.steps,
            cc: req.user.challengesCompleted
        }, function(err, html) {
            if(err) {
                res.redirect('/');
            } else {
                res.end(html);
            }
        });
    });
};