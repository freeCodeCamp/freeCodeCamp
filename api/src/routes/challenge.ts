import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import { uniqBy } from 'lodash';
import { environment, deploymentEnv } from '../../../config/env.json';
import { jwtSecret } from '../../../config/secrets';
import { fixPartiallyCompletedChallengeItem } from '../utils';
import { getChallenges } from '../utils/get-challenges';
import { updateUserChallengeData } from '../utils/common-challenge-functions';
interface JwtPayload {
  userToken: string;
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
          const payload = jwt.verify(encodedUserToken, jwtSecret) as JwtPayload;
          userToken = payload.userToken;
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
        return challenge.url.endsWith(tutorialRepo);
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

        if (!user) return 'User for user token not found';

        const completedDate = Date.now();
        const { completedChallenges = [], partiallyCompletedChallenges = [] } =
          user;

        const isCompleted = completedChallenges.some(
          challenge => challenge.id === challengeId
        );

        if (challengeType === 13 && !isCompleted) {
          const finalChallenge = {
            id: challengeId,
            completedDate
          };

          await fastify.prisma.user.update({
            where: { id: req.session.user.id },
            data: {
              partiallyCompletedChallenges: uniqBy(
                [
                  finalChallenge,
                  ...partiallyCompletedChallenges.map(
                    fixPartiallyCompletedChallengeItem
                  )
                ],
                'id'
              )
            }
          });
        } else {
          await updateUserChallengeData(fastify, user, challengeId, {
            id: challengeId,
            completedDate
          });
        }
      } catch {
        return 'An error occurred trying to submit the challenge';
      }
      return 'Successfully submitted challenge';
    }
  );

  done();
};
