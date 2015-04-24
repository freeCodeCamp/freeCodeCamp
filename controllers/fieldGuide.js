var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:fieldGuide'),
    FieldGuide = require('./../models/FieldGuide'),
    resources = require('./resources'),
    R = require('ramda');

exports.returnIndividualFieldGuide = function(req, res, next) {
    var dashedName = req.params.fieldGuideName;

    var fieldGuideName = dashedName.replace(/\-/g, ' ');

    FieldGuide.find({'name': new RegExp(fieldGuideName, 'i')}, function(err, fieldGuideFromMongo) {
        if (err) {
            next(err);
        }

        if (fieldGuideFromMongo.length < 1) {
            req.flash('errors', {
                msg: "404: We couldn't find a field guide entry with that name. Please double check the name."
            });

            return res.redirect('/field-guide');
        }

        fieldGuide = fieldGuideFromMongo.pop();
        var dashedNameFull = fieldGuide.name.toLowerCase().replace(/\s/g, '-').replace(/\?/g, '');
        if (dashedNameFull !== dashedName) {
            return res.redirect('../field-guide/' + dashedNameFull);
        }
        res.render('field-guide/show', {
            title: fieldGuide.name,
            fieldGuideId: fieldGuide._id,
            description: fieldGuide.description.join('')
        });
    });
};

exports.showAllFieldGuides = function(req, res) {
    var data = {};
    data.fieldGuideList = resources.allFieldGuideNames();
    data.fieldGuideIds = resources.allFieldGuideIds();
    if (req.user && req.user.completedFieldGuides) {
      data.completedFieldGuides = req.user.completedFieldGuides;
    } else {
      data.completedFieldGuides = []
    }
    res.send(data);
};

exports.returnNextFieldGuide = function(req, res, next) {
  if (!req.user) {
    return res.redirect('../field-guide/how-do-i-use-this-guide?');
  }

  var completed = req.user.completedFieldGuides;

  req.user.uncompletedFieldGuides = resources.allFieldGuideIds().filter(function (elem) {
    if (completed.indexOf(elem) === -1) {
      return elem;
    }
  });
  req.user.save();

  var uncompletedFieldGuides = req.user.uncompletedFieldGuides;

  var displayedFieldGuides =  FieldGuide.find({'_id': uncompletedFieldGuides[0]});
  displayedFieldGuides.exec(function(err, fieldGuide) {
    if (err) {
      return next(err);
    }
    fieldGuide = fieldGuide.pop();
    if (typeof fieldGuide === 'undefined') {
      req.flash('success', {
        msg: "You've read all our current Field Guide entries. You can contribute to our Field Guide <a href='https://github.com/FreeCodeCamp/freecodecamp/blob/master/seed_data/field-guides.json'>here</a>."
      });
      return res.redirect('../field-guide/how-do-i-use-this-guide?');
    }
    var nameString = fieldGuide.name.toLowerCase().replace(/\s/g, '-');
    return res.redirect('../field-guide/' + nameString);
  });
};

exports.completedFieldGuide = function (req, res, next) {
  debug('params in completedFieldGuide', req.params);
  var fieldGuideId = req.body.fieldGuideInfo.fieldGuideId;

  req.user.completedFieldGuides.push(fieldGuideId);

  var index = req.user.uncompletedFieldGuides.indexOf(fieldGuideId);
  if (index > -1) {
    req.user.progressTimestamps.push(Date.now() || 0);
    req.user.uncompletedFieldGuides.splice(index, 1);
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
