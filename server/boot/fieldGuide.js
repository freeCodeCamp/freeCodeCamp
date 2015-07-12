var Rx = require('rx');
var debug = require('debug')('freecc:fieldguides');
var observeMethod = require('../utils/rx').observeMethod;
var saveUser = require('../utils/rx').saveUser;
var utils = require('../utils');

var allFieldGuideNamesAndIds = utils.allFieldGuideNamesAndIds();

module.exports = function(app) {
  var router = app.loopback.Router();
  var FieldGuide = app.models.FieldGuide;
  var findFieldGuideById = observeMethod(FieldGuide, 'findById');
  var findOneFieldGuide = observeMethod(FieldGuide, 'findOne');

  router.get('/field-guide/all-articles', showAllFieldGuides);
  router.get('/field-guide/:fieldGuideName', returnIndividualFieldGuide);
  router.get('/field-guide/', returnNextFieldGuide);
  router.post('/completed-field-guide/', completedFieldGuide);

  app.use(router);

  function returnIndividualFieldGuide(req, res, next) {
    var dashedName = req.params.fieldGuideName;
    var userSave = Rx.Observable.just(req.user)
      .filter(function(user) {
        debug('filtering user', !!user);
        return !!user;
      })
      .map(function(user) {
        var completed = user.completedFieldGuides;

        var uncompletedFieldGuides = utils.allFieldGuideIds()
          .filter(function(id) {
            if (completed.indexOf(id) === -1) {
              return id;
            }
          });
        user.uncompletedFieldGuides = uncompletedFieldGuides;
        return user;
      })
      .flatMap(function(user) {
        debug('saving user');
        return saveUser(user);
      })
      // always call onNext
      .defaultIfEmpty(null);

    var query = { where: { dashedName: { like: dashedName, options: 'i' } } };

    debug('find fieldGuide', query);
    Rx.Observable.combineLatest(
      // find that field guide
      findOneFieldGuide(query),
      userSave,
      Rx.helpers.identity
    )
      .subscribe(
        // don't care about return from userSave
        function(fieldGuide) {
          debug('onNext', fieldGuide);
          if (!fieldGuide) {
            req.flash('errors', {
              msg: '404: We couldn\'t find a field guide entry with ' +
                'that name. Please double check the name.'
            });
            return res.redirect('/field-guide/all-articles');
          }

          if (fieldGuide.dashedName !== dashedName) {
            return res.redirect('../field-guide/' + fieldGuide.dashedName);
          }
          res.render('field-guide/show', {
            title: fieldGuide.name,
            fieldGuideId: fieldGuide.id,
            description: fieldGuide.description.join('')
          });
        },
        next,
        function() {
          debug('onCompleted called');
        }
    );
  }

  function showAllFieldGuides(req, res) {
    var completedFieldGuides = [];
    if (req.user && req.user.completedFieldGuides) {
      completedFieldGuides = req.user.completedFieldGuides;
    }

    // order here determine order on page
    const categories = [
      'orientation',
      'FYI',
      'outreach',
      'contact'
    ];

    // produces an array of arrays of field guides ordered by the above
    // i.e. [[...orientFieldGuides][...FYIfieldGuides]...]
    const orderFieldGuides = categories
      .reduce((ordered, category) => {

        const fieldGuidesForCategory = allFieldGuideNamesAndIds
          .filter(fieldGuide => {
            return category === fieldGuide.category;
          });

        return ordered.concat([fieldGuidesForCategory]);
      }, []);

    res.render('field-guide/all-articles', {
      // leaving this property as legacy.
      allFieldGuideNamesAndIds: allFieldGuideNamesAndIds,
      completedFieldGuides: completedFieldGuides,
      categories: categories,
      fieldGuides: orderFieldGuides
    });
  }

  function showCompletedFieldGuideFunction(req, res) {
    req.flash(
      'success',
      {
        msg: [
          'You\'ve read all our current Field Guide entries. ' +
          'If you have ideas for other Field Guide articles, ' +
          'please let us know on ',
          '<a href=\'https://github.com/freecodecamp/freecodecamp/' +
          'issues/new?&body=Please describe your idea for a Field Guide' +
          ' article and include links if possible.\'>GitHub</a>.'
        ].join('')
      }
    );
    return res.redirect('../field-guide/how-do-i-use-this-guide');
  }

  function returnNextFieldGuide(req, res, next) {
    if (!req.user) {
      return res.redirect('/field-guide/how-do-i-use-this-guide');
    }

    if (!req.user.uncompletedFieldGuides.length) {
      return showCompletedFieldGuideFunction(req, res);
    }

    findFieldGuideById(req.user.uncompletedFieldGuides[0]).subscribe(
      function(fieldGuide) {
        if (!fieldGuide) {
          debug(
            'field guide %s not found',
            req.user.uncompletedFieldGuides[0]
          );
          return res.redirect('../field-guide/how-do-i-use-this-guide');
        }
        return res.redirect('../field-guide/' + fieldGuide.dashedName);
      },
      next
    );
  }

  function completedFieldGuide(req, res, next) {
    var fieldGuideId = req.body.fieldGuideInfo.fieldGuideId;

    req.user.completedFieldGuides.push(fieldGuideId);

    var index = req.user.uncompletedFieldGuides.indexOf(fieldGuideId);
    if (index > -1) {
      req.user.progressTimestamps.push(Date.now());
      req.user.uncompletedFieldGuides.splice(index, 1);
    }

    saveUser(req.user).subscribe(
      function() {
        res.send(true);
      },
      next
    );
  }
};
