var R = require('ramda'),
    FieldGuide = require('./../models/FieldGuide'),
    resources = require('./resources');

exports.returnIndividualFieldGuide = function(req, res, next) {
  var dashedName = req.params.fieldGuideName;

  var fieldGuideName = dashedName.replace(/\-/g, ' ');

  if (req.user) {
    var completed = req.user.completedFieldGuides;

    var uncompletedFieldGuides = resources.allFieldGuideIds()
      .filter(function (elem) {
        if (completed.indexOf(elem) === -1) {
          return elem;
        }
      });
    req.user.uncompletedFieldGuides = uncompletedFieldGuides;
    // TODO(berks): handle callback properly
    req.user.save();
  }

  FieldGuide.find(
    { name: new RegExp(fieldGuideName, 'i') },
    function(err, fieldGuideFromMongo) {
      if (err) {
        return next(err);
      }

      if (fieldGuideFromMongo.length < 1) {
        req.flash('errors', {
          msg: "404: We couldn't find a field guide entry with that name. " +
          'Please double check the name.'
        });

        return res.redirect('/field-guide');
      }

      var fieldGuide = R.head(fieldGuideFromMongo);
      var dashedNameFull =
        fieldGuide.name.toLowerCase().replace(/\s/g, '-').replace(/\?/g, '');

      if (dashedNameFull !== dashedName) {
        return res.redirect('../field-guide/' + dashedNameFull);
      }
      res.render('field-guide/show', {
        title: fieldGuide.name,
        fieldGuideId: fieldGuide._id,
        description: fieldGuide.description.join('')
      });
    }
  );
};

exports.showAllFieldGuides = function(req, res) {
  var data = {};
  data.fieldGuideList = resources.allFieldGuideNames();
  data.fieldGuideIds = resources.allFieldGuideIds();

  if (req.user && req.user.completedFieldGuides) {
    data.completedFieldGuides = req.user.completedFieldGuides;
  } else {
    data.completedFieldGuides = [];
  }
  res.send(data);
};

exports.returnNextFieldGuide = function(req, res, next) {
  if (!req.user) {
    return res.redirect('/field-guide/how-do-i-use-this-guide?');
  }

  var displayedFieldGuides =
    FieldGuide.find({'_id': req.user.uncompletedFieldGuides[0]});

  displayedFieldGuides.exec(function(err, fieldGuide) {
    if (err) { return next(err); }
    fieldGuide = fieldGuide.pop();

    if (typeof fieldGuide === 'undefined') {
      if (req.user.completedFieldGuides.length > 0) {
        req.flash('success', {
          msg: [
            "You've read all our current Field Guide entries. You can ",
            'contribute to our Field Guide ',
            "<a href='https://github.com/FreeCodeCamp/freecodecamp/blob/",
            "staging/seed_data/field-guides.json'>here</a>."
          ].join('')
        });
      }
      return res.redirect('../field-guide/how-do-i-use-this-guide?');
    }
    var nameString = fieldGuide.name.toLowerCase().replace(/\s/g, '-');
    return res.redirect('../field-guide/' + nameString);
  });
};

exports.completedFieldGuide = function (req, res, next) {
  var fieldGuideId = req.body.fieldGuideInfo.fieldGuideId;

  req.user.completedFieldGuides.push(fieldGuideId);

  var index = req.user.uncompletedFieldGuides.indexOf(fieldGuideId);
  if (index > -1) {
    req.user.progressTimestamps.push(Date.now());
    req.user.uncompletedFieldGuides.splice(index, 1);
  }

  req.user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(true);
  });
};
