import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { formatValidationError } from '../utils/error-formatting';
import { ProgressTimestamp, getPoints } from '../utils/progress';
import { schemas } from '../schemas';
import {
  canSubmitCodeRoadCertProject,
  createProject,
  updateProject
} from './helpers/challenge-helpers';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/project-completed',
    {
      schema: schemas.projectCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatValidationError(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { id: projectId, challengeType, solution, githubLink } = req.body;
      const userId = req.session.user.id;

      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: userId },
          select: {
            completedChallenges: true,
            partiallyCompletedChallenges: true,
            progressTimestamps: true
          }
        });

        if (
          challengeType === 13 &&
          !canSubmitCodeRoadCertProject(projectId, user)
        ) {
          void reply.code(403);
          return {
            type: 'error',
            message:
              'You have to complete the project before you can submit a URL.'
          } as const;
        }

        const completedDate = Date.now();
        const oldChallenge = user.completedChallenges?.find(
          ({ id }) => id === projectId
        );
        const updatedChallenge = {
          challengeType,
          solution,
          githubLink
        };
        const newChallenge = {
          ...updatedChallenge,
          id: projectId,
          completedDate
        };
        const alreadyCompleted = !!oldChallenge;
        const progressTimestamps =
          user.progressTimestamps as ProgressTimestamp[];
        const points = getPoints(progressTimestamps);

        const data = alreadyCompleted
          ? updateProject(projectId, updatedChallenge)
          : createProject(projectId, newChallenge, progressTimestamps);

        await fastify.prisma.user.update({
          where: { id: userId },
          data
        });

        return {
          alreadyCompleted,
          // TODO(Post-MVP): audit the client and remove this if the client does
          // not use it.
          completedDate,
          points: alreadyCompleted ? points : points + 1
        };
      } catch (err) {
        // TODO: send to Sentry
        fastify.log.error(err);
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
