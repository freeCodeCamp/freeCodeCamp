var async = require('async'),
  User = require('../models/User'),
  Bonfire = require('./../models/Bonfire'),
  Story = require('./../models/Story'),
  Nonprofit = require('./../models/Nonprofit'),
  Comment = require('./../models/Comment'),
  Courseware = require('./../models/Courseware'),
  resources = require('./resources'),
  steps = resources.steps,
  secrets = require('./../config/secrets'),
  bonfires = require('../seed_data/bonfires.json'),
  nonprofits = require('../seed_data/nonprofits.json'),
  coursewares = require('../seed_data/coursewares.json'),
  moment = require('moment'),
  https = require('https'),
  debug = require('debug')('freecc:cntr:resources'),
  cheerio = require('cheerio'),
  request = require('request'),
  R = require('ramda');

module.exports = {
  challengeMap: function challengeMap(req, res) {
    var completedBonfires = [];
    var completedList = [];

    if (req.user) {
      completedBonfires = req.user.completedBonfires.map(function (elem) {
        return elem._id;
      });
    }

    if (req.user) {
      completedList = req.user.completedCoursewares.map(function (elem) {
        return elem._id;
      });
    }

    var noDuplicateBonfires = R.uniq(completedBonfires);
    var noDuplicatedCoursewares = R.uniq(completedList);

    bonfireList = resources.allBonfireNames();
    completedBonfireList = noDuplicateBonfires;
    coursewareList = resources.allCoursewareNames();
    completedCoursewareList = noDuplicatedCoursewares;
    waypoints = coursewareList.filter(function(challenge) {
      if (challenge.challengeType === 2) { return challenge }
    });
    ziplines = coursewareList.filter(function(challenge) {
      if (challenge.challengeType === 3) { return challenge }
    });
    basejumps = coursewareList.filter(function(challenge) {
      if (challenge.challengeType === 4) { return challenge }
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var date1 = new Date("10/15/2014");
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
        bonfires: bonfireList,
        waypoints: waypoints,
        ziplines: ziplines,
        basejumps: basejumps,
        completedBonfireList: completedBonfireList,
        completedCoursewareList: completedCoursewareList
      });
    });
  }
};
