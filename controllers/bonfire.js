var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:challenges'),
    Challenge = require('./../models/Challenge');

/**
 * Bonfire controller
 */
exports.index = function(req, res) {
  Challenge.find({}, null, { sort: { challengeNumber: 1 } }, function(err, c) {
    if (err) {
      debug('Challenge err: ', err);
      next(err);
    }
    res.render('bonfire/bonfire.jade', {
      challenges: c,
      cc: req.user ? req.user.challengesHash : undefined
    });
  });
};