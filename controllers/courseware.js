var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:courseware'),
    Courseware = require('./../models/Courseware'),
    User = require('./../models/User'),
    resources = require('./resources'),
    R = require('ramda'),
    moment = require('moment');

/**
 * Courseware controller
 */

exports.showAllCoursewares = function(req, res) {
  var completedCoursewares = req.user.completedCoursewares.map(function(elem) {
    return elem._id;
  });

  var noDuplicatedCoursewares = R.uniq(completedCoursewares);
  var data = {};
  data.coursewareList = resources.allCoursewareNames();
  data.completedList = noDuplicatedCoursewares;
  res.send(data);
};

exports.returnNextCourseware = function(req, res, next) {
  if (!req.user) {
    return res.redirect('../challenges/learn-how-free-code-camp-works');
  }
  var completed = req.user.completedCoursewares.map(function (elem) {
    return elem._id;
  });

  req.user.uncompletedCoursewares = resources.allCoursewareIds()
    .filter(function (elem) {
    if (completed.indexOf(elem) === -1) {
      return elem;
    }
  });
  req.user.save();

  var uncompletedCoursewares = req.user.uncompletedCoursewares.shift();


  var displayedCoursewares = Courseware.find({'_id': uncompletedCoursewares});
  displayedCoursewares.exec(function(err, courseware) {
    if (err) {
      return next(err);
    }

    courseware = courseware.pop();
    if (courseware === undefined) {
      req.flash('errors', {
        msg: "It looks like you've completed all the courses we have " +
        "available. Good job!"
      });
      return res.redirect('../challenges/learn-how-free-code-camp-works');
    }
    nameString = courseware.name.toLowerCase().replace(/\s/g, '-');
    return res.redirect('../challenges/' + nameString);
  });
};

exports.returnIndividualCourseware = function(req, res, next) {
  var dashedName = req.params.coursewareName;

  var coursewareName = dashedName.replace(/\-/g, ' ');

  Courseware.find({'name': new RegExp(coursewareName, 'i')},
    function(err, courseware) {
    if (err) {
      next(err);
    }
    // Handle not found
    if (courseware.length < 1) {
      req.flash('errors', {
        msg: "404: We couldn't find a challenge with that name. " +
        "Please double check the name."
      });
      return res.redirect('/challenges');
    }
    courseware = courseware.pop();

    // Redirect to full name if the user only entered a partial
    var dashedNameFull = courseware.name.toLowerCase().replace(/\s/g, '-');
    if (dashedNameFull != dashedName) {
      return res.redirect('../challenges/' + dashedNameFull);
    }

    var challengeType = {
      0: function() {
        res.render('coursewares/showHTML', {
          title: courseware.name,
          dashedName: dashedName,
          name: courseware.name,
          brief: courseware.description[0],
          details: courseware.description.slice(1),
          tests: courseware.tests,
          challengeSeed: courseware.challengeSeed,
          verb: resources.randomVerb(),
          phrase: resources.randomPhrase(),
          compliment: resources.randomCompliment(),
          coursewareHash: courseware._id,
          environment: resources.whichEnvironment()
        });
      },

      1: function() {
        res.render('coursewares/showJS', {
          title: courseware.name,
          dashedName: dashedName,
          name: courseware.name,
          brief: courseware.description[0],
          details: courseware.description.slice(1),
          tests: courseware.tests,
          challengeSeed: courseware.challengeSeed,
          verb: resources.randomVerb(),
          phrase: resources.randomPhrase(),
          compliment: resources.randomCompliment(),
          coursewareHash: courseware._id,

        });
      },

      2: function() {
        res.render('coursewares/showVideo', {
          title: courseware.name,
          dashedName: dashedName,
          name: courseware.name,
          details: courseware.description,
          tests: courseware.tests,
          video: courseware.challengeSeed[0],
          verb: resources.randomVerb(),
          phrase: resources.randomPhrase(),
          compliment: resources.randomCompliment(),
          coursewareHash: courseware._id,
          challengeType: 'video'
        });
      },

      3: function() {
        res.render('coursewares/showZiplineOrBasejump', {
          title: courseware.name,
          dashedName: dashedName,
          name: courseware.name,
          details: courseware.description,
          video: courseware.challengeSeed[0],
          verb: resources.randomVerb(),
          phrase: resources.randomPhrase(),
          compliment: resources.randomCompliment(),
          coursewareHash: courseware._id,
          challengeType: courseware.challengeType
        });
      }
    };

    return challengeType[courseware.challengeType]();

  });
};

exports.testCourseware = function(req, res) {
  var coursewareName = req.body.name,
  coursewareTests = req.body.tests,
  coursewareDifficulty = req.body.difficulty,
  coursewareDescription = req.body.description,
  coursewareEntryPoint = req.body.challengeEntryPoint,
  coursewareChallengeSeed = req.body.challengeSeed;
  coursewareTests = coursewareTests.split('\r\n');
  coursewareDescription = coursewareDescription.split('\r\n');
  coursewareTests.filter(getRidOfEmpties);
  coursewareDescription.filter(getRidOfEmpties);
  coursewareChallengeSeed = coursewareChallengeSeed.replace('\r', '');
  res.render('courseware/show', {
    completedWith: null,
    title: coursewareName,
    name: coursewareName,
    difficulty: +coursewareDifficulty,
    brief: coursewareDescription[0],
    details: coursewareDescription.slice(1),
    tests: coursewareTests,
    challengeSeed: coursewareChallengeSeed,
    challengeEntryPoint: coursewareEntryPoint,
    cc: req.user ? req.user.coursewaresHash : undefined,
    progressTimestamps: req.user ? req.user.progressTimestamps : undefined,
    verb: resources.randomVerb(),
    phrase: resources.randomPhrase(),
    compliment: resources.randomCompliment(),
    coursewares: [],
    coursewareHash: 'test'
  });
};

function getRidOfEmpties(elem) {
  if (elem.length > 0) {
    return elem;
  }
}

exports.publicGenerator = function(req, res) {
  res.render('courseware/public-generator');
};

exports.generateChallenge = function(req, res) {
  var coursewareName = req.body.name,
  coursewareTests = req.body.tests,
  coursewareDifficulty = req.body.difficulty,
  coursewareDescription = req.body.description,
  coursewareEntryPoint = req.body.challengeEntryPoint,
  coursewareChallengeSeed = req.body.challengeSeed;
  coursewareTests = coursewareTests.split('\r\n');
  coursewareDescription = coursewareDescription.split('\r\n');
  coursewareTests.filter(getRidOfEmpties);
  coursewareDescription.filter(getRidOfEmpties);
  coursewareChallengeSeed = coursewareChallengeSeed.replace('\r', '');

  var response = {
    _id: randomString(),
    name: coursewareName,
    difficulty: coursewareDifficulty,
    description: coursewareDescription,
    challengeEntryPoint: coursewareEntryPoint,
    challengeSeed: coursewareChallengeSeed,
    tests: coursewareTests
  };
  res.send(response);
};

exports.completedCourseware = function (req, res, next) {

  var isCompletedDate = Math.round(+new Date());
  var coursewareHash = req.body.coursewareInfo.coursewareHash;

  req.user.completedCoursewares.push({
    _id: coursewareHash,
    completedDate: isCompletedDate,
    name: req.body.coursewareInfo.coursewareName
  });
  var index = req.user.completedCoursewares.indexOf(coursewareHash);

  if (index === -1) {
    req.user.progressTimestamps.push(Date.now() || 0);
    req.user.uncompletedCoursewares.splice(index, 1);
  }

  req.user.save(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      res.send(true);
    }
  });
};

exports.completedZiplineOrBasejump = function (req, res, next) {
  var isCompletedWith = req.body.bonfireInfo.completedWith || false;
  var isCompletedDate = Math.round(+new Date());
  var coursewareHash = req.body.coursewareInfo.coursewareHash;
  var solutionLink = req.body.coursewareInfo.solutionLink;
  if (!solutionLink) {
    // flash error and redirect
    return next(new Error('No solution provided'));
  }

  if (isCompletedWith) {
    var paired = User.find({'profile.username': isCompletedWith.toLowerCase()}).limit(1);
    paired.exec(function (err, pairedWith) {
      if (err) {
        return next(err);
      } else {
        var index = req.user.uncompletedCoursewares.indexOf(coursewareHash);
        if (index > -1) {
          req.user.progressTimestamps.push(Date.now() || 0);
          req.user.uncompletedCoursewares.splice(index, 1);
        }
        pairedWith = pairedWith.pop();

        index = pairedWith.uncompletedCoursewares.indexOf(coursewareHash);
        if (index > -1) {
          pairedWith.progressTimestamps.push(Date.now() || 0);
          pairedWith.uncompletedCoursewares.splice(index, 1);

        }

        pairedWith.completedCoursewares.push({
          _id: coursewareHash,
          completedWith: req.user._id,
          completedDate: isCompletedDate,
          solution: solutionLink
        });

        req.user.completedCoursewares.push({
          _id: coursewareHash,
          completedWith: pairedWith._id,
          completedDate: isCompletedDate,
          solution: solutionLink
        });

        req.user.save(function (err, user) {
          if (err) {
            return next(err);
          }
          pairedWith.save(function (err, paired) {
            if (err) {
              return next(err);
            }
            if (user && paired) {
              return res.send(true);
            }
          });
        });
      }
    });
  } else {

    req.user.completedCoursewares.push({
      _id: coursewareHash,
      completedWith: null,
      completedDate: isCompletedDate,
      solution: solutionLink
    });

    var index = req.user.uncompletedCourse.indexOf(coursewareHash);
    if (index > -1) {
      req.user.progressTimestamps.push(Date.now() || 0);
      req.user.uncompletedCoursewares.splice(index, 1);
    }

    req.user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      if (user) {
        debug('Saving user');
        return res.send(true);
      }
    });
  }
};
