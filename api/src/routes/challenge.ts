// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';
import { ObjectId } from 'bson';
import isNumeric from 'validator/lib/isNumeric';
import { flatten, isEmpty, omit, pick } from 'lodash'; // Shouldn't this fail as lodash is not installed in "api" workspace
import isURL from 'validator/lib/isURL';
import curriculum from '../../../config/curriculum.json';

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

function getChallenges() {
  return Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challengeArray, superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challengeArray, ...flatten(challengesForBlock)];
    }, []);
}

function buildUserUpdate(user, challengeId, _completedChallenge, timezone) {
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

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  // NOTE: This would be better if it could be added as a hook instead of
  //       being called in each submission route
  function isValidChallengeCompletion(req, reply) {
    const {
      body: { id, challengeType, solution }
    } = req;

    const isValidChallengeCompletionErrorMsg = {
      type: 'error',
      message: 'That does not appear to be a valid challenge submission.'
    };

    if (!ObjectId.isValid(id)) {
      fastify.log.info(`isObjectId - ${id} - ${ObjectId.isValid(id)}`);
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
    if ('challengeType' in req.body && !String(challengeType)) {
      fastify.log.info(
        `challengeType - ${challengeType} - ${isNumeric(challengeType)}`
      );
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
    if ('solution' in req.body && !isURL(solution)) {
      fastify.log.info(`isObjectId - ${id} - ${ObjectId.isValid(id)}`);
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
  }

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: {
        body: Type.Object({
          id: Type.String(),
          solution: Type.String()
        })
      }
    },
    async (req, reply) => {
      try {
        console.log(req.body);
        const completedChallenge = {
          completedDate: Date.now(),
          ...req.body
        };
        const user = await fastify.prisma.user.findFirst({
          where: { id: req.session.user.id }
        });
        await isValidChallengeCompletion(req, reply);
        if (reply.sent) return;

        const { alreadyCompleted, updateData } = buildUserUpdate(
          user,
          completedChallenge.id,
          completedChallenge
        );

        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: updateData
        });

        return {
          alreadyCompleted,
          points: alreadyCompleted ? user.points : user.points + 1,
          completedDate: completedChallenge.completedDate
        };
      } catch (error) {
        fastify.log.error(error);
        void reply.code(500);
        return {
          message: 'flash.wrong-updating',
          type: 'danger'
        };
      }
    }
  );

  done();
};
