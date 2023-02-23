/**
 *
 * Any ref to fixCompletedChallengesItem should be removed post
 * a db migration to fix all completedChallenges
 *
 * NOTE: it's been 4 years, so any active users will have been migrated. We
 * should still try to migrate the rest at some point.
 *
 */
import debug from 'debug';
import dedent from 'dedent';
import { isEmpty, pick, omit, uniqBy } from 'lodash';
import { ObjectID } from 'mongodb';
import isNumeric from 'validator/lib/isNumeric';
import isURL from 'validator/lib/isURL';

import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../../../config/secrets';

import { environment, deploymentEnv } from '../../../../config/env.json';
import { fixPartiallyCompletedChallengeItem } from '../../common/utils';
import { getChallenges } from '../utils/get-curriculum';
import { ifNoUserSend } from '../utils/middleware';
import {
  getRedirectParams,
  normalizeParams,
  getPrefixedLandingPath
} from '../utils/redirection';

const log = debug('fcc:boot:challenges');

export default async function bootChallenge(app, done) {
  const send200toNonUser = ifNoUserSend(true);
  const api = app.loopback.Router();
  const router = app.loopback.Router();
  const challengeUrlResolver = await createChallengeUrlResolver(
    getChallenges()
  );
  const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
    challengeUrlResolver,
    normalizeParams,
    getRedirectParams
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

  api.post(
    '/save-challenge',
    send200toNonUser,
    isValidChallengeCompletion,
    saveChallenge
  );

  router.get('/challenges/current-challenge', redirectToCurrentChallenge);

  const coderoadChallengeCompleted = createCoderoadChallengeCompleted(app);

  api.post('/coderoad-challenge-completed', coderoadChallengeCompleted);

  app.use(api);
  app.use(router);
  done();
}

const jsCertProjectIds = [
  'aaa48de84e1ecc7c742e1124',
  'a7f4d8f2483413a6ce226cac',
  '56533eb9ac21ba0edf2244e2',
  'aff0395860f5d3034dc0bfc9',
  'aa2e6f85cab2ab736c9a9b24'
];

const multifileCertProjectIds = getChallenges()
  .filter(challenge => challenge.challengeType === 14)
  .map(challenge => challenge.id);

const savableChallenges = getChallenges()
  .filter(challenge => challenge.challengeType === 14)
  .map(challenge => challenge.id);

export function buildUserUpdate(
  user,
  challengeId,
  _completedChallenge,
  timezone
) {
  const { files, completedDate = Date.now() } = _completedChallenge;
  let completedChallenge = {};
  if (
    jsCertProjectIds.includes(challengeId) ||
    multifileCertProjectIds.includes(challengeId)
  ) {
    completedChallenge = {
      ..._completedChallenge,
      files: files?.map(file =>
        pick(file, ['contents', 'key', 'index', 'name', 'path', 'ext'])
      )
    };
  } else {
    completedChallenge = omit(_completedChallenge, ['files']);
  }
  let finalChallenge;
  const $push = {},
    $set = {},
    $pull = {};
  const {
    timezone: userTimezone,
    completedChallenges = [],
    needsModeration = false,
    savedChallenges = []
  } = user;

  const oldIndex = completedChallenges.findIndex(
    ({ id }) => challengeId === id
  );

  const alreadyCompleted = oldIndex !== -1;
  const oldChallenge = alreadyCompleted ? completedChallenges[oldIndex] : null;

  if (alreadyCompleted) {
    finalChallenge = {
      ...completedChallenge,
      completedDate: oldChallenge.completedDate
    };
    $set[`completedChallenges.${oldIndex}`] = finalChallenge;
  } else {
    finalChallenge = {
      ...completedChallenge
    };
    $push.progressTimestamps = completedDate;
    $push.completedChallenges = finalChallenge;
  }

  if (savableChallenges.includes(challengeId)) {
    const challengeToSave = {
      id: challengeId,
      lastSavedDate: completedDate,
      files: files?.map(file =>
        pick(file, ['contents', 'key', 'name', 'ext', 'history'])
      )
    };

    const savedIndex = savedChallenges.findIndex(
      ({ id }) => challengeId === id
    );

    if (savedIndex >= 0) {
      $set[`savedChallenges.${savedIndex}`] = challengeToSave;
      savedChallenges[savedIndex] = challengeToSave;
    } else {
      $push.savedChallenges = challengeToSave;
      savedChallenges.push(challengeToSave);
    }
  }

  // remove from partiallyCompleted on submit
  $pull.partiallyCompletedChallenges = { id: challengeId };

  if (
    timezone &&
    timezone !== 'UTC' &&
    (!userTimezone || userTimezone === 'UTC')
  ) {
    $set.timezone = userTimezone;
  }

  if (needsModeration) $set.needsModeration = true;

  const updateData = {};
  if (!isEmpty($set)) updateData.$set = $set;
  if (!isEmpty($push)) updateData.$push = $push;
  if (!isEmpty($pull)) updateData.$pull = $pull;

  return {
    alreadyCompleted,
    updateData,
    completedDate: finalChallenge.completedDate,
    savedChallenges
  };
}

export function buildChallengeUrl(challenge) {
  const { superBlock, block, dashedName } = challenge;
  return `/learn/${superBlock}/${block}/${dashedName}`;
}

// this is only called once during boot, so it can be slow.
export function getFirstChallenge(allChallenges) {
  const first = allChallenges.find(
    ({ challengeOrder, superOrder, order }) =>
      challengeOrder === 0 && superOrder === 0 && order === 0
  );

  return first ? buildChallengeUrl(first) : '/learn';
}

function getChallengeById(allChallenges, targetId) {
  return allChallenges.find(({ id }) => id === targetId);
}

export async function createChallengeUrlResolver(
  allChallenges,
  { _getFirstChallenge = getFirstChallenge } = {}
) {
  const cache = new Map();
  const firstChallenge = _getFirstChallenge(allChallenges);

  return function resolveChallengeUrl(id) {
    if (isEmpty(id)) {
      return Promise.resolve(firstChallenge);
    } else {
      return new Promise(resolve => {
        if (cache.has(id)) {
          resolve(cache.get(id));
        }

        const challenge = getChallengeById(allChallenges, id);
        if (isEmpty(challenge)) {
          resolve(firstChallenge);
        } else {
          const challengeUrl = buildChallengeUrl(challenge);
          cache.set(id, challengeUrl);
          resolve(challengeUrl);
        }
      });
    }
  };
}

export function isValidChallengeCompletion(req, res, next) {
  const {
    body: { id, challengeType, solution }
  } = req;

  // ToDO: Validate other things (challengeFiles, etc)
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

export async function modernChallengeCompleted(req, res, next) {
  const user = req.user;

  try {
    // This is an ugly way to update `user.completedChallenges`
    await user.getCompletedChallenges$().toPromise();
  } catch (e) {
    return next(e);
  }

  const completedDate = Date.now();
  const { id, files, challengeType } = req.body;

  const completedChallenge = {
    id,
    files,
    completedDate
  };

  // if multifile cert project
  if (challengeType === 14) {
    completedChallenge.isManuallyApproved = false;
    user.needsModeration = true;
  }

  // We only need to know the challenge type if it's a project. If it's a
  // step or normal challenge we can avoid storing in the database.
  if (jsCertProjectIds.includes(id) || multifileCertProjectIds.includes(id)) {
    completedChallenge.challengeType = challengeType;
  }

  const { alreadyCompleted, savedChallenges, updateData } = buildUserUpdate(
    user,
    id,
    completedChallenge
  );

  const points = alreadyCompleted ? user.points : user.points + 1;

  user.updateAttributes(updateData, err => {
    if (err) {
      return next(err);
    }

    return res.json({
      points,
      alreadyCompleted,
      completedDate,
      savedChallenges
    });
  });
}

async function projectCompleted(req, res, next) {
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

  // CodeRoad cert project
  if (completedChallenge.challengeType === 13) {
    const { partiallyCompletedChallenges = [], completedChallenges = [] } =
      user;

    const isPartiallyCompleted = partiallyCompletedChallenges.some(
      challenge => challenge.id === completedChallenge.id
    );

    const isCompleted = completedChallenges.some(
      challenge => challenge.id === completedChallenge.id
    );

    if (!isPartiallyCompleted && !isCompleted) {
      return res.status(403).json({
        type: 'error',
        message: 'You have to complete the project before you can submit a URL.'
      });
    }
  }

  try {
    // This is an ugly hack to update `user.completedChallenges`
    await user.getCompletedChallenges$().toPromise();
  } catch (e) {
    return next(e);
  }

  const { alreadyCompleted, updateData } = buildUserUpdate(
    user,
    completedChallenge.id,
    completedChallenge
  );

  user.updateAttributes(updateData, err => {
    if (err) {
      return next(err);
    }

    return res.json({
      alreadyCompleted,
      points: alreadyCompleted ? user.points : user.points + 1,
      completedDate: completedChallenge.completedDate
    });
  });
}

async function backendChallengeCompleted(req, res, next) {
  const { user, body = {} } = req;

  const completedChallenge = pick(body, ['id', 'solution']);
  completedChallenge.completedDate = Date.now();

  try {
    await user.getCompletedChallenges$().toPromise();
  } catch (e) {
    return next(e);
  }

  const { alreadyCompleted, updateData } = buildUserUpdate(
    user,
    completedChallenge.id,
    completedChallenge
  );

  user.updateAttributes(updateData, err => {
    if (err) {
      return next(err);
    }

    return res.json({
      alreadyCompleted,
      points: alreadyCompleted ? user.points : user.points + 1,
      completedDate: completedChallenge.completedDate
    });
  });
}

async function saveChallenge(req, res, next) {
  const user = req.user;
  const { savedChallenges = [] } = user;
  const { id: challengeId, files = [] } = req.body;

  if (!savableChallenges.includes(challengeId)) {
    return res.status(403).send('That challenge type is not savable');
  }

  const challengeToSave = {
    id: challengeId,
    lastSavedDate: Date.now(),
    files: files?.map(file =>
      pick(file, ['contents', 'key', 'name', 'ext', 'history'])
    )
  };

  try {
    await user.getSavedChallenges$().toPromise();
  } catch (e) {
    return next(e);
  }

  const savedIndex = savedChallenges.findIndex(({ id }) => challengeId === id);
  const $push = {},
    $set = {};

  if (savedIndex >= 0) {
    $set[`savedChallenges.${savedIndex}`] = challengeToSave;
    savedChallenges[savedIndex] = challengeToSave;
  } else {
    $push.savedChallenges = challengeToSave;
    savedChallenges.push(challengeToSave);
  }

  const updateData = {};
  if (!isEmpty($set)) updateData.$set = $set;
  if (!isEmpty($push)) updateData.$push = $push;

  user.updateAttributes(updateData, err => {
    if (err) {
      return next(err);
    }

    return res.json({
      savedChallenges
    });
  });
}

const codeRoadChallenges = getChallenges().filter(
  ({ challengeType }) => challengeType === 12 || challengeType === 13
);

function createCoderoadChallengeCompleted(app) {
  /* Example request coming from CodeRoad:
   * req.body: { tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0' }
   * req.headers: { coderoad-user-token: '8kFIlZiwMioY6hqqt...' }
   */

  const { UserToken, User } = app.models;

  return async function coderoadChallengeCompleted(req, res) {
    const { 'coderoad-user-token': encodedUserToken } = req.headers;
    const { tutorialId } = req.body;

    if (!tutorialId) return res.send(`'tutorialId' not found in request body`);

    if (!encodedUserToken)
      return res.send(`'coderoad-user-token' not found in request headers`);

    let userToken;

    try {
      userToken = jwt.verify(encodedUserToken, jwtSecret)?.userToken;
    } catch {
      return res.send(`invalid user token`);
    }

    const tutorialRepo = tutorialId?.split(':')[0];
    const tutorialOrg = tutorialRepo?.split('/')?.[0];

    // this allows any GH account to host the repo in development or staging
    // .org submissions should always be from repos hosted on the fCC GH org
    if (deploymentEnv !== 'staging' && environment !== 'development') {
      if (tutorialOrg !== 'freeCodeCamp')
        return res.send('Tutorial not hosted on freeCodeCamp GitHub account');
    }

    // validate tutorial name is in codeRoadChallenges object
    const challenge = codeRoadChallenges.find(challenge =>
      challenge.url?.endsWith(tutorialRepo)
    );

    if (!challenge) return res.send('Tutorial name is not valid');

    const { id: challengeId, challengeType } = challenge;

    try {
      // check if user token is in database
      const tokenInfo = await UserToken.findOne({
        where: { id: userToken }
      });

      if (!tokenInfo) return res.send('User token not found');

      const { userId } = tokenInfo;

      // check if user exists for user token
      const user = await User.findOne({
        where: { id: userId }
      });

      if (!user) return res.send('User for user token not found');

      // submit challenge
      const completedDate = Date.now();
      const { completedChallenges = [], partiallyCompletedChallenges = [] } =
        user;

      let userUpdateInfo = {};

      const isCompleted = completedChallenges.some(
        challenge => challenge.id === challengeId
      );

      // if CodeRoad cert project and not in completedChallenges,
      // add to partiallyCompletedChallenges
      if (challengeType === 13 && !isCompleted) {
        const finalChallenge = {
          id: challengeId,
          completedDate
        };

        userUpdateInfo.updateData = {};
        userUpdateInfo.updateData.$set = {
          partiallyCompletedChallenges: uniqBy(
            [
              finalChallenge,
              ...partiallyCompletedChallenges.map(
                fixPartiallyCompletedChallengeItem
              )
            ],
            'id'
          )
        };

        // else, add to or update completedChallenges
      } else {
        userUpdateInfo = buildUserUpdate(user, challengeId, {
          id: challengeId,
          completedDate
        });
      }
      const updatedUser = await user.updateAttributes(
        userUpdateInfo?.updateData
      );

      if (!updatedUser)
        return res.send('An error occurred trying to submit the challenge');
    } catch (e) {
      return res.send('An error occurred trying to submit the challenge');
    }

    return res.send('Successfully submitted challenge');
  };
}

// TODO: extend tests to cover www.freecodecamp.org/language and
// chinese.freecodecamp.org
export function createRedirectToCurrentChallenge(
  challengeUrlResolver,
  normalizeParams,
  getRedirectParams
) {
  return async function redirectToCurrentChallenge(req, res, next) {
    const { user } = req;
    const { origin, pathPrefix } = getRedirectParams(req, normalizeParams);

    const redirectBase = getPrefixedLandingPath(origin, pathPrefix);
    if (!user) {
      return res.redirect(redirectBase + '/learn');
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
    return res.redirect(`${redirectBase}${challengeUrl}`);
  };
}
