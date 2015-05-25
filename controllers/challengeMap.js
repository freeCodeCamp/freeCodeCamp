var R = require('ramda'),
    debug = require('debug')('freecc:cntr:challengeMap'),
    User = require('../models/User'),
    resources = require('./resources');

var challengeTypes = {
  'HTML_CSS_JQ': 0,
  'JAVASCRIPT': 1,
  'VIDEO': 2,
  'ZIPLINE': 3,
  'BASEJUMP': 4,
  'BONFIRE': 5
};

module.exports = {
  challengeMap: function challengeMap(req, res, next) {
    var completedList = [];

    if (req.user) {
      completedList = req.user.completedChallenges;
    }

    var noDuplicatedChallenges = R.uniq(completedList);


    var challengeList = resources.allChallenges();
    var completedChallengeList = noDuplicatedChallenges
      .map(function(challenge) {
        return challenge._id;
      });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var date1 = new Date('10/15/2014');
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));

    User.count({}, function (err, camperCount) {
      if (err) {
        debug('User err: ', err);
        return next(err);
      }
      res.render('challengeMap/show', {
        daysRunning: daysRunning,
        camperCount: numberWithCommas(camperCount),
        title: "A map of all Free Code Camp's Challenges",
        challengeList: challengeList,
        completedChallengeList: completedChallengeList
      });
    });
  }
};
