import _ from 'lodash';
import dedent from 'dedent';
import moment from 'moment';
import { Observable, Scheduler } from 'rx';
import assign from 'object.assign';
import debugFactory from 'debug';

import {
  dasherize,
  unDasherize,
  getMDNLinks,
  randomVerb,
  randomPhrase,
  randomCompliment
} from '../utils';

import {
  saveUser,
  observeMethod,
  observeQuery
} from '../utils/rx';

import {
  ifNoUserSend
} from '../utils/middleware';

import getFromDisk$ from '../utils/getFromDisk$';

const isDev = process.env.NODE_ENV !== 'production';
const isBeta = !!process.env.BETA;
const debug = debugFactory('freecc:challenges');
const challengesRegex = /^(bonfire|waypoint|zipline|basejump)/i;
const firstChallenge = 'waypoint-learn-how-free-code-camp-works';
const challengeView = {
  0: 'coursewares/showHTML',
  1: 'coursewares/showJS',
  2: 'coursewares/showVideo',
  3: 'coursewares/showZiplineOrBasejump',
  4: 'coursewares/showZiplineOrBasejump',
  5: 'coursewares/showBonfire',
  7: 'coursewares/showStep'
};

function isChallengeCompleted(user, challengeId) {
  if (!user) {
    return false;
  }
  return user.completedChallenges.some(challenge =>
    challenge.id === challengeId );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateUserProgress(user, challengeId, completedChallenge) {
  let { completedChallenges } = user;

  const indexOfChallenge = _.findIndex(completedChallenges, {
    id: challengeId
  });

  const alreadyCompleted = indexOfChallenge !== -1;

  if (!alreadyCompleted) {
    user.progressTimestamps.push({
      timestamp: Date.now(),
      completedChallenge: challengeId
    });
    user.completedChallenges.push(completedChallenge);
    return user;
  }

  const oldCompletedChallenge = completedChallenges[indexOfChallenge];
  user.completedChallenges[indexOfChallenge] =
    Object.assign(
      {},
      completedChallenge,
      {
        completedDate: oldCompletedChallenge.completedDate,
        lastUpdated: completedChallenge.completedDate
      }
    );
  return user;
}


// small helper function to determine whether to mark something as new
const dateFormat = 'MMM MMMM DD, YYYY';
function shouldShowNew(element, block) {
  if (element) {
    return typeof element.releasedOn !== 'undefined' &&
      moment(element.releasedOn, dateFormat).diff(moment(), 'days') >= -30;
  }

  if (block) {
    const newCount = block.reduce((sum, { markNew }) => {
      if (markNew) {
        return sum + 1;
      }
      return sum;
    }, 0);
    return newCount / block.length * 100 === 100;
  }
}

module.exports = function(app) {
  const router = app.loopback.Router();

  const challengesQuery = {
    order: [
      'order ASC',
      'suborder ASC'
    ]
  };

  // challenge model
  const Challenge = app.models.Challenge;
  // challenge find query stream
  const findChallenge$ = observeMethod(Challenge, 'find');
  // create a stream of all the challenges
  const challenge$ = findChallenge$(challengesQuery)
    .doOnNext(() => debug('query challenges'))
    .flatMap(challenges => Observable.from(
      challenges,
      null,
      null,
      Scheduler.default
    ))
    // filter out all challenges that have isBeta flag set
    // except in development or beta site
    .filter(challenge => isDev || isBeta || !challenge.isBeta)
    .shareReplay();

  // create a stream of challenge blocks
  const superBlocks$ = challenge$
    .map(challenge => challenge.toJSON())
    // group challenges by block | returns a stream of observables
    .groupBy(challenge => challenge.block)
    // turn block group stream into an array
    .flatMap(blocks$ => blocks$.toArray())
    // turn array into stream of object
    .map(blockArray => ({
      name: blockArray[0].block,
      dashedName: dasherize(blockArray[0].block),
      challenges: blockArray,
      superBlock: blockArray[0].superBlock
    }))
    .filter(({ name })=> {
      return name !== 'Hikes';
    })
    .groupBy(block => block.superBlock)
    .flatMap(superBlocks$ => superBlocks$.toArray())
    .shareReplay();

  const blocks$ = superBlocks$
    .flatMap(superBlock => Observable.just(superBlock))
    .shareReplay();

  const User = app.models.User;
  const userCount$ = observeMethod(User, 'count');

  const send200toNonUser = ifNoUserSend(true);

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

  router.get('/map', challengeMap);
  router.get(
    '/challenges/next-challenge',
    returnNextChallenge
  );

  router.get('/challenges/:challengeName', returnIndividualChallenge);

  app.use(router);

  function returnNextChallenge(req, res, next) {
    let nextChallengeName = firstChallenge;

    const challengeId = req.query.id;

    // find challenge
    return challenge$
      .map(challenge => challenge.toJSON())
      .filter(({ superBlock }) => superBlock !== 'hikes')
      .filter(({ id }) => id === challengeId)
      // now lets find the block it belongs to
      .flatMap(challenge => {
        // find the index of the block this challenge resides in
        const blockIndex$ = blocks$
          .findIndex(({ name }) => name === challenge.block);

        return blockIndex$
          .flatMap(blockIndex => {
            // could not find block?
            if (blockIndex === -1) {
              return Observable.throw(
                'could not find challenge block for ' + challenge.block
              );
            }
            const firstChallengeOfNextBlock$ = blocks$
              .elementAt(blockIndex + 1, {})
              .map(({ challenges = [] }) => challenges[0]);

            return blocks$
              .elementAt(blockIndex)
              .flatMap(block => {
                // find where our challenge lies in the block
                const challengeIndex$ = Observable.from(
                  block.challenges,
                  null,
                  null,
                  Scheduler.default
                )
                  .findIndex(({ id }) => id === challengeId);

                // grab next challenge in this block
                return challengeIndex$
                  .map(index => {
                    return block.challenges[index + 1];
                  })
                  .flatMap(nextChallenge => {
                    if (!nextChallenge) {
                      return firstChallengeOfNextBlock$;
                    }
                    return Observable.just(nextChallenge);
                  });
              });
          });
      })
      .map(nextChallenge => {
        if (!nextChallenge) {
          return null;
        }
        nextChallengeName = nextChallenge.dashedName;
        return nextChallengeName;
      })
      .subscribe(
        function() {},
        next,
        function() {
          debug('next challengeName', nextChallengeName);
          if (!nextChallengeName || nextChallengeName === firstChallenge) {
            req.flash('info', {
              msg: dedent`
                Once you have completed all of our challenges, you should
                join our <a href="https://gitter.im/freecodecamp/HalfWayClub"
                target="_blank">Half Way Club</a> and start getting
                ready for our nonprofit projects.
              `.split('\n').join(' ')
            });
            return res.redirect('/map');
          }
          res.redirect('/challenges/' + nextChallengeName);
        }
      );
  }

  function returnIndividualChallenge(req, res, next) {
    const origChallengeName = req.params.challengeName;
    const solutionCode = req.query.solution;
    const unDashedName = unDasherize(origChallengeName);

    const challengeName = challengesRegex.test(unDashedName) ?
      // remove first word if matches
      unDashedName.split(' ').slice(1).join(' ') :
      unDashedName;

    const testChallengeName = new RegExp(challengeName, 'i');
    debug('looking for %s', testChallengeName);
    challenge$
      .filter((challenge) => {
        return testChallengeName.test(challenge.name);
      })
      .last({ defaultValue: null })
      .flatMap(challenge => {
        if (challenge && isDev) {
          return getFromDisk$(challenge);
        }
        return Observable.just(challenge);
      })
      .flatMap(challenge => {

        // Handle not found
        if (!challenge) {
          debug('did not find challenge for ' + origChallengeName);
          req.flash('errors', {
            msg:
              '404: We couldn\'t find a challenge with the name `' +
              origChallengeName +
              '` Please double check the name.'
          });
          return Observable.just('/map');
        }

        if (dasherize(challenge.name) !== origChallengeName) {
          let redirectUrl = `/challenges/${dasherize(challenge.name)}`;

          if (solutionCode) {
            redirectUrl += `?solution=${encodeURIComponent(solutionCode)}`;
          }

          return Observable.just(redirectUrl);
        }

        // save user does nothing if user does not exist
        return Observable.just({

          title: challenge.name,
          name: challenge.name,
          details: challenge.description,
          description: challenge.description,
          challengeId: challenge.id,
          challengeType: challenge.challengeType,
          dashedName: origChallengeName,

          challengeSeed: challenge.challengeSeed,
          head: challenge.head,
          tail: challenge.tail,
          tests: challenge.tests,

          // identifies if a challenge is completed
          isCompleted: isChallengeCompleted(req.user, challenge.id),

          // video challenges
          video: challenge.challengeSeed[0],

          // bonfires specific
          bonfires: challenge,
          MDNkeys: challenge.MDNlinks,
          MDNlinks: getMDNLinks(challenge.MDNlinks),

          // htmls specific
          verb: randomVerb(),
          phrase: randomPhrase(),
          compliment: randomCompliment()
        });
      })
      .subscribe(
        function(data) {
          if (typeof data === 'string') {
            debug('redirecting to %s', data);
            return res.redirect(data);
          }
          var view = challengeView[data.challengeType];
          res.render(view, data);
        },
        next,
        function() {}
      );
  }

  function completedChallenge(req, res, next) {

    const completedDate = Math.round(+new Date());
    const {
      id,
      name,
      challengeType,
      solution
    } = req.body;

    updateUserProgress(
      req.user,
      id,
      {
        id,
        challengeType,
        solution,
        name,
        completedDate,
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
      name: req.body.challengeInfo.challengeName || '',
      completedDate: completedDate,
      solution: solutionLink,
      githubLink: githubLink,
      challengeType: challengeType,
      verified: false
    };

    observeQuery(
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

    let lastCompleted;
    const daysRunning = moment().diff(new Date('10/15/2014'), 'days');

    // if user
    // get the id's of all the users completed challenges
    const completedChallenges = !user.completedChallenges ?
      [] :
      _.uniq(user.completedChallenges).map(({ id, _id }) => id || _id);

    const camperCount$ = userCount$()
      .map(camperCount => numberWithCommas(camperCount));

    // create a stream of an array of all the challenge blocks
    const superBlocks$ = challenge$
      // mark challenge completed
      .map(challengeModel => {
        const challenge = challengeModel.toJSON();
        if (completedChallenges.indexOf(challenge.id) !== -1) {
          challenge.completed = true;
        }
        challenge.markNew = shouldShowNew(challenge);
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
        }, 0);
        const isBeta = _.every(blockArray, 'isBeta');

        return {
          isBeta,
          name: blockArray[0].block,
          superBlock: blockArray[0].superBlock,
          dashedName: dasherize(blockArray[0].block),
          markNew: shouldShowNew(null, blockArray),
          challenges: blockArray,
          completed: completedCount / blockArray.length * 100,
          time: blockArray[0] && blockArray[0].time || '???'
        };
      })
      .filter(({ superBlock }) => superBlock !== 'hikes')
      // turn stream of blocks into a stream of an array
      .toArray()
      .doOnNext(blocks => {
        const lastCompletedBlock = _.findLast(blocks, (block) => {
          return block.completed === 100;
        });
        lastCompleted = lastCompletedBlock && lastCompletedBlock.name || null;
      })
      .flatMap(blocks => Observable.from(blocks, null, null, Scheduler.default))
      .groupBy(block => block.superBlock)
      .flatMap(blocks$ => blocks$.toArray())
      .map(superBlockArray => ({
        name: superBlockArray[0].superBlock,
        blocks: superBlockArray
      }))
      .toArray();

    Observable.combineLatest(
      camperCount$,
      superBlocks$,
      (camperCount, superBlocks) => ({ camperCount, superBlocks })
    )
      .subscribe(
        ({ camperCount, superBlocks }) => {
          console.log('sup', superBlocks);
          res.render('challengeMap/show', {
            superBlocks,
            daysRunning,
            globalCompletedCount: numberWithCommas(
              5612952 + (Math.floor((Date.now() - 1446268581061) / 2000))
            ),
            camperCount,
            lastCompleted,
            title: 'A Map to Learn to Code and Become a Software Engineer'
          });
        },
        next
      );
  }
};
