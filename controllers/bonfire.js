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
    // This code is in bad need of refactoring
    var bonfiresToFind = req.user ? req.user.bonfiresHash : [];
    var bonfiresArray = _.map(bonfiresToFind, function(value, index) {
        return [index, value];
    });
    // Get rid of the first entry, which will be a useless function that causes an error.
    bonfiresArray.shift();
    var unsolvedBonfires = [];
    for (i = 0; i < bonfiresArray.length; i++) {
        if (bonfiresArray[i][1]["completedDate"] === 0) {
            unsolvedBonfires.push(bonfiresArray[i][0])
        }
    }


    var displayedBonfires =  Bonfire.find({}).where('_id').in(unsolvedBonfires).sort({ difficulty: 1 });
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
    debug('Getting this as argument for bonfireName', bonfireName);
    //if (!/[a-z\-]+/i.test(bonfireName)) {
    //    bonfireName = 'meet bonfire';
    //}

    bonfireName = bonfireName.replace(/\-/g, ' ');
    debug('Checking sanity of name of bonfire after replacing "-" characters', bonfireName);
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
