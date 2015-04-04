var async = require('async'),
  User = require('../models/User'),
  Bonfire = require('./../models/Bonfire'),
  Story = require('./../models/Story'),
  Wiki = require('./../models/Wiki'),
  Nonprofit = require('./../models/Nonprofit'),
  Comment = require('./../models/Comment'),
  Courseware = require('./../models/Courseware'),
  resources = require('./resources'),
  steps = resources.steps,
  secrets = require('./../config/secrets'),
  bonfires = require('../seed_data/bonfires.json'),
  nonprofits = require('../seed_data/nonprofits.json'),
  coursewares = require('../seed_data/coursewares.json'),
  wikis = require('../seed_data/wikis.json'),
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

    res.render('challengeMap/show', {
      title: "A map of all Free Code Camp's Challenges",
      bonfires: bonfireList,
      waypoints: waypoints,
      ziplines: ziplines,
      basejumps: basejumps,
      completedBonfireList: completedBonfireList,
      completedCoursewareList: completedCoursewareList
    });
  }
};
