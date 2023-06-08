import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import { environment, deploymentEnv } from '../../../config/env.json';
import { jwtSecret } from '../../../config/secrets';

import { getChallenges } from '../utils/get-curriculum';

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
      try {
        // const user = await fastify.prisma.user.findUnique({
        //     where: { id: req.session.user.id }
        // });

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

        if (userToken) {
          return '';
        }
      } catch {
        return '';
      }
    }
  );

  done();
};
