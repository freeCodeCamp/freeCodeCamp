/**
 *
 * Any ref to fixCompletedChallengesItem should be removed post
 * a db migration to fix all completedChallenges
 *
 */

import _ from 'lodash';
import debug from 'debug';
import accepts from 'accepts';
import dedent from 'dedent';

import { homeLocation } from '../../../config/env.json';

import { ifNoUserSend } from '../utils/middleware';
import { dasherize } from '../utils';
import pathMigrations from '../resources/pathMigration.json';
import { fixCompletedChallengeItem } from '../../common/utils';

const log = debug('fcc:boot:challenges');

const learnURL = `${homeLocation}/learn`;

const jsProjects = [
  'aaa48de84e1ecc7c742e1124',
  'a7f4d8f2483413a6ce226cac',
  '56533eb9ac21ba0edf2244e2',
  'aff0395860f5d3034dc0bfc9',
  'aa2e6f85cab2ab736c9a9b24'
];

function buildUserUpdate(user, challengeId, _completedChallenge, timezone) {
  const { files } = _completedChallenge;
  let completedChallenge = {};

  if (jsProjects.includes(challengeId)) {
    completedChallenge = {
      ..._completedChallenge,
      files: Object.keys(files)
        .map(key => files[key])
        .map(file =>
          _.pick(file, ['contents', 'key', 'index', 'name', 'path', 'ext'])
        )
    };
  } else {
    completedChallenge = _.omit(_completedChallenge, ['files']);
  }
  let finalChallenge;
  const updateData = {};
  const { timezone: userTimezone, completedChallenges = [] } = user;

  const oldChallenge = _.find(
    completedChallenges,
    ({ id }) => challengeId === id
  );
  const alreadyCompleted = !!oldChallenge;

  if (alreadyCompleted) {
    finalChallenge = {
      ...completedChallenge,
      completedDate: oldChallenge.completedDate
    };
  } else {
    updateData.$push = {
      ...updateData.$push,
      progressTimestamps: Date.now()
    };
    finalChallenge = {
      ...completedChallenge
    };
  }

  updateData.$set = {
    completedChallenges: _.uniqBy(
      [finalChallenge, ...completedChallenges.map(fixCompletedChallengeItem)],
      'id'
    )
  };

  if (
    timezone &&
    timezone !== 'UTC' &&
    (!userTimezone || userTimezone === 'UTC')
  ) {
    updateData.$set = {
      ...updateData.$set,
      timezone: userTimezone
    };
  }

  log('user update data', updateData);

  return {
    alreadyCompleted,
    updateData,
    completedDate: finalChallenge.completedDate
  };
}

function buildChallengeUrl(challenge) {
  const { superBlock, block, dashedName } = challenge;
  return `/learn/${dasherize(superBlock)}/${dasherize(block)}/${dashedName}`;
}

function getFirstChallenge(Challenge) {
  return new Promise(resolve => {
    Challenge.find(
      { where: { challengeOrder: 0, superOrder: 1, order: 0 } },
      (err, challenge) => {
        if (err) {
          console.log(err);
          return resolve('/learn');
        }
        return resolve(buildChallengeUrl(challenge));
      }
    );
  });
}

async function createChallengeUrlResolver(app) {
  const { Challenge } = app.models;
  const cache = new Map();
  const firstChallenge = await getFirstChallenge(Challenge);

  return function resolveChallengeUrl(id) {
    return new Promise(resolve => {
      if (cache.has(id)) {
        return resolve(cache.get(id));
      }
      return Challenge.findById(id, (err, challenge) => {
        if (err) {
          console.log(err);
          return firstChallenge;
        }
        const challengeUrl = buildChallengeUrl(challenge);
        cache.set(id, challengeUrl);
        return resolve(challengeUrl);
      });
    });
  };
}

export default async function bootChallenge(app, done) {
  const send200toNonUser = ifNoUserSend(true);
  const api = app.loopback.Router();
  const router = app.loopback.Router();
  const challengeUrlResolver = await createChallengeUrlResolver(app);

  api.post(
    '/modern-challenge-completed',
    send200toNonUser,
    modernChallengeCompleted
  );

  // deprecate endpoint
  // remove once new endpoint is live
  api.post('/completed-challenge', send200toNonUser, completedChallenge);

  api.post('/challenge-completed', send200toNonUser, completedChallenge);

  // deprecate endpoint
  // remove once new endpoint is live
  api.post(
    '/completed-zipline-or-basejump',
    send200toNonUser,
    projectCompleted
  );

  api.post('/project-completed', send200toNonUser, projectCompleted);

  api.post(
    '/backend-challenge-completed',
    send200toNonUser,
    backendChallengeCompleted
  );

  router.get('/challenges/current-challenge', redirectToCurrentChallenge);

  router.get('/challenges', redirectToLearn);

  router.get('/challenges/*', redirectToLearn);

  router.get('/map', redirectToLearn);

  app.use(api);
  app.use('/external', api);
  app.use('/internal', api);
  app.use(router);

  function modernChallengeCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();

    const errors = req.validationErrors(true);
    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }

      log('errors', errors);
      return res.sendStatus(403);
    }

    const user = req.user;
    return user
      .getCompletedChallenges$()
      .flatMap(() => {
        const completedDate = Date.now();
        const { id, files } = req.body;

        const { alreadyCompleted, updateData } = buildUserUpdate(user, id, {
          id,
          files,
          completedDate
        });

        const points = alreadyCompleted ? user.points : user.points + 1;

        return user
          .update$(updateData)
          .doOnNext(() => user.manualReload())
          .doOnNext(({ count }) => log('%s documents updated', count))
          .map(() => {
            if (type === 'json') {
              return res.json({
                points,
                alreadyCompleted,
                completedDate
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function completedChallenge(req, res, next) {
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    const type = accepts(req).type('html', 'json', 'text');
    const errors = req.validationErrors(true);

    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }

      log('errors', errors);
      return res.sendStatus(403);
    }

    return req.user
      .getCompletedChallenges$()
      .flatMap(() => {
        const completedDate = Date.now();
        const { id, solution, timezone, files } = req.body;

        const { alreadyCompleted, updateData } = buildUserUpdate(
          req.user,
          id,
          { id, solution, completedDate, files },
          timezone
        );

        const user = req.user;
        const points = alreadyCompleted ? user.points : user.points + 1;

        return user
          .update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .map(() => {
            if (type === 'json') {
              return res.json({
                points,
                alreadyCompleted,
                completedDate
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function projectCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('challengeType', 'must be a number').isNumber();
    req.checkBody('solution', 'solution must be a URL').isURL();

    const errors = req.validationErrors(true);

    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }
      log('errors', errors);
      return res.sendStatus(403);
    }

    const { user, body = {} } = req;

    const completedChallenge = _.pick(body, [
      'id',
      'solution',
      'githubLink',
      'challengeType',
      'files'
    ]);
    completedChallenge.completedDate = Date.now();

    if (
      !completedChallenge.solution ||
      // only basejumps require github links
      (completedChallenge.challengeType === 4 && !completedChallenge.githubLink)
    ) {
      req.flash(
        'danger',
        "You haven't supplied the necessary URLs for us to inspect your work."
      );
      return res.sendStatus(403);
    }

    return user
      .getCompletedChallenges$()
      .flatMap(() => {
        const { alreadyCompleted, updateData } = buildUserUpdate(
          user,
          completedChallenge.id,
          completedChallenge
        );

        return user
          .update$(updateData)
          .doOnNext(() => user.manualReload())
          .doOnNext(({ count }) => log('%s documents updated', count))
          .doOnNext(() => {
            if (type === 'json') {
              return res.send({
                alreadyCompleted,
                points: alreadyCompleted ? user.points : user.points + 1,
                completedDate: completedChallenge.completedDate
              });
            }
            return res.status(200).send(true);
          });
      })
      .subscribe(() => {}, next);
  }

  function backendChallengeCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('solution', 'solution must be a URL').isURL();

    const errors = req.validationErrors(true);

    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }
      log('errors', errors);
      return res.sendStatus(403);
    }

    const { user, body = {} } = req;

    const completedChallenge = _.pick(body, ['id', 'solution']);
    completedChallenge.completedDate = Date.now();

    return user
      .getCompletedChallenges$()
      .flatMap(() => {
        const { alreadyCompleted, updateData } = buildUserUpdate(
          user,
          completedChallenge.id,
          completedChallenge
        );

        return user
          .update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .doOnNext(() => {
            if (type === 'json') {
              return res.send({
                alreadyCompleted,
                points: alreadyCompleted ? user.points : user.points + 1,
                completedDate: completedChallenge.completedDate
              });
            }
            return res.status(200).send(true);
          });
      })
      .subscribe(() => {}, next);
  }

  async function redirectToCurrentChallenge(req, res, next) {
    const { user } = req;
    const challengeId = user && user.currentChallengeId;
    log(req.user.username);
    log(challengeId);
    const challengeUrl = await challengeUrlResolver(challengeId).catch(next);
    log(challengeUrl);
    if (challengeUrl === '/learn') {
      // this should normally not be hit if database is properly seeded
      throw new Error(dedent`
        Attempted to find the url for ${challengeId}'
        but came up empty.
        db may not be properly seeded.
      `);
    }
    return res.redirect(`${homeLocation}${challengeUrl}`);
  }

  function redirectToLearn(req, res) {
    const maybeChallenge = _.last(req.path.split('/'));
    if (maybeChallenge in pathMigrations) {
      const redirectPath = pathMigrations[maybeChallenge];
      return res.status(302).redirect(`${learnURL}${redirectPath}`);
    }
    return res.status(302).redirect(learnURL);
  }
  done();
}
