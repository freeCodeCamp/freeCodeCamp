var R = require('ramda'),
    // Rx = require('rx'),
    // debug = require('debug')('freecc:fieldguides'),
    utils = require('../utils');

module.exports = function(app) {
  var router = app.loopback.Router();
  var FieldGuide = app.models.FieldGuide;

  router.get('/field-guide/all-articles', showAllFieldGuides);
  router.get('/field-guide/:fieldGuideName', returnIndividualFieldGuide);
  router.get('/field-guide/', returnNextFieldGuide);
  router.post('/completed-field-guide/', completedFieldGuide);

  app.use(router);

  function returnIndividualFieldGuide(req, res, next) {
    var dashedNameFromQuery = req.params.fieldGuideName;
    if (req.user) {
      var completed = req.user.completedFieldGuides;

      var uncompletedFieldGuides = utils.allFieldGuideIds()
        .filter(function (elem) {
          if (completed.indexOf(elem) === -1) {
            return elem;
          }
        });
      req.user.uncompletedFieldGuides = uncompletedFieldGuides;
      // TODO(berks): handle callback properly
      req.user.save(function(err) {
        if (err) { return next(err); }
      });
    }

    FieldGuide.find({ where: {'dashedName': dashedNameFromQuery}},
      function(err, fieldGuideFromMongo) {
        if (err) {
          return next(err);
        }

        if (fieldGuideFromMongo.length < 1) {
          req.flash('errors', {
            msg: "404: We couldn't find a field guide entry with that name. " +
            'Please double check the name.'
          });

          return res.redirect('/');
        }

        var fieldGuide = R.head(fieldGuideFromMongo);
          fieldGuide.name.toLowerCase().replace(/\s/g, '-').replace(/\?/g, '');

        //if (fieldGuide.dashedName !== dashedNameFromQuery) {
        //  return res.redirect('../field-guide/' + fieldGuide.dashedName);
        //}
        res.render('field-guide/show', {
          title: fieldGuide.name,
          fieldGuideId: fieldGuide.id,
          description: fieldGuide.description.join('')
        });
      }
    );
  }

  function showAllFieldGuides(req, res) {
    var allFieldGuideNamesAndIds = utils.allFieldGuideNamesAndIds();

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
      FieldGuide.find({'id': req.user.uncompletedFieldGuides[0]});

    displayedFieldGuides.exec(function(err, fieldGuide) {
      if (err) { return next(err); }
      fieldGuide = fieldGuide.pop();

      if (typeof fieldGuide === 'undefined') {
        if (req.user.completedFieldGuides.length > 0) {
          req.flash('success', {
            msg: [
              "You've read all our current Field Guide entries. If you have ",
              'ideas for other Field Guide articles, please let us know on ',
              "<a href='https://github.com/freecodecamp/freecodecamp/issues/new?&body=Please describe your idea for a Field Guide article and include links if possible.'>GitHub</a>."
            ].join('')
          });
        }
        return res.redirect('../field-guide/how-do-i-use-this-guide');
      }
      return res.redirect('../field-guide/' + fieldGuide.dashedName);
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
};
