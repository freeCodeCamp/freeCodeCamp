var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:courseware'),
    Courseware = require('./../models/Courseware'),
    User = require('./../models/User'),
    resources = require('./resources');

/**
 * Courseware controller
 */

exports.coursewareNames = function(req, res) {
    res.render('coursewares/showList', {
        coursewareList: resources.allCoursewareNames()
    });
};

exports.returnNextCourseware = function(req, res) {
    if (!req.user) {
        return res.redirect('../coursewares/start-our-challenges');
    }
    var completed = req.user.completedCoursewares.map(function (elem) {
        return elem._id;
    });

    req.user.uncompletedCoursewares = resources.allCoursewareIds().filter(function (elem) {
        if (completed.indexOf(elem) === -1) {
            return elem;
        }
    });
    req.user.save();

    var uncompletedCoursewares = req.user.uncompletedCoursewares;

    var displayedCoursewares =  Courseware.find({'_id': uncompletedCoursewares[0]});
    displayedCoursewares.exec(function(err, courseware) {
        if (err) {
            next(err);
        }
        courseware = courseware.pop();
        if (courseware === undefined) {
            req.flash('errors', {
                msg: "It looks like you've completed all the courses we have available. Good job!"
            })
            return res.redirect('../coursewares/start-our-challenges');
        }
        nameString = courseware.name.toLowerCase().replace(/\s/g, '-');
        return res.redirect('../coursewares/' + nameString);
    });
};

exports.returnIndividualCourseware = function(req, res, next) {
    var dashedName = req.params.coursewareName;

    coursewareName = dashedName.replace(/\-/g, ' ');

    Courseware.find({"name" : new RegExp(coursewareName, 'i')}, function(err, courseware) {
        if (err) {
            next(err);
        }
        // Handle not found
        if (courseware.length < 1) {
            req.flash('errors', {
            msg: "404: We couldn't find a challenge with that name. Please double check the name."
        });
            return res.redirect('/coursewares')
        }
        courseware = courseware.pop();

        // Redirect to full name if the user only entered a partial
        var dashedNameFull = courseware.name.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull != dashedName) {
            return res.redirect('../coursewares/' + dashedNameFull);
        }

        var challengeType = {
            0 : function() {
                res.render('coursewares/showHTML', {
                    title: courseware.name,
                    dashedName: dashedName,
                    name: courseware.name,
                    brief: courseware.description[0],
                    details: courseware.description.slice(1),
                    tests: courseware.tests,
                    challengeSeed: courseware.challengeSeed,
                    cc: !!req.user,
                    points: req.user ? req.user.points : undefined,
                    verb: resources.randomVerb(),
                    phrase: resources.randomPhrase(),
                    compliment: resources.randomCompliment(),
                    coursewareHash: courseware._id,
                    environment: resources.whichEnvironment()
                });
            },

            1 : function() {
                res.render('coursewares/showJS', {
                    title: courseware.name,
                    dashedName: dashedName,
                    name: courseware.name,
                    brief: courseware.description[0],
                    details: courseware.description.slice(1),
                    tests: courseware.tests,
                    challengeSeed: courseware.challengeSeed,
                    cc: !!req.user,
                    points: req.user ? req.user.points : undefined,
                    verb: resources.randomVerb(),
                    phrase: resources.randomPhrase(),
                    compliment: resources.randomCompliment(),
                    coursewareHash: courseware._id,
                    environment: resources.whichEnvironment()

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
                    cc: !!req.user,
                    points: req.user ? req.user.points : undefined,
                    verb: resources.randomVerb(),
                    phrase: resources.randomPhrase(),
                    compliment: resources.randomCompliment(),
                    coursewareHash: courseware._id,
                    environment: resources.whichEnvironment()
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
        tests:  coursewareTests,
        challengeSeed:  coursewareChallengeSeed,
        challengeEntryPoint: coursewareEntryPoint,
        cc: req.user ? req.user.coursewaresHash : undefined,
        points: req.user ? req.user.points : undefined,
        verb: resources.randomVerb(),
        phrase: resources.randomPhrase(),
        compliment: resources.randomCompliment(),
        coursewares: [],
        coursewareHash: "test"
    });
};

function getRidOfEmpties(elem) {
    if (elem.length > 0) {
        return elem;
    }
};

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

exports.completedCourseware = function (req, res) {

    var isCompletedDate = Math.round(+new Date() / 1000);
    var coursewareHash = req.body.coursewareInfo.coursewareHash;

    req.user.completedCoursewares.push({
        _id: coursewareHash,
        completedDate: isCompletedDate
    });

    var index = req.user.uncompletedCoursewares.indexOf(coursewareHash);
    if (index > -1) {
        req.user.points++;
        req.user.uncompletedCoursewares.splice(index, 1)
    }

    req.user.save(function (err, user) {
        if (err) {
            throw err;
        }
        if (user) {
            res.send(true)
        }
    });
};