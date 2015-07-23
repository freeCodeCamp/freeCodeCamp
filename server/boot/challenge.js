/**
 * Created by nathanleniz on 5/15/15.
 * Copyright (c) 2015, Free Code Camp
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 3. Neither the name of the copyright holder nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
 BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var R = require('ramda'),
  Rx = require('rx'),
  assign = require('object.assign'),
  debug = require('debug')('freecc:challenges'),
  utils = require('../utils'),

  // this would be so much cleaner with destructering...
  saveUser = require('../utils/rx').saveUser,
  observableQueryFromModel = require('../utils/rx').observableQueryFromModel,

  userMigration = require('../utils/middleware').userMigration,
  ifNoUserRedirectTo = require('../utils/middleware').ifNoUserRedirectTo,
  ifNoUserSend = require('../utils/middleware').ifNoUserSend;

var challengeMapWithNames = utils.getChallengeMapWithNames();
var challengeMapWithIds = utils.getChallengeMapWithIds();
var challengeMapWithDashedNames = utils.getChallengeMapWithDashedNames();
var challangesRegex = /^(bonfire|waypoint|zipline|basejump)/i;

var dasherize = utils.dasherize;
var unDasherize = utils.unDasherize;

var getMDNLinks = utils.getMDNLinks;

function updateUserProgress(user, challengeId, completedChallenge) {
  var index = user.uncompletedChallenges.indexOf(challengeId);
  if (index > -1) {
    user.progressTimestamps.push(Date.now());
    user.uncompletedChallenges.splice(index, 1);
  }
  user.completedChallenges.push(completedChallenge);
  return user;
}

module.exports = function(app) {
  var router = app.loopback.Router();
  var Challenge = app.models.Challenge;
  var User = app.models.User;
  var redirectNonUser =
    ifNoUserRedirectTo('/challenges/learn-how-free-code-camp-works');
  var send200toNonUser = ifNoUserSend(true);

  router.post(
    '/completed-challenge/',
    send200toNonUser,
    completedChallenge
  );
  router.post(
    '/completed-zipline-or-basejump',
    send200toNonUser,
    completedZiplineOrBasejump
  );
  router.post(
    '/completed-bonfire',
    send200toNonUser,
    completedBonfire
  );

  // the follow routes are covered by userMigration
  router.use(userMigration);
  router.get('/map', challengeMap);
  router.get(
    '/challenges/next-challenge',
    redirectNonUser,
    returnNextChallenge
  );

  router.get('/challenges/:challengeName', returnIndividualChallenge);

  router.get(
    '/challenges/',
    redirectNonUser,
    returnCurrentChallenge
  );

  app.use(router);

  function returnNextChallenge(req, res, next) {
    var completed = req.user.completedChallenges.map(function(elem) {
      return elem.id;
    });

    req.user.uncompletedChallenges = utils.allChallengeIds()
      .filter(function(elem) {
        if (completed.indexOf(elem) === -1) {
          return elem;
        }
      });

    // find the user's current challenge and block
    // look in that block and find the index of their current challenge
    // if index + 1 < block.challenges.length
    // serve index + 1 challenge
    // otherwise increment block key and serve the first challenge in that block
    // unless the next block is undefined, which means no next block
    var nextChallengeName;

    var challengeId = String(req.user.currentChallenge.challengeId);
    var challengeBlock = req.user.currentChallenge.challengeBlock;
    var indexOfChallenge = challengeMapWithIds[challengeBlock]
      .indexOf(challengeId);

    if (indexOfChallenge + 1
      < challengeMapWithIds[challengeBlock].length) {
      nextChallengeName =
        challengeMapWithDashedNames[challengeBlock][++indexOfChallenge];
    } else if (typeof challengeMapWithIds[++challengeBlock] !== 'undefined') {
      nextChallengeName = R.head(challengeMapWithDashedNames[challengeBlock]);
    } else {
      req.flash('errors', {
        msg: 'It looks like you have finished all of our challenges.' +
        ' Great job! Now on to helping nonprofits!'
      });
      nextChallengeName = R.head(challengeMapWithDashedNames[0].challenges);
    }

    saveUser(req.user)
      .subscribe(
        function() {},
        next,
        function() {
          res.redirect('/challenges/' + nextChallengeName);
        }
      );
  }

  function returnCurrentChallenge(req, res, next) {
    var completed = req.user.completedChallenges.map(function(elem) {
      return elem.id;
    });

    req.user.uncompletedChallenges = utils.allChallengeIds()
      .filter(function(elem) {
        if (completed.indexOf(elem) === -1) {
          return elem;
        }
      });

    if (!req.user.currentChallenge) {
      req.user.currentChallenge = {};
      req.user.currentChallenge.challengeId = challengeMapWithIds['0'][0];
      req.user.currentChallenge.challengeName = challengeMapWithNames['0'][0];
      req.user.currentChallenge.challengeBlock = '0';
      req.user.currentChallenge.dashedName =
        challengeMapWithDashedNames['0'][0];
    }

    var nameString = req.user.currentChallenge.dashedName;

    saveUser(req.user)
      .subscribe(
        function() {},
        next,
        function() {
          res.redirect('/challenges/' + nameString);
        }
      );
  }

  function returnIndividualChallenge(req, res, next) {
    var origChallengeName = req.params.challengeName;
    var unDashedName = unDasherize(origChallengeName);

    var challengeName = challangesRegex.test(unDashedName) ?
      // remove first word if matches
      unDashedName.split(' ').slice(1).join(' ') :
      unDashedName;

    debug('looking for ', challengeName);
    Challenge.findOne(
      { where: { name: { like: challengeName, options: 'i' } } },
      function(err, challenge) {
        if (err) { return next(err); }

        // Handle not found
        if (!challenge) {
          debug('did not find challenge for ' + origChallengeName);
          req.flash('errors', {
            msg:
              '404: We couldn\'t find a challenge with the name `' +
              origChallengeName +
              '` Please double check the name.'
          });
          return res.redirect('/challenges');
        }
        // Redirect to full name if the user only entered a partial
        if (dasherize(challenge.name) !== origChallengeName) {
          debug('redirecting to fullname');
          return res.redirect('/challenges/' + dasherize(challenge.name));
        }

        if (req.user) {
          req.user.currentChallenge = {
            challengeId: challenge.id,
            challengeName: challenge.name,
            dashedName: challenge.dashedName,
            challengeBlock: R.head(R.flatten(Object.keys(challengeMapWithIds)
                .map(function(key) {
                  return challengeMapWithIds[key]
                    .filter(function(elem) {
                      return elem === ('' + challenge.id);
                    })
                    .map(function() {
                      return key;
                    });
                })
            ))
          };
        }

        var commonLocals = {
          title: challenge.name,
          dashedName: origChallengeName,
          name: challenge.name,
          details: challenge.description,
          tests: challenge.tests,
          challengeSeed: challenge.challengeSeed,
          verb: utils.randomVerb(),
          phrase: utils.randomPhrase(),
          compliment: utils.randomCompliment(),
          challengeId: challenge.id,
          challengeType: challenge.challengeType,
          // video challenges
          video: challenge.challengeSeed[0],
          // bonfires specific
          difficulty: Math.floor(+challenge.difficulty),
          bonfires: challenge,
          MDNkeys: challenge.MDNlinks,
          MDNlinks: getMDNLinks(challenge.MDNlinks),
          // htmls specific
          environment: utils.whichEnvironment()
        };

        // TODO Berkeley
        var challengeView = {
          0: 'coursewares/showHTML',
          1: 'coursewares/showJS',
          2: 'coursewares/showVideo',
          3: 'coursewares/showZiplineOrBasejump',
          4: 'coursewares/showZiplineOrBasejump',
          5: 'coursewares/showBonfire'
        };

        saveUser(req.user)
          .subscribe(
            function() {},
            next,
            function() {
              var view = challengeView[challenge.challengeType];
              res.render(view, commonLocals);
            }
          );
      });
  }

  function completedBonfire(req, res, next) {
    debug('compltedBonfire');
    var completedWith = req.body.challengeInfo.completedWith || false;
    var challengeId = req.body.challengeInfo.challengeId;

    var challengeData = {
      id: challengeId,
      name: req.body.challengeInfo.challengeName,
      completedDate: Math.round(+new Date()),
      solution: req.body.challengeInfo.solution,
      challengeType: 5
    };

    observableQueryFromModel(
        User,
        'findOne',
        { where: { username: ('' + completedWith).toLowerCase() } }
      )
      .doOnNext(function(pairedWith) {
        debug('paired with ', pairedWith);
        if (pairedWith) {
          updateUserProgress(
            pairedWith,
            challengeId,
            assign({ completedWith: req.user.id }, challengeData)
          );
        }
      })
      .withLatestFrom(
        Rx.Observable.just(req.user),
        function(pairedWith, user) {
          return {
            user: user,
            pairedWith: pairedWith
          };
        }
      )
      // side effects should always be done in do's and taps
      .doOnNext(function(dats) {
        updateUserProgress(
          dats.user,
          challengeId,
          dats.pairedWith ?
            // paired programmer found and adding to data
            assign({ completedWith: dats.pairedWith.id }, challengeData) :
            // user said they paired, but pair wasn't found
            challengeData
        );
      })
      // not iterate users
      .flatMap(function(dats) {
        debug('flatmap');
        return Rx.Observable.from([dats.user, dats.pairedWith]);
      })
      // save user
      .flatMap(function(user) {
        // save user will do nothing if user is falsey
        return saveUser(user);
      })
      .subscribe(
        function(user) {
          debug('onNext');
          if (user) {
            debug('user %s saved', user.username);
          }
        },
        next,
        function() {
          debug('completed');
          return res.status(200).send(true);
        }
      );
  }

  function completedChallenge(req, res, next) {

    const completedDate = Math.round(+new Date());
    const { id, name } = req.body;
    const { challengeId, challengeName } = req.body.challengeInfo || {};

    debug('saving challenge progress');
    updateUserProgress(
      req.user,
      id || challengeId,
      {
        id: id || challengeId,
        completedDate: completedDate,
        name: name || challengeName,
        solution: null,
        githubLink: null,
        verified: true
      }
    );

    saveUser(req.user)
      .subscribe(
        function() { },
        next,
        function() {
          res.sendStatus(200);
        }
      );
  }

  function completedZiplineOrBasejump(req, res, next) {

    var completedWith = req.body.challengeInfo.completedWith || false;
    var completedDate = Math.round(+new Date());
    var challengeId = req.body.challengeInfo.challengeId;
    var solutionLink = req.body.challengeInfo.publicURL;

    var githubLink = req.body.challengeInfo.challengeType === '4' ?
      req.body.challengeInfo.githubURL :
      true;

    var challengeType = req.body.challengeInfo.challengeType === '4' ?
      4 :
      3;

    if (!solutionLink || !githubLink) {
      req.flash('errors', {
        msg: 'You haven\'t supplied the necessary URLs for us to inspect ' +
        'your work.'
      });
      return res.sendStatus(403);
    }

    var challengeData = {
      id: challengeId,
      name: req.body.challengeInfo.challengeName,
      completedDate: completedDate,
      solution: solutionLink,
      githubLink: githubLink,
      challengeType: challengeType,
      verified: false
    };

    observableQueryFromModel(
        User,
        'findOne',
        { where: { username: completedWith.toLowerCase() } }
      )
      .doOnNext(function(pairedWith) {
        if (pairedWith) {
          updateUserProgress(
            pairedWith,
            challengeId,
            assign({ completedWith: req.user.id }, challengeData)
          );
        }
      })
      .withLatestFrom(Rx.Observable.just(req.user), function(user, pairedWith) {
        return {
          user: user,
          pairedWith: pairedWith
        };
      })
      .doOnNext(function(dats) {
        updateUserProgress(
          dats.user,
          challengeId,
          dats.pairedWith ?
            assign({ completedWith: dats.pairedWith.id }, challengeData) :
            challengeData
        );
      })
      .flatMap(function(dats) {
        return Rx.Observable.from([dats.user, dats.pairedWith]);
      })
      // save users
      .flatMap(function(user) {
        // save user will do nothing if user is falsey
        return saveUser(user);
      })
      .subscribe(
        function(user) {
          if (user) {
            debug('user %s saved', user.username);
          }
        },
        next,
        function() {
          return res.status(200).send(true);
        }
      );
  }

  function challengeMap(req, res, next) {
    var completedList = [];

    if (req.user) {
      completedList = req.user.completedChallenges;
    }

    var noDuplicatedChallenges = R.uniq(completedList);

    var completedChallengeList = noDuplicatedChallenges
      .map(function(challenge) {
        // backwards compatibility
        return (challenge.id || challenge._id);
      });
    var challengeList = utils.
      getChallengeMapForDisplay(completedChallengeList);

    Object.keys(challengeList).forEach(function(key) {
      challengeList[key].completed = challengeList[key]
        .challenges.filter(function(elem) {
        // backwards compatibility hack
        return completedChallengeList.indexOf(elem.id || elem._id) > -1;
      });
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var date1 = new Date('10/15/2014');
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));

    User.count(function(err, camperCount) {
      if (err) { return next(err); }

      res.render('challengeMap/show', {
        daysRunning: daysRunning,
        camperCount: numberWithCommas(camperCount),
        title: "A map of all Free Code Camp's Challenges",
        challengeList: challengeList,
        completedChallengeList: completedChallengeList
      });
    });
  }
};
