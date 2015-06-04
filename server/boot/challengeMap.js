var R = require('ramda'),
  // debug = require('debug')('freecc:cntr:challengeMap'),
  utils = require('./../utils'),
  middleware = require('../utils/middleware');


module.exports = function(app) {
  var User = app.models.User;
  var router = app.loopback.Router();

  router.get('/map', middleware.userMigration, challengeMap);
  router.get('/learn-to-code', function(req, res) {
    res.redirect(301, '/map');
  });
  router.get('/about', function(req, res) {
    res.redirect(301, '/map');
  });

  app.use(router);

  function challengeMap(req, res, next) {
    var completedList = [];

    if (req.user) {
      completedList = req.user.completedChallenges;
    }

    var noDuplicatedChallenges = R.uniq(completedList);

    var completedChallengeList = noDuplicatedChallenges
      .map(function(challenge) {
        return challenge.id;
      });
    var challengeList = utils.
      getChallengeMapForDisplay(completedChallengeList);

    Object.keys(challengeList).forEach(function(key) {
      challengeList[key].completed = challengeList[key]
        .challenges.filter(function(elem) {
        return completedChallengeList.indexOf(elem.id) > -1;
      });
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var date1 = new Date('10/15/2014');
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));

    User.count(function(err, camperCount) {
      if (err) { return next(err); }

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
