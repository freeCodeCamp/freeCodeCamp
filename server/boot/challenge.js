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
  debug = require('debug')('freecc:challenges'),
  utils = require('../utils'),
  saveUser = require('../utils/rx').saveUser,
  userMigration = require('../utils/middleware').userMigration,
  ifNoUserRedirectTo = require('../utils/middleware').ifNoUserRedirectTo;

var challengeMapWithNames = utils.getChallengeMapWithNames();
var challengeMapWithIds = utils.getChallengeMapWithIds();
var challengeMapWithDashedNames = utils.getChallengeMapWithDashedNames();

var getMDNLinks = utils.getMDNLinks;

var challangesRegex = /^(bonfire|waypoint|zipline|basejump)/i;
function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\.]/gi, '');
}

function unDasherize(name) {
  return ('' + name).replace(/\-/g, ' ');
}

module.exports = function(app) {
  var router = app.loopback.Router();
  var Challenge = app.models.Challenge;
  var User = app.models.User;

  router.post('/completed-challenge/', completedChallenge);
  router.post('/completed-zipline-or-basejump', completedZiplineOrBasejump);
  router.post('/completed-bonfire', completedBonfire);

  // the follow routes are covered by userMigration
  router.use(userMigration);
  router.get('/map', challengeMap);
  router.get(
    '/challenges/next-challenge',
    ifNoUserRedirectTo('/challenges/learn-how-free-code-camp-works'),
    returnNextChallenge
  );

  router.get('/challenges/:challengeName', returnIndividualChallenge);

  router.get(
    '/challenges/',
    ifNoUserRedirectTo('/challenges/learn-how-free-code-camp-works'),
    returnCurrentChallenge
  );

  app.use(router);

  function returnNextChallenge(req, res, next) {
    var completed = req.user.completedChallenges.map(function (elem) {
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
    var completed = req.user.completedChallenges.map(function (elem) {
      return elem.id;
    });

    req.user.uncompletedChallenges = utils.allChallengeIds()
      .filter(function (elem) {
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
            challengeBlock: R.head(R.flatten(Object.keys(challengeMapWithIds).
                map(function (key) {
                  return challengeMapWithIds[key]
                    .filter(function (elem) {
                      return String(elem) === challenge.id;
                    })
                    .map(function () {
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
          details: challenge.description.slice(1),
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
          brief: challenge.description.shift(),
          bonfires: challenge,
          MDNkeys: challenge.MDNlinks,
          MDNlinks: getMDNLinks(challenge.MDNlinks),
          // htmls specific
          environment: utils.whichEnvironment()
        };

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
    var isCompletedWith = req.body.challengeInfo.completedWith || '';
    var isCompletedDate = Math.round(+new Date());
    var challengeId = req.body.challengeInfo.challengeId;
    var isSolution = req.body.challengeInfo.solution;
    var challengeName = req.body.challengeInfo.challengeName;

    if (isCompletedWith) {
      User.find({
        where: { username: isCompletedWith.toLowerCase() },
        limit: 1
      }, function (err, pairedWith) {
        if (err) { return next(err); }

        var index = req.user.uncompletedChallenges.indexOf(challengeId);
        if (index > -1) {
          req.user.progressTimestamps.push(Date.now() || 0);
          req.user.uncompletedChallenges.splice(index, 1);
        }
        pairedWith = pairedWith.pop();
        if (pairedWith) {

          index = pairedWith.uncompletedChallenges.indexOf(challengeId);
          if (index > -1) {
            pairedWith.progressTimestamps.push(Date.now() || 0);
            pairedWith.uncompletedChallenges.splice(index, 1);

          }

          pairedWith.completedChallenges.push({
            id: challengeId,
            name: challengeName,
            completedWith: req.user.id,
            completedDate: isCompletedDate,
            solution: isSolution,
            challengeType: 5
          });

          req.user.completedChallenges.push({
            id: challengeId,
            name: challengeName,
            completedWith: pairedWith.id,
            completedDate: isCompletedDate,
            solution: isSolution,
            challengeType: 5
          });
        }
        // User said they paired, but pair wasn't found
        req.user.completedChallenges.push({
          id: challengeId,
          name: challengeName,
          completedWith: null,
          completedDate: isCompletedDate,
          solution: isSolution,
          challengeType: 5
        });

        req.user.save(function (err, user) {
          if (err) { return next(err); }

          if (pairedWith) {
            pairedWith.save(function (err, paired) {
              if (err) {
                return next(err);
              }
              if (user && paired) {
                return res.send(true);
              }
            });
          } else if (user) {
            res.send(true);
          }
        });
      });
    } else {
      req.user.completedChallenges.push({
        id: challengeId,
        name: challengeName,
        completedWith: null,
        completedDate: isCompletedDate,
        solution: isSolution,
        challengeType: 5
      });

      var index = req.user.uncompletedChallenges.indexOf(challengeId);
      if (index > -1) {

        req.user.progressTimestamps.push(Date.now() || 0);
        req.user.uncompletedChallenges.splice(index, 1);
      }

      req.user.save(function (err) {
        if (err) { return next(err); }
        res.send(true);
      });
    }
  }

  function completedChallenge(req, res, next) {

    var isCompletedDate = Math.round(+new Date());
    var challengeId = req.body.challengeInfo.challengeId;

    req.user.completedChallenges.push({
      id: challengeId,
      completedDate: isCompletedDate,
      name: req.body.challengeInfo.challengeName,
      solution: null,
      githubLink: null,
      verified: true
    });
    var index = req.user.uncompletedChallenges.indexOf(challengeId);

    if (index > -1) {
      req.user.progressTimestamps.push(Date.now() || 0);
      req.user.uncompletedChallenges.splice(index, 1);
    }

    req.user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      if (user) {
        res.sendStatus(200);
      }
    });
  }

  function completedZiplineOrBasejump(req, res, next) {

    var isCompletedWith = req.body.challengeInfo.completedWith || false;
    var isCompletedDate = Math.round(+new Date());
    var challengeId = req.body.challengeInfo.challengeId;
    var solutionLink = req.body.challengeInfo.publicURL;
    var githubLink = req.body.challengeInfo.challengeType === '4'
      ? req.body.challengeInfo.githubURL : true;
    var challengeType = req.body.challengeInfo.challengeType === '4' ?
      4 : 3;
    if (!solutionLink || !githubLink) {
      req.flash('errors', {
        msg: 'You haven\'t supplied the necessary URLs for us to inspect ' +
        'your work.'
      });
      return res.sendStatus(403);
    }

    if (isCompletedWith) {
      User.find({
        where: { username: isCompletedWith.toLowerCase() },
        limit: 1
      }, function (err, pairedWithFromMongo) {
        if (err) { return next(err); }
        var index = req.user.uncompletedChallenges.indexOf(challengeId);
        if (index > -1) {
          req.user.progressTimestamps.push(Date.now() || 0);
          req.user.uncompletedChallenges.splice(index, 1);
        }
        var pairedWith = pairedWithFromMongo.pop();

        req.user.completedChallenges.push({
          id: challengeId,
          name: req.body.challengeInfo.challengeName,
          completedWith: pairedWith.id,
          completedDate: isCompletedDate,
          solution: solutionLink,
          githubLink: githubLink,
          challengeType: challengeType,
          verified: false
        });

        req.user.save(function (err, user) {
          if (err) { return next(err); }

          if (req.user.id.toString() === pairedWith.id.toString()) {
            return res.sendStatus(200);
          }
          index = pairedWith.uncompletedChallenges.indexOf(challengeId);
          if (index > -1) {
            pairedWith.progressTimestamps.push(Date.now() || 0);
            pairedWith.uncompletedChallenges.splice(index, 1);

          }

          pairedWith.completedChallenges.push({
            id: challengeId,
            name: req.body.challengeInfo.coursewareName,
            completedWith: req.user.id,
            completedDate: isCompletedDate,
            solution: solutionLink,
            githubLink: githubLink,
            challengeType: challengeType,
            verified: false
          });
          pairedWith.save(function (err, paired) {
            if (err) {
              return next(err);
            }
            if (user && paired) {
              return res.sendStatus(200);
            }
          });
        });
      });
    } else {

      req.user.completedChallenges.push({
        id: challengeId,
        name: req.body.challengeInfo.challengeName,
        completedWith: null,
        completedDate: isCompletedDate,
        solution: solutionLink,
        githubLink: githubLink,
        challengeType: challengeType,
        verified: false
      });

      var index = req.user.uncompletedChallenges.indexOf(challengeId);
      if (index > -1) {
        req.user.progressTimestamps.push(Date.now() || 0);
        req.user.uncompletedChallenges.splice(index, 1);
      }

      req.user.save(function (err, user) {
        if (err) {
          return next(err);
        }
        // NOTE(berks): under certain conditions this will not close
        // the response.
        if (user) {
          return res.sendStatus(200);
        }
      });
    }
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
