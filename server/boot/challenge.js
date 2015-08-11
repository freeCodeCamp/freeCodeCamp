import _ from 'lodash';
import moment from 'moment';
import R from 'ramda';
import { Observable } from 'rx';
import assign from 'object.assign';
import debugFactory from 'debug';
import utils from '../utils';

import {
  saveUser,
  observeMethod,
  observableQueryFromModel
} from '../utils/rx';

import {
  userMigration,
  ifNoUserRedirectTo,
  ifNoUserSend
} from '../utils/middleware';

const debug = debugFactory('freecc:challenges');
var challengeMapWithNames = utils.getChallengeMapWithNames();
var challengeMapWithIds = utils.getChallengeMapWithIds();
var challengeMapWithDashedNames = utils.getChallengeMapWithDashedNames();
var challangesRegex = /^(bonfire|waypoint|zipline|basejump)/i;

var dasherize = utils.dasherize;
var unDasherize = utils.unDasherize;

var getMDNLinks = utils.getMDNLinks;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateUserProgress(user, challengeId, completedChallenge) {
  var alreadyCompleted = user.completedChallenges.some(({ id }) => {
    return id === challengeId;
  });

  if (alreadyCompleted) {
    user.progressTimestamps.push({
      timestamp: Date.now()
    });
  }
  user.completedChallenges.push(completedChallenge);
  return user;
}

module.exports = function(app) {
  const router = app.loopback.Router();

  const Challenge = app.models.Challenge;
  const findChallenge$ = observeMethod(Challenge, 'find');

  const User = app.models.User;
  const userCount$ = observeMethod(User, 'count');

  const send200toNonUser = ifNoUserSend(true);
  const redirectNonUser = ifNoUserRedirectTo(
    '/challenges/learn-how-free-code-camp-works'
  );

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

    // find the user's current challenge and block
    // look in that block and find the index of their current challenge
    // if index + 1 < block.challenges.length
    // serve index + 1 challenge
    // otherwise increment block key and serve the first challenge in that block
    // unless the next block is undefined, which means no next block
    var nextChallengeName;

    var challengeId = String(req.user.currentChallenge.challengeId);
    var challengeBlock = req.user.currentChallenge.challengeBlock;
    // TODO(berks) fix index call here
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
                      return elem === '' + challenge.id;
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
        Observable.just(req.user),
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
        return Observable.from([dats.user, dats.pairedWith]);
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
        function(user) {
          debug(
            'user save points %s',
            user && user.progressTimestamps && user.progressTimestamps.length
          );
        },
        next,
        function() {
          res.sendStatus(200);
        }
      );
  }

  function completedZiplineOrBasejump(req, res, next) {

    var completedWith = req.body.challengeInfo.completedWith || '';
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
      .withLatestFrom(Observable.just(req.user), function(pairedWith, user) {
        return {
          user: user,
          pairedWith: pairedWith
        };
      })
      .doOnNext(function({ user, pairedWith }) {
        updateUserProgress(
          user,
          challengeId,
          pairedWith ?
            assign({ completedWith: pairedWith.id }, challengeData) :
            challengeData
        );
      })
      .flatMap(function({ user, pairedWith }) {
        return Observable.from([user, pairedWith]);
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

  function challengeMap({ user = {} }, res, next) {
    const daysRunning = moment().diff(new Date('10/15/2014'), 'days');

    // if user
    // get the id's of all the users completed challenges
    const completedChallenges = !user.completedChallenges ?
      [] :
      _.uniq(user.completedChallenges).map(({ id }) => id);

    const camperCount$ = userCount$()
      .map(camperCount => numberWithCommas(camperCount));

    const query = {
      order: [
        'order ASC',
        'suborder ASC'
      ]
    };

    // create a stream of all the challenges
    const challenge$ = findChallenge$(query)
      .flatMap(challenges => Observable.from(challenges))
      .shareReplay();

    // create a stream of an array of all the challenge blocks
    const blocks$ = challenge$
      // mark challenge completed
      .map(challenge => {
        if (completedChallenges.indexOf(challenge.id) !== -1) {
          challenge.completed = true;
        }
        return challenge;
      })
      // group challenges by block | returns a stream of observables
      .groupBy(challenge => challenge.block)
      // turn block group stream into an array
      .flatMap(block$ => block$.toArray())
      .map(blockArray => {
        const completedCount = blockArray.reduce((sum, { completed }) => {
          if (completed) {
            return sum + 1;
          }
          return sum;
        });

        return {
          name: blockArray[0].block,
          dashedName: dasherize(blockArray[0].block),
          challenges: blockArray,
          completed: completedCount / blockArray.length * 100
        };
      })
      // turn stream of blocks into a stream of an array
      .toArray();

    Observable.combineLatest(
      camperCount$,
      blocks$,
      (camperCount, blocks) => ({ camperCount, blocks })
    )
      .subscribe(
        ({ camperCount, blocks }) => {
          res.render('challengeMap/show', {
            blocks,
            daysRunning,
            camperCount,
            title: "A map of all Free Code Camp's Challenges"
          });
        },
        next
      );
  }
};
