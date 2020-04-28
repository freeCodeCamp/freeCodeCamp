/**
 *
 * Any ref to fixCompletedChallengesItem should be removed post
 * a db migration to fix all completedChallenges
 *
 */
import { Observable } from 'rx';
import { isEmpty, pick, omit, find, uniqBy, last } from 'lodash';
import debug from 'debug';
import dedent from 'dedent';
import { ObjectID } from 'mongodb';
import isNumeric from 'validator/lib/isNumeric';
import isURL from 'validator/lib/isURL';

import { homeLocation } from '../../../config/env';

import { ifNoUserSend } from '../utils/middleware';
import { dasherize } from '../../../utils/slugs';
import _pathMigrations from '../resources/pathMigration.json';
import { fixCompletedChallengeItem } from '../../common/utils';

const log = debug('fcc:boot:challenges');

export default async function bootChallenge(app, done) {
  const send200toNonUser = ifNoUserSend(true);
  const api = app.loopback.Router();
  const router = app.loopback.Router();
  const redirectToLearn = createRedirectToLearn(_pathMigrations);
  const challengeUrlResolver = await createChallengeUrlResolver(app);
  const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
    challengeUrlResolver
  );

  api.post(
    '/modern-challenge-completed',
    send200toNonUser,
    isValidChallengeCompletion,
    modernChallengeCompleted
  );

  api.post(
    '/project-completed',
    send200toNonUser,
    isValidChallengeCompletion,
    projectCompleted
  );

  api.post(
    '/backend-challenge-completed',
    send200toNonUser,
    isValidChallengeCompletion,
    backendChallengeCompleted
  );

  router.get('/challenges/current-challenge', redirectToCurrentChallenge);

  router.get('/challenges', redirectToLearn);

  router.get('/challenges/*', redirectToLearn);

  router.get('/map', redirectToLearn);

  app.use(api);
  app.use(router);
  done();
}
const learnURL = `${homeLocation}/learn`;

const jsProjects = [
  'aaa48de84e1ecc7c742e1124',
  'a7f4d8f2483413a6ce226cac',
  '56533eb9ac21ba0edf2244e2',
  'aff0395860f5d3034dc0bfc9',
  'aa2e6f85cab2ab736c9a9b24'
];

export function buildUserUpdate(
  user,
  challengeId,
  _completedChallenge,
  timezone
) {
  const { files } = _completedChallenge;
  let completedChallenge = {};
  if (jsProjects.includes(challengeId)) {
    completedChallenge = {
      ..._completedChallenge,
      files: Object.keys(files)
        .map(key => files[key])
        .map(file =>
          pick(file, ['contents', 'key', 'index', 'name', 'path', 'ext'])
        )
    };
  } else {
    completedChallenge = omit(_completedChallenge, ['files']);
  }
  let finalChallenge;
  const updateData = {};
  const { timezone: userTimezone, completedChallenges = [] } = user;

  const oldChallenge = find(
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
    completedChallenges: uniqBy(
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
  return {
    alreadyCompleted,
    updateData,
    completedDate: finalChallenge.completedDate
  };
}

export function buildChallengeUrl(challenge) {
  const { superBlock, block, dashedName } = challenge;
  return `/learn/${dasherize(superBlock)}/${dasherize(block)}/${dashedName}`;
}

export function getFirstChallenge(Challenge) {
  return new Promise(resolve => {
    Challenge.findOne(
      { where: { challengeOrder: 0, superOrder: 1, order: 0 } },
      (err, challenge) => {
        if (err || isEmpty(challenge)) {
          return resolve('/learn');
        }
        return resolve(buildChallengeUrl(challenge));
      }
    );
  });
}

export async function createChallengeUrlResolver(
  app,
  { _getFirstChallenge = getFirstChallenge } = {}
) {
  const { Challenge } = app.models;
  const cache = new Map();
  const firstChallenge = await _getFirstChallenge(Challenge);
  return function resolveChallengeUrl(id) {
    if (isEmpty(id)) {
      return Promise.resolve(firstChallenge);
    }
    return new Promise(resolve => {
      if (cache.has(id)) {
        return resolve(cache.get(id));
      }
      return Challenge.findById(id, (err, challenge) => {
        if (err || isEmpty(challenge)) {
          return resolve(firstChallenge);
        }
        const challengeUrl = buildChallengeUrl(challenge);
        cache.set(id, challengeUrl);
        return resolve(challengeUrl);
      });
    });
  };
}

export function isValidChallengeCompletion(req, res, next) {
  const {
    body: { id, challengeType, solution }
  } = req;

  const isValidChallengeCompletionErrorMsg = {
    type: 'error',
    message: 'That does not appear to be a valid challenge submission.'
  };

  if (!ObjectID.isValid(id)) {
    log('isObjectId', id, ObjectID.isValid(id));
    return res.status(403).json(isValidChallengeCompletionErrorMsg);
  }
  if ('challengeType' in req.body && !isNumeric(String(challengeType))) {
    log('challengeType', challengeType, isNumeric(challengeType));
    return res.status(403).json(isValidChallengeCompletionErrorMsg);
  }
  if ('solution' in req.body && !isURL(solution)) {
    log('isObjectId', id, ObjectID.isValid(id));
    return res.status(403).json(isValidChallengeCompletionErrorMsg);
  }
  return next();
}

export function modernChallengeCompleted(req, res, next) {
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
      const updatePromise = new Promise((resolve, reject) =>
        user.updateAttributes(updateData, err => {
          if (err) {
            return reject(err);
          }
          return resolve();
        })
      );
      return Observable.fromPromise(updatePromise).map(() => {
        return res.json({
          points,
          alreadyCompleted,
          completedDate
        });
      });
    })
    .subscribe(() => {}, next);
}

function projectCompleted(req, res, next) {
  const { user, body = {} } = req;

  const completedChallenge = pick(body, [
    'id',
    'solution',
    'githubLink',
    'challengeType',
    'files'
  ]);
  completedChallenge.completedDate = Date.now();

  if (!completedChallenge.solution) {
    return res.status(403).json({
      type: 'error',
      message:
        'You have not provided the valid links for us to inspect your work.'
    });
  }

  return user
    .getCompletedChallenges$()
    .flatMap(() => {
      const { alreadyCompleted, updateData } = buildUserUpdate(
        user,
        completedChallenge.id,
        completedChallenge
      );

      const updatePromise = new Promise((resolve, reject) =>
        user.updateAttributes(updateData, err => {
          if (err) {
            return reject(err);
          }
          return resolve();
        })
      );
      return Observable.fromPromise(updatePromise).doOnNext(() => {
        return res.send({
          alreadyCompleted,
          points: alreadyCompleted ? user.points : user.points + 1,
          completedDate: completedChallenge.completedDate
        });
      });
    })
    .subscribe(() => {}, next);
}

function backendChallengeCompleted(req, res, next) {
  const { user, body = {} } = req;

  const completedChallenge = pick(body, ['id', 'solution']);
  completedChallenge.completedDate = Date.now();

  return user
    .getCompletedChallenges$()
    .flatMap(() => {
      const { alreadyCompleted, updateData } = buildUserUpdate(
        user,
        completedChallenge.id,
        completedChallenge
      );

      const updatePromise = new Promise((resolve, reject) =>
        user.updateAttributes(updateData, err => {
          if (err) {
            return reject(err);
          }
          return resolve();
        })
      );
      return Observable.fromPromise(updatePromise).doOnNext(() => {
        return res.send({
          alreadyCompleted,
          points: alreadyCompleted ? user.points : user.points + 1,
          completedDate: completedChallenge.completedDate
        });
      });
    })
    .subscribe(() => {}, next);
}

export function createRedirectToCurrentChallenge(
  challengeUrlResolver,
  { _homeLocation = homeLocation, _learnUrl = learnURL } = {}
) {
  return async function redirectToCurrentChallenge(req, res, next) {
    const { user } = req;
    if (!user) {
      return res.redirect(_learnUrl);
    }
    const challengeId = user && user.currentChallengeId;
    const challengeUrl = await challengeUrlResolver(challengeId).catch(next);
    if (challengeUrl === '/learn') {
      // this should normally not be hit if database is properly seeded
      throw new Error(dedent`
        Attempted to find the url for ${challengeId || 'Unknown ID'}'
        but came up empty.
        db may not be properly seeded.
      `);
    }
    return res.redirect(`${_homeLocation}${challengeUrl}`);
  };
}

export function createRedirectToLearn(
  pathMigrations,
  base = homeLocation,
  learn = learnURL
) {
  return function redirectToLearn(req, res) {
    const maybeChallenge = last(req.path.split('/'));
    if (maybeChallenge in pathMigrations) {
      const redirectPath = pathMigrations[maybeChallenge];
      return res.status(302).redirect(`${base}${redirectPath}`);
    }
    return res.status(302).redirect(learn);
  };
}
