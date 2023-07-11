import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { schemas } from '../schemas';
import { updateUserChallengeData } from '../utils/common-challenge-functions';
import { getPoints, ProgressTimestamp } from '../utils/progress';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: schemas.backendChallengeCompleted
    },
    async (req, reply) => {
      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.session.user.id }
        });
        const progressTimestamps = user.progressTimestamps as
          | ProgressTimestamp[]
          | null;
        const points = getPoints(progressTimestamps);

        const completedChallenge = {
          completedDate: Date.now(),
          ...req.body
        };

        const { alreadyCompleted } = await updateUserChallengeData(
          fastify,
          user,
          req.body.id,
          completedChallenge
        );

        return {
          alreadyCompleted,
          points: alreadyCompleted ? points : points + 1,
          completedDate: completedChallenge.completedDate
        };
      } catch (error) {
        fastify.log.error(error);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        } as const;
      }
    }
  );

  done();
};
