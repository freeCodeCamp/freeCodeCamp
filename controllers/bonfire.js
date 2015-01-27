var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:bonfires'),
    Bonfire = require('./../models/Bonfire'),
    User = require('./../models/User'),
    resources = require('./resources');

/**
 * Bonfire controller
 */

var highestBonfireNumber = resources.numberOfBonfires();

exports.index = function(req, res) {
    res.render('bonfire/show.jade', {
        completedWith: null,
        title: 'Bonfire Playground',
        name: 'Bonfire Playground',
        difficulty: 0,
        brief: 'Feel free to play around!',
        details: '',
        tests:  [],
        challengeSeed:  '',
        challengeEntryPoint: '',
        cc: req.user ? req.user.bonfiresHash : undefined,
        points: req.user ? req.user.points : undefined,
        verb: resources.randomVerb(),
        phrase: resources.randomPhrase(),
        compliments: resources.randomCompliment(),
        bonfires: [],
        bonfireHash: 'test'

    });

    Bonfire.find({}, null, { sort: { difficulty: 1 } }, function(err, c) {
        if (err) {
            debug('bonfire err: ', err);
            next(err);
        }
    });
};

exports.returnNextBonfire = function(req, res, next) {
    var bonfireNumber;
    if (!req.user) {
        req.user = new User();
        //return res.redirect('/bonfires/meet-bonfire');
    }
    var currentTime = parseInt(+new Date() / 1000)
    if (currentTime - req.user.lastContentSync > 86400) {
        req.user.lastContentSync = currentTime;
        var completed = req.user.completedBonfires;
        // TODO : remove debug statement
        debug(req.user, 'this is the user');
        req.user.uncompletedBonfires = resources.allBonfireIds().filter(function(elem) {
           if (completed.indexOf(elem) === -1) {
               return elem;
           }
        });
    }

    var uncompletedBonfires = req.user.uncompletedBonfires;


    var displayedBonfires =  Bonfire.find({'_id': uncompletedBonfires[0]});
    displayedBonfires.exec(function(err, bonfire) {
        if (err) {
            next(err);
        }
        debug('Finding next bonfire for user', bonfire);
        nameString = bonfire[0].name.toLowerCase().replace(/\s/g, '-');
        return res.redirect('/bonfires/' + nameString);
        //res.render('bonfire/show', {
        //    completedWith: null,
        //    title: bonfire[bonfireNumber].name,
        //    name: bonfire[bonfireNumber].name,
        //    difficulty: +bonfire[bonfireNumber].difficulty,
        //    brief: bonfire[bonfireNumber].description[0],
        //    details: bonfire[bonfireNumber].description.slice(1),
        //    tests:  bonfire[bonfireNumber].tests,
        //    challengeSeed:  bonfire[bonfireNumber].challengeSeed,
        //    challengeEntryPoint: bonfire[bonfireNumber].challengeEntryPoint,
        //    cc: req.user ? req.user.bonfiresHash : undefined,
        //    points: req.user ? req.user.points : undefined,
        //    verb: resources.randomVerb(),
        //    phrase: resources.randomPhrase(),
        //    compliments: resources.randomCompliment(),
        //    bonfires: bonfire,
        //    bonfireHash: bonfire[bonfireNumber]._id
        //});
    });
};

exports.returnIndividualBonfire = function(req, res, next) {
    var bonfireName = req.params.bonfireName;

    bonfireName = bonfireName.replace(/\-/g, ' ');
    var bonfireNumber = 0;

    Bonfire.find({"name" : new RegExp(bonfireName, 'i')}, function(err, bonfire) {
        if (err) {
            next(err);
        }
        if (bonfire.length < 1) {
            debug('Full Bonfire', bonfire);
            req.flash('errors', {
                msg: "404: We couldn't find a bonfire with that name. Please double check the name."
            });
            return res.redirect('/bonfires/meet-bonfire')
        } else {
            res.render('bonfire/show', {
                completedWith: null,
                title: bonfire[bonfireNumber].name,
                name: bonfire[bonfireNumber].name,
                difficulty: +bonfire[bonfireNumber].difficulty,
                brief: bonfire[bonfireNumber].description[0],
                details: bonfire[bonfireNumber].description.slice(1),
                tests: bonfire[bonfireNumber].tests,
                challengeSeed: bonfire[bonfireNumber].challengeSeed,
                challengeEntryPoint: bonfire[bonfireNumber].challengeEntryPoint,
                cc: !!req.user,
                points: req.user ? req.user.points : undefined,
                verb: resources.randomVerb(),
                phrase: resources.randomPhrase(),
                compliment: resources.randomCompliment(),
                bonfires: bonfire,
                bonfireHash: bonfire[bonfireNumber]._id

            });
        }
    });
};

/**
 * Bonfire generator
 */
exports.returnGenerator = function(req, res) {
    res.render('bonfire/generator', {
        title: null,
        name: null,
        difficulty: null,
        brief: null,
        details: null,
        tests: null,
        challengeSeed: null,
        challengeEntryPoint: null,
        bonfireHash: randomString()
    });
};

/**
 * Post for bonfire generation
 */

function randomString() {
    var chars = "0123456789abcdef";
    var string_length = 23;
    var randomstring = 'a';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}

/**
 *
 */

exports.testBonfire = function(req, res) {
    var bonfireName = req.body.name,
        bonfireTests = req.body.tests,
        bonfireDifficulty = req.body.difficulty,
        bonfireDescription = req.body.description,
        bonfireEntryPoint = req.body.challengeEntryPoint,
        bonfireChallengeSeed = req.body.challengeSeed;
    bonfireTests = bonfireTests.split('\r\n');
    bonfireDescription = bonfireDescription.split('\r\n');
    bonfireTests.filter(getRidOfEmpties);
    bonfireDescription.filter(getRidOfEmpties);
    bonfireChallengeSeed = bonfireChallengeSeed.replace('\r', '');
    res.render('bonfire/show', {
        completedWith: null,
        title: bonfireName,
        difficulty: +bonfireDifficulty,
        brief: bonfireDescription[0],
        details: bonfireDescription.slice(1),
        tests:  bonfireTests,
        challengeSeed:  bonfireChallengeSeed,
        challengeEntryPoint: bonfireEntryPoint,
        cc: req.user ? req.user.bonfiresHash : undefined,
        points: req.user ? req.user.points : undefined,
        verb: resources.randomVerb(),
        phrase: resources.randomPhrase(),
        compliment: resources.randomCompliment(),
        bonfires: [],
        bonfireHash: "test"
    });
};

function getRidOfEmpties(elem) {
    if (elem.length > 0) {
        return elem;
    }
}

exports.publicGenerator = function(req, res) {
    res.render('bonfire/public-generator');
}

exports.generateChallenge = function(req, res) {
    var bonfireName = req.body.name,
        bonfireTests = req.body.tests,
        bonfireDifficulty = req.body.difficulty,
        bonfireDescription = req.body.description,
        bonfireEntryPoint = req.body.challengeEntryPoint,
        bonfireChallengeSeed = req.body.challengeSeed;
    bonfireTests = bonfireTests.split('\r\n');
    bonfireDescription = bonfireDescription.split('\r\n');
    bonfireTests.filter(getRidOfEmpties);
    bonfireDescription.filter(getRidOfEmpties);
    bonfireChallengeSeed = bonfireChallengeSeed.replace('\r', '');


    var response = {
        _id: randomString(),
        name: bonfireName,
        difficulty: bonfireDifficulty,
        description: bonfireDescription,
        challengeEntryPoint: bonfireEntryPoint,
        challengeSeed: bonfireChallengeSeed,
        tests: bonfireTests
    };
    res.send(response);
}
