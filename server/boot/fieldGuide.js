var R = require('ramda'),
    express = require('express'),
    // debug = require('debug')('freecc:fieldguides'),
    FieldGuide = require('../../common/models/FieldGuide'),
    resources = require('../resources/resources');

var router = express.Router();

router.get('/field-guide/all-articles', showAllFieldGuides);
router.get('/field-guide/:fieldGuideName', returnIndividualFieldGuide);
router.get('/field-guide/', returnNextFieldGuide);
router.post('/completed-field-guide/', completedFieldGuide);

function returnIndividualFieldGuide(req, res, next) {
  var dashedName = req.params.fieldGuideName;
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
    { dashedName: new RegExp(dashedName, 'i') },
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
        fieldGuide.name.toLowerCase().replace(/\s/g, '-').replace(/\?/g, '');

      if (fieldGuide.dashedName !== dashedName) {
        return res.redirect('../field-guide/' + fieldGuide.dashedName);
      }
      res.render('field-guide/show', {
        title: fieldGuide.name,
        fieldGuideId: fieldGuide._id,
        description: fieldGuide.description.join('')
      });
    }
  );
}

function showAllFieldGuides(req, res) {
  var allFieldGuideNamesAndIds = resources.allFieldGuideNamesAndIds();

  var completedFieldGuides = [];
  if (req.user && req.user.completedFieldGuides) {
    completedFieldGuides = req.user.completedFieldGuides;
  }
  res.render('field-guide/all-articles', {
    allFieldGuideNamesAndIds: allFieldGuideNamesAndIds,
    completedFieldGuides: completedFieldGuides
  });
}

function returnNextFieldGuide(req, res, next) {
  if (!req.user) {
    return res.redirect('/field-guide/how-do-i-use-this-guide');
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
      return res.redirect('../field-guide/how-do-i-use-this-guide');
    }
    var nameString = fieldGuide.name.toLowerCase().replace(/\s/g, '-');
    return res.redirect('../field-guide/' + nameString);
  });
}

function completedFieldGuide(req, res, next) {
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
}

module.exports = router;
