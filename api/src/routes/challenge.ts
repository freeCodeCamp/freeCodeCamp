import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import { isEmpty, omit, pick, uniqBy } from 'lodash';
import { user } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { environment, deploymentEnv } from '../../../config/env.json';
import { jwtSecret } from '../../../config/secrets';
import { getChallenges } from '../utils/get-curriculum';
import { fixPartiallyCompletedChallengeItem } from '../utils';
import { CompletedChallenge, SavedChallenge } from '../../../client/src/redux/prop-types';



interface JwtPayload {
  userToken: string;
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

export async function buildUserUpdate(
  fastify: FastifyInstance,
  user: user,
  challengeId: string,
  _completedChallenge: CompletedChallenge,
  timezone?: string,
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

  if (alreadyCompleted && oldChallenge ) {
    finalChallenge = {
      ...completedChallenge,
      completedDate: oldChallenge.completedDate
    };

    const challenges = completedChallenges;
    const challenge = challenges[oldIndex];

    if(challenge){
      challenge.completedDate = oldChallenge.completedDate;
    }

    await fastify.prisma.user.update({
      where: { id: user.id },
      data: {
        completedChallenges: challenges
      }
    });
    
  } else {
    finalChallenge = {
      ...completedChallenge
    };
    $push.progressTimestamps = completedDate;
    $push.completedChallenges = finalChallenge;
  }

  if (savableChallenges.includes(challengeId)) {
    const challengeToSave: SavedChallenge = {
      id: challengeId,
      lastSavedDate: completedDate,
      files: files?.map(file =>
        pick(file, ['contents', 'key', 'name', 'e3xt', 'history'])
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
  fastify.post(
    '/challenge/coderoad-challenge-completed',
    {
      schema: {
        body: Type.Object({
          tutorialId: Type.String()
        }),
        response: {
          200: Type.Object({}),
          400: Type.String(),
          500: Type.Object({
            message: Type.Literal('Something went wrong.'),
            type: Type.Literal('danger')
          })
        }
      },
      attachValidation: true
    },

    async (req, reply) => {
      try {

        let userToken;

        const { 'coderoad-user-token': encodedUserToken } = req.headers;
        const { tutorialId } = req.body;

        if (!tutorialId) {
          void reply.code(400);
          return `'tutorialId' not found in request body`;
        }

        if (!encodedUserToken) {
          void reply.code(400);
          return `'coderoad-user-token' not found in request headers`;
        }

        try {
          if (typeof encodedUserToken === 'string' && jwtSecret) {
            const payload = jwt.verify(
              encodedUserToken,
              jwtSecret
            ) as JwtPayload;
            userToken = payload.userToken;
          } else {
            throw Error('something went wrong');
          }
        } catch {
          void reply.code(400);
          return `invalid user token`;
        }

        const tutorialRepo = tutorialId?.split(':')[0];
        const tutorialOrg = tutorialRepo?.split('/')?.[0];

        if (deploymentEnv !== 'staging' && environment !== 'development') {
          if (tutorialOrg !== 'freeCodeCamp') {
            void reply.code(400);
            return `Tutorial not hosted on freeCodeCamp GitHub account`;
          }
        }

        const codeRoadChallenges = getChallenges().filter(
          ({ challengeType }) => challengeType === 12 || challengeType === 13
        );

        const challenge = codeRoadChallenges.find(challenge => {
          if (!tutorialRepo) {
            return false;
          }
          return challenge.url?.endsWith(tutorialRepo);
        });

        if (!challenge) return 'Tutorial name is not valid';

        const { id: challengeId, challengeType } = challenge;
        try {

          const tokenInfo = await fastify.prisma.userToken.findUnique({
            where: { id: userToken }
          });

          if (!tokenInfo) return 'User token not found';

          const { userId } = tokenInfo;

          const user = await fastify.prisma.user.findFirstOrThrow({
            where: { id: userId }
          });

          if (!user) return `User for user token not found`;

          const completedDate = Date.now();
          const { completedChallenges = [], partiallyCompletedChallenges = [] } = user;

          let userUpdateInfo = <UserUpdateInfo>{};

          const isCompleted = completedChallenges.some(
            challenge => challenge.id === challengeId
          );


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

          } else {
            userUpdateInfo = buildUserUpdate(fastify, user, challengeId, {
              id: challengeId,
              completedDate
            });
          }

        } catch {

        }
      } catch {
        return '';
      }
    }
  );

  done();
};
