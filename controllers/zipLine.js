var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:zipline'),
    Zipline = require('./../models/Zipline'),
    User = require('./../models/User'),
    resources = require('./resources'),
    R = require('ramda');

/**
* Bonfire controller
*/

exports.showAllZiplines = function(req, res) {
    var completedZiplines = req.user.completedZiplines.map(function(elem) {
        return elem._id;
    });

    var noDuplicateZiplines = R.uniq(completedZiplines);
    var data = {};
    data.ziplineList = resources.allZiplineNames();
    data.completedList = noDuplicateZiplines;
    res.send(data);
};

exports.index = function(req, res) {
    res.render('ziplines/show.jade', {
        completedWith: null,
        title: 'Choose Your Zipline',
        name: 'Choose Your Zipline',
        difficulty: 0,
        //cc: req.user ? req.user.bonfiresHash : undefined,
        verb: resources.randomVerb(),
        phrase: resources.randomPhrase(),
        compliments: resources.randomCompliment(),
        ziplines: []
        //ziplineHash: 'test'
    });
};

exports.returnIndividualZipline = function(req, res, next) {
    var dashedName = req.params.ziplineName;

    ziplineName = dashedName.replace(/\-/g, ' ');

    Zipline.find({"name" : new RegExp(ziplineName, 'i')}, function(err, zipline) {
        if (err) {
            next(err);
        }


        if (zipline.length < 1) {
            req.flash('errors', {
                msg: "404: We couldn't find a bonfire with that name. Please double check the name."
            });

            return res.redirect('/ziplines');
        }

        zipline = zipline.pop();
        var dashedNameFull = zipline.name.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull != dashedName) {
            return res.redirect('../ziplines/' + dashedNameFull);
        }

        res.render('ziplines/show', {
            completedWith: null,
            title: zipline.name,
            dashedName: dashedName,
            name: zipline.name,
            difficulty: Math.floor(+zipline.difficulty),
            details: zipline.details,
            tests: zipline.tests,
            challengeSeed: zipline.challengeSeed,
            //cc: !!req.user,
            progressTimestamps: req.user ? req.user.progressTimestamps : undefined,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            ziplines: zipline
            //ziplineHash: zipline._id

        });
    });
};

exports.completedZipline = function (req, res) {
    var isCompletedWith = req.body.bonfireInfo.completedWith || undefined;
    var isCompletedDate = Math.round(+new Date() / 1000);
    //var ziplineHash = req.body.bonfireInfo.bonfireHash;

    if (isCompletedWith) {
        var paired = User.find({"profile.username": isCompletedWith.toLowerCase()}).limit(1);
        paired.exec(function (err, pairedWith) {
            if (err) {
                return err;
            } else {
                //var index = req.user.uncompletedZiplines.indexOf(ziplineHash);
                //if (index > -1) {
                //    req.user.progressTimestamps.push(Date.now() / 1000 | 0);
                //    req.user.uncompletedZiplines.splice(index, 1)
                //}
                //pairedWith = pairedWith.pop();
                //
                //index = pairedWith.uncompletedZiplines.indexOf(bonfiHash);
                //if (index > -1) {
                //    pairedWith.progressTimestamps.push(Date.now() / 1000 | 0);
                //    pairedWith.uncompletedZiplines.splice(index, 1);
                //
                //}
                //
                //pairedWith.completedBonfires.push({
                //    _id: bonfireHash,
                //    completedWith: req.user._id,
                //    completedDate: isCompletedDate,
                //    solution: isSolution
                //});
                //
                //req.user.completedBonfires.push({
                //    _id: bonfireHash,
                //    completedWith: pairedWith._id,
                //    completedDate: isCompletedDate,
                //    solution: isSolution
                //})
                //
                //req.user.save(function (err, user) {
                //    pairedWith.save(function (err, paired) {
                //        if (err) {
                //            throw err;
                //        }
                //        if (user && paired) {
                //            res.send(true);
                //        }
                //    })
                //});
            }
        })
    } else {

        //req.user.completedBonfires.push({
        //    _id: bonfireHash,
        //    completedWith: null,
        //    completedDate: isCompletedDate,
        //    solution: isSolution
        //});
        //
        //var index = req.user.uncompletedBonfires.indexOf(bonfireHash);
        //if (index > -1) {
        //    req.user.progressTimestamps.push(Date.now() / 1000 | 0);
        //    req.user.uncompletedBonfires.splice(index, 1)
        //}
        //
        //req.user.save(function (err, user) {
        //    if (err) {
        //        throw err;
        //    }
        //    if (user) {
        //        debug('Saving user');
        //        res.send(true)
        //    }
        //});
    }
};