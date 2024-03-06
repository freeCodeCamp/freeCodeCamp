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
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';

import { jwtSecret } from '../../../config/secrets';
import { challengeTypes } from '../../../../shared/config/challenge-types';

import {
  fixPartiallyCompletedChallengeItem,
  fixCompletedExamItem
} from '../../common/utils';
import { getChallenges } from '../utils/get-curriculum';
import { ifNoUserSend } from '../utils/middleware';
import {
  getRedirectParams,
  normalizeParams,
  getPrefixedLandingPath
} from '../utils/redirection';
import { generateRandomExam, createExamResults } from '../utils/exam';
import {
  validateExamFromDbSchema,
  validateExamResultsSchema,
  validateGeneratedExamSchema,
  validateUserCompletedExamSchema
} from '../utils/exam-schemas';

const log = debug('fcc:boot:challenges');

export default async function bootChallenge(app, done) {
  const send200toNonUser = ifNoUserSend(true);
  const api = app.loopback.Router();
  const router = app.loopback.Router();
  const challengeUrlResolver =
    await createChallengeUrlResolver(getChallenges());
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

  const generateExam = createGenerateExam(app);

  api.get('/exam/:id', send200toNonUser, generateExam);

  const examChallengeCompleted = createExamChallengeCompleted(app);

  api.post(
    '/exam-challenge-completed',
    send200toNonUser,
    examChallengeCompleted
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

  const msTrophyChallengeCompleted = createMsTrophyChallengeCompleted(app);

  api.post(
    '/ms-trophy-challenge-completed',
    send200toNonUser,
    msTrophyChallengeCompleted
  );

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
  .filter(
    challenge => challenge.challengeType === challengeTypes.multifileCertProject
  )
  .map(challenge => challenge.id);

const multifilePythonCertProjectIds = getChallenges()
  .filter(
    challenge =>
      challenge.challengeType === challengeTypes.multifilePythonCertProject
  )
  .map(challenge => challenge.id);

const savableChallenges = getChallenges()
  .filter(challenge => {
    return (
      challenge.challengeType === challengeTypes.multifileCertProject ||
      challenge.challengeType === challengeTypes.multifilePythonCertProject
    );
  })
  .map(challenge => challenge.id);

const msTrophyChallenges = getChallenges()
  .filter(challenge => challenge.challengeType === challengeTypes.msTrophy)
  .map(({ id, msTrophyId }) => ({ id, msTrophyId }));

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
    multifileCertProjectIds.includes(challengeId) ||
    multifilePythonCertProjectIds.includes(challengeId)
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

export function buildExamUserUpdate(user, _completedChallenge) {
  const {
    id,
    challengeType,
    completedDate = Date.now(),
    examResults
  } = _completedChallenge;

  let finalChallenge = { id, challengeType, completedDate, examResults };

  const { completedChallenges = [] } = user;
  const $push = {},
    $set = {};

  // Always push to completedExams[] to keep a record of all submissions, it may come in handy.
  $push.completedExams = fixCompletedExamItem(_completedChallenge);

  let alreadyCompleted = false;
  let addPoint = false;

  // completedChallenges[] should have their best exam
  if (examResults.passed) {
    const alreadyCompletedIndex = completedChallenges.findIndex(
      challenge => challenge.id === id
    );

    alreadyCompleted = alreadyCompletedIndex !== -1;

    if (alreadyCompleted) {
      const { percentCorrect } = examResults;
      const oldChallenge = completedChallenges[alreadyCompletedIndex];
      const oldResults = oldChallenge.examResults;

      // only update if it's a better result
      if (percentCorrect > oldResults.percentCorrect) {
        finalChallenge.completedDate = oldChallenge.completedDate;
        $set[`completedChallenges.${alreadyCompletedIndex}`] = finalChallenge;
      }
    } else {
      addPoint = true;
      $push.completedChallenges = finalChallenge;
    }
  }

  const updateData = {};
  if (!isEmpty($set)) updateData.$set = $set;
  if (!isEmpty($push)) updateData.$push = $push;

  return {
    alreadyCompleted,
    addPoint,
    updateData,
    completedDate: finalChallenge.completedDate
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
    body: { id, challengeType, solution, githubLink }
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
  // If `backEndProject`:
  // - `solution` needs to exist, but does not have to be valid URL
  // - `githubLink` needs to exist and be valid URL
  if (challengeType === challengeTypes.backEndProject) {
    if (!solution || !isURL(githubLink + '')) {
      log('isObjectId', id, ObjectID.isValid(id));
      return res.status(403).json(isValidChallengeCompletionErrorMsg);
    }
  } else if ('solution' in req.body && !isURL(solution)) {
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
  if (
    jsCertProjectIds.includes(id) ||
    multifileCertProjectIds.includes(id) ||
    multifilePythonCertProjectIds.includes(id)
  ) {
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

  if (
    !completedChallenge.solution ||
    (completedChallenge.challengeType === challengeTypes.backEndProject &&
      !completedChallenge.githubLink)
  ) {
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

// TODO: send flash message keys to client so they can be i18n
function createGenerateExam(app) {
  const { Exam } = app.models;

  return async function generateExam(req, res, next) {
    const {
      user,
      params: { id }
    } = req;

    try {
      await user.getCompletedChallenges$().toPromise();
    } catch (e) {
      return next(e);
    }

    try {
      const examFromDb = await Exam.findById(id);
      if (!examFromDb) {
        res.status(500);
        throw new Error(
          `An error occurred trying to get the exam from the database.`
        );
      }

      // This is cause there was struggles validating the exam directly from the db/loopback
      const examJson = JSON.parse(JSON.stringify(examFromDb));

      const validExamFromDbSchema = validateExamFromDbSchema(examJson);

      if (validExamFromDbSchema.error) {
        res.status(500);
        log(validExamFromDbSchema.error);
        throw new Error(
          `An error occurred validating the exam information from the database.`
        );
      }

      const { prerequisites, numberOfQuestionsInExam, title } = examJson;

      // Validate User has completed prerequisite challenges
      prerequisites?.forEach(prerequisite => {
        const prerequisiteCompleted = user.completedChallenges.find(
          challenge => challenge.id === prerequisite.id
        );

        if (!prerequisiteCompleted) {
          res.status(403);
          throw new Error(
            `You have not completed the required challenges to start the '${title}'.`
          );
        }
      });

      const randomizedExam = generateRandomExam(examJson);

      const validGeneratedExamSchema = validateGeneratedExamSchema(
        randomizedExam,
        numberOfQuestionsInExam
      );

      if (validGeneratedExamSchema.error) {
        res.status(500);
        log(validGeneratedExamSchema.error);
        throw new Error(`An error occurred trying to randomize the exam.`);
      }

      return res.send({ generatedExam: randomizedExam });
    } catch (err) {
      log(err);
      return res.send({ error: err.message });
    }
  };
}

function createExamChallengeCompleted(app) {
  const { Exam } = app.models;

  return async function examChallengeCompleted(req, res, next) {
    const { body = {}, user } = req;

    try {
      await user.getCompletedChallenges$().toPromise();
    } catch (e) {
      return next(e);
    }

    const { userCompletedExam = [], id } = body;

    try {
      const examFromDb = await Exam.findById(id);
      if (!examFromDb) {
        res.status(500);
        throw new Error(
          `An error occurred tryng to get the exam from the database.`
        );
      }

      // This is cause there was struggles validating the exam directly from the db/loopback
      const examJson = JSON.parse(JSON.stringify(examFromDb));

      const validExamFromDbSchema = validateExamFromDbSchema(examJson);
      if (validExamFromDbSchema.error) {
        res.status(500);
        log(validExamFromDbSchema.error);
        throw new Error(
          `An error occurred validating the exam information from the database.`
        );
      }

      const { prerequisites, numberOfQuestionsInExam, title } = examJson;

      // Validate User has completed prerequisite challenges
      prerequisites?.forEach(prerequisite => {
        const prerequisiteCompleted = user.completedChallenges.find(
          challenge => challenge.id === prerequisite.id
        );

        if (!prerequisiteCompleted) {
          res.status(403);
          throw new Error(
            `You have not completed the required challenges to start the '${title}'.`
          );
        }
      });

      // Validate user completed exam
      const validUserCompletedExam = validateUserCompletedExamSchema(
        userCompletedExam,
        numberOfQuestionsInExam
      );
      if (validUserCompletedExam.error) {
        res.status(400);
        log(validUserCompletedExam.error);
        throw new Error(`An error occurred validating the submitted exam.`);
      }

      const examResults = createExamResults(userCompletedExam, examJson);

      const validExamResults = validateExamResultsSchema(examResults);
      if (validExamResults.error) {
        res.status(500);
        log(validExamResults.error);
        throw new Error(`An error occurred validating the submitted exam.`);
      }

      const completedChallenge = pick(body, ['id', 'challengeType']);
      completedChallenge.completedDate = Date.now();
      completedChallenge.examResults = examResults;

      const { addPoint, alreadyCompleted, updateData, completedDate } =
        buildExamUserUpdate(user, completedChallenge);

      user.updateAttributes(updateData, err => {
        if (err) {
          return next(err);
        }

        const points = addPoint ? user.points + 1 : user.points;

        return res.json({
          alreadyCompleted,
          points,
          completedDate,
          examResults
        });
      });
    } catch (err) {
      log(err);
      return res.send({ error: err.message });
    }
  };
}

function createMsTrophyChallengeCompleted(app) {
  const { MsUsername } = app.models;

  return async function msTrophyChallengeCompleted(req, res, next) {
    const { user, body = {} } = req;
    const { id = '' } = body;

    try {
      const msUser = await MsUsername.findOne({
        where: { userId: user.id }
      });

      if (!msUser || !msUser.msUsername) {
        return res
          .status(403)
          .json({ type: 'error', message: 'flash.ms.trophy.err-1' });
      }

      const { msUsername } = msUser;

      const challenge = msTrophyChallenges.find(
        challenge => challenge.id === id
      );

      if (!challenge) {
        return res
          .status(400)
          .json({ type: 'error', message: 'flash.ms.trophy.err-2' });
      }

      const { msTrophyId = '' } = challenge;

      const msProfileApi = `https://learn.microsoft.com/api/profiles/${msUsername}`;
      const msProfileApiRes = await fetch(msProfileApi);
      const msProfileJson = await msProfileApiRes.json();

      if (!msProfileApiRes.ok || !msProfileJson.userId) {
        return res.status(403).json({
          type: 'error',
          message: 'flash.ms.profile.err',
          variables: {
            msUsername
          }
        });
      }

      const { userId } = msProfileJson;

      const msUserAchievementsApi = `https://learn.microsoft.com/api/achievements/user/${userId}`;
      const msUserAchievementsApiRes = await fetch(msUserAchievementsApi);
      const msUserAchievementsJson = await msUserAchievementsApiRes.json();

      if (!msUserAchievementsApiRes.ok) {
        return res.status(403).json({
          type: 'error',
          message: 'flash.ms.trophy.err-3'
        });
      }

      if (msUserAchievementsJson.achievements?.length === 0) {
        return res.status(403).json({
          type: 'error',
          message: 'flash.ms.trophy.err-6'
        });
      }

      const hasEarnedTrophy = msUserAchievementsJson.achievements?.some(
        a => a.typeId === msTrophyId
      );

      if (!hasEarnedTrophy) {
        return res.status(403).json({
          type: 'error',
          message: 'flash.ms.trophy.err-4',
          variables: {
            msUsername
          }
        });
      }

      const completedChallenge = pick(body, ['id']);

      completedChallenge.solution = msUserAchievementsApi;
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
    } catch (e) {
      log(e);
      return res.status(500).json({
        type: 'error',
        message: 'flash.ms.trophy.err-5'
      });
    }
  };
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

    if (tutorialOrg !== 'freeCodeCamp')
      return res.send('Tutorial not hosted on freeCodeCamp GitHub account');

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
