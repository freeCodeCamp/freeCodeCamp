var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:bonfires'),
    Bonfire = require('./../models/Bonfire'),
    User = require('./../models/User'),
    resources = require('./resources');

/**
 * Bonfire controller
 */

var highestBonfireNumber = 2;

exports.index = function(req, res) {
    res.render('bonfire/bonfire.jade', {
        title: 'Learn to code with Bonfire',
        completedWith: null,
        title: null,
        difficulty: null,
        brief: null,
        details: null,
        tests:  null,
        challengeSeed:  null,
        challengeEntryPoint: null,
        cc: req.user ? req.user.bonfiresHash : undefined,
        points: req.user ? req.user.points : undefined,
        verb: resources.randomVerb(),
        phrase: resources.randomPhrase(),
        compliment: resources.randomCompliment(),
        bonfires: [],
        bonfireHash: "test"

    });

    Bonfire.find({}, null, { sort: { difficulty: 1 } }, function(err, c) {
        if (err) {
            debug('bonfire err: ', err);
            next(err);
        }
    });
};

exports.returnBonfire = function(req, res, next) {
    var bonfireNumber = parseInt(req.params.bonfireNumber) || 0;
    // This code is in bad need of refactoring
    var bonfiresToFind = req.user.bonfiresHash;
    var bonfiresArray = _.map(bonfiresToFind, function(value, index) {
        return [index, value];
    });
    // Get rid of the first entry, which will be a useless function that causes an error.
    bonfiresArray.shift();
    unsolvedBonfires = [];
    for (i = 0; i < bonfiresArray.length; i++) {
        if (bonfiresArray[i][1]["completedDate"] === 0) {
            unsolvedBonfires.push(bonfiresArray[i][0])
        }
    }

    //.where('likes').in(['vaporizing', 'talking'])
    var displayedBonfires =  Bonfire.find({}).where('_id').in(unsolvedBonfires).sort({ difficulty: 1 });
    displayedBonfires.exec(function(err, bonfire) {
        if (err) {
            next(err);
        }
        res.render('bonfire/show', {
            completedWith: null,
            title: bonfire[bonfireNumber].name,
            name: bonfire[bonfireNumber].name,
            difficulty: +bonfire[bonfireNumber].difficulty,
            brief: bonfire[bonfireNumber].description[0],
            details: bonfire[bonfireNumber].description.slice(1),
            tests:  bonfire[bonfireNumber].tests,
            challengeSeed:  bonfire[bonfireNumber].challengeSeed,
            challengeEntryPoint: bonfire[bonfireNumber].challengeEntryPoint,
            cc: req.user ? req.user.bonfiresHash : undefined,
            points: req.user ? req.user.points : undefined,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliments: resources.randomCompliment(),
            bonfires: bonfire,
            bonfireHash: bonfire[bonfireNumber]._id
        });
    });
};

exports.returnIndividualBonfire = function(req, res, next) {
    var bonfireNumber = parseInt(req.params.bonfireNumber) || 0;

    if (bonfireNumber > highestBonfireNumber) { bonfireNumber = 0; }
    Bonfire.find({}, null, { sort: { difficulty: 1 } }, function(err, bonfire) {
        if (err) {
            next(err);
        }
        res.render('bonfire/show', {
            completedWith: null,
            title: bonfire[bonfireNumber].name,
            name: bonfire[bonfireNumber].name,
            difficulty: +bonfire[bonfireNumber].difficulty,
            brief: bonfire[bonfireNumber].description[0],
            details: bonfire[bonfireNumber].description.slice(1),
            tests:  bonfire[bonfireNumber].tests,
            challengeSeed:  bonfire[bonfireNumber].challengeSeed,
            challengeEntryPoint: bonfire[bonfireNumber].challengeEntryPoint,
            cc: req.user ? req.user.bonfiresHash : undefined,
            points: req.user ? req.user.points : undefined,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            bonfires: bonfire,
            bonfireHash: bonfire[bonfireNumber]._id
        });
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
    var string_length = 24;
    var randomstring = '';
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
