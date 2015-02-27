var R = require('ramda'),
    moment = require('moment'),
    debug = require('debug')('freecc:cntr:bonfires'),
    generalUtils = require('../utils/generalUtils'),
    bonfireUtils = require('../utils/bonfireUtils');

module.exports = function(app) {
  var router = app.loopback.Router();
  var Bonfire = app.models.bonfire;
  var User = app.models.user;
  router.get('/bonfires/getBonfireList', getBonfireList);
  router.get('/bonfires', returnNextBonfire);
  router.get('/bonfire-json-generator', returnGenerator);
  router.get('/bonfire-challenge-generator', publicGenerator);
  router.get('/bonfires/:bonfireName', returnIndividualBonfire);
  router.get('/bonfire-json-generator', returnGenerator);
  router.get('/bonfire-json-generator', returnGenerator);
  router.get('/playground', playground);
  router.post('/bonfire-challenge-generator', generateChallenge);
  router.post('/bonfire-challenge-generator', testBonfire);
  router.post('/completed-bonfire/', completedBonfire);

  function playground(req, res) {
    res.render('bonfire/show.jade', {
      completedWith: null,
      title: 'Bonfire Playground',
      name: 'Bonfire Playground',
      difficulty: 0,
      brief: 'Feel free to play around!',
      details: '',
      tests: [],
      challengeSeed: '',
      cc: req.user ? req.user.bonfiresHash : null,
      progressTimestamps: req.user ? req.user.progressTimestamps : null,
      verb: generalUtils.randomVerb(),
      phrase: generalUtils.randomPhrase(),
      compliments: generalUtils.randomCompliment(),
      bonfires: [],
      bonfireHash: 'test'
    });
  }

  function getBonfireList(req, res) {
    var data = {};
    var completedBonfires;
    if (req.user) {
      completedBonfires = req.user.completedBonfires.map(function (elem) {
        return elem._id;
      });
    } else {
      completedBonfires = [];
    }
    var noDuplicateBonfires = R.uniq(completedBonfires);
    data.bonfireList = bonfireUtils.allBonfireNames();
    data.completedList = noDuplicateBonfires;

    debug('started');
    res.json(data);
  }

  function returnNextBonfire(req, res, next) {
    console.log('user', req.user);
    if (!req.user) {
      console.log('conditional');
      return res.redirect('../bonfires/meet-bonfire');
    }
    var completed = req.user.completedBonfires.map(function (elem) {
      return elem._id;
    });

    req.user.uncompletedBonfires = bonfireUtils.allBonfireIds()
      .filter(function (elem) {
        if (completed.indexOf(elem) === -1) {
          return elem;
        }
      });
    req.user.save();

    var uncompletedBonfires = req.user.uncompletedBonfires;

    Bonfire.find(
      { where: { 'id': uncompletedBonfires[0] } },
      function (err, bonfire) {
        if (err) {
          next(err);
        }
        bonfire = bonfire.pop();
        if (!bonfire) {
          req.flash('errors', {
            msg: 'It looks like you have completed all the bonfires we ' +
              'have available. Good job!'
          });
          return res.redirect('../bonfires/meet-bonfire');
        }
        var nameString = bonfire.name.toLowerCase().replace(/\s/g, '-');
        return res.redirect('../bonfires/' + nameString);
      }
    );
  }

  function returnIndividualBonfire(req, res, next) {
    var dashedName = req.params.bonfireName;

    var bonfireName = dashedName.replace(/\-/g, ' ');

    Bonfire.find(
      { where: { 'name': new RegExp(bonfireName, 'i') } },
      function (err, bonfire) {
        if (err) { return next(err); }


        if (bonfire.length < 1) {
          req.flash('errors', {
            msg: '404: We could not find a bonfire with that name. ' +
              'Please double check the name.'
          });

          return res.redirect('/bonfires');
        }

        bonfire = bonfire.pop();
        var dashedNameFull = bonfire.name.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull !== dashedName) {
          return res.redirect('../bonfires/' + dashedNameFull);
        }

        res.render('bonfire/show', {
          completedWith: null,
          title: bonfire.name,
          dashedName: dashedName,
          name: bonfire.name,
          difficulty: Math.floor(+bonfire.difficulty),
          brief: bonfire.description[0],
          details: bonfire.description.slice(1),
          tests: bonfire.tests,
          challengeSeed: bonfire.challengeSeed,
          cc: !!req.user,
          progressTimestamps: req.user ? req.user.progressTimestamps : null,
          verb: generalUtils.randomVerb(),
          phrase: generalUtils.randomPhrase(),
          compliment: generalUtils.randomCompliment(),
          bonfires: bonfire,
          bonfireHash: bonfire.id
        });
      });
  }

  function returnGenerator(req, res) {
    res.render('bonfire/generator', {
      title: null,
      name: null,
      difficulty: null,
      brief: null,
      details: null,
      tests: null,
      challengeSeed: null,
      bonfireHash: randomString()
    });
  }

  /**
  * Post for bonfire generation
  */

  function randomString() {
    var chars = '0123456789abcdef';
    var stringLength = 23;
    var randomstring = 'a';
    for (var i = 0; i < stringLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }

  function testBonfire(req, res) {
    var bonfireName = req.body.name,
      bonfireTests = req.body.tests,
      bonfireDifficulty = req.body.difficulty,
      bonfireDescription = req.body.description,
      bonfireChallengeSeed = req.body.challengeSeed;

    bonfireTests = bonfireTests.split('\r\n');
    bonfireTests.filter(getRidOfEmpties);

    bonfireDescription = bonfireDescription.split('\r\n');
    bonfireDescription.filter(getRidOfEmpties);

    bonfireChallengeSeed = bonfireChallengeSeed.replace('\r', '');

    res.render('bonfire/show', {
      completedWith: null,
      title: bonfireName,
      name: bonfireName,
      difficulty: +bonfireDifficulty,
      brief: bonfireDescription[0],
      details: bonfireDescription.slice(1),
      tests: bonfireTests,
      challengeSeed: bonfireChallengeSeed,
      cc: req.user ? req.user.bonfiresHash : null,
      progressTimestamps: req.user ? req.user.progressTimestamps : null,
      verb: generalUtils.Verb(),
      phrase: generalUtils.Phrase(),
      compliment: generalUtils.Compliment(),
      bonfires: [],
      bonfireHash: 'test'
    });
  }

  function getRidOfEmpties(elem) {
    if (elem.length > 0) {
      return elem;
    }
  }

  function publicGenerator(req, res) {
    res.render('bonfire/public-generator');
  }

  function generateChallenge(req, res) {
    var bonfireName = req.body.name,
      bonfireTests = req.body.tests,
      bonfireDifficulty = req.body.difficulty,
      bonfireDescription = req.body.description,
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
      challengeSeed: bonfireChallengeSeed,
      tests: bonfireTests
    };
    res.send(response);
  }

  function completedBonfire(req, res, next) {
    var isCompletedWith = req.body.bonfireInfo.completedWith || null;
    var isCompletedDate = Math.round(+new Date() / 1000);
    var bonfireHash = req.body.bonfireInfo.bonfireHash;
    var isSolution = req.body.bonfireInfo.solution;

    if (isCompletedWith) {
      User.find(
        { where: { 'profile.username': isCompletedWith.toLowerCase() } },
        function (err, pairedWith) {
          if (err) {
            return next(err);
          } else {
            var index = req.user.uncompletedBonfires.indexOf(bonfireHash);
            if (index > -1) {
              req.user.progressTimestamps.push(moment().unix() / 1000);
              req.user.uncompletedBonfires.splice(index, 1);
            }
            pairedWith = pairedWith.pop();

            index = pairedWith.uncompletedBonfires.indexOf(bonfireHash);
            if (index > -1) {
              pairedWith.progressTimestamps.push(moment().unix() / 1000);
              pairedWith.uncompletedBonfires.splice(index, 1);

            }

            pairedWith.completedBonfires.push({
              _id: bonfireHash,
              completedWith: req.user._id,
              completedDate: isCompletedDate,
              solution: isSolution
            });

            req.user.completedBonfires.push({
              _id: bonfireHash,
              completedWith: pairedWith._id,
              completedDate: isCompletedDate,
              solution: isSolution
            });

            req.user.save(function (err, user) {
              if (err) { return next(err); }
              pairedWith.save(function (err, paired) {
                if (err) {
                  throw err;
                }
                if (user && paired) {
                  res.send(true);
                }
              });
            });
          }
        }
      );
    } else {

      req.user.completedBonfires.push({
        _id: bonfireHash,
        completedWith: null,
        completedDate: isCompletedDate,
        solution: isSolution
      });

      var index = req.user.uncompletedBonfires.indexOf(bonfireHash);
      if (index > -1) {
        req.user.progressTimestamps.push(moment().unix() / 1000);
        req.user.uncompletedBonfires.splice(index, 1);
      }

      req.user.save(function (err, user) {
        if (err) {
          throw err;
        }
        if (user) {
          debug('Saving user');
          res.send(true);
        }
      });
    }
  }
  app.use(router);
};
