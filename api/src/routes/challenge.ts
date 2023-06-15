import {
  type FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';

import { formatValidationError } from '../utils/error-formatting';
import { ProgressTimestamp, getPoints } from '../utils/progress';
import { canSubmitCodeRoadCertProject } from './helpers/challenge-helpers';

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
      schema: {
        body: Type.Object({
          id: Type.String({ format: 'objectid', maxLength: 24 }),
          challengeType: Type.Optional(Type.Number()),
          solution: Type.String({ format: 'url', maxLength: 1024 }),
          // TODO(Post-MVP): require format: 'url' for githubLink
          githubLink: Type.Optional(Type.String())
        }),
        response: {
          200: Type.Object({
            completedDate: Type.Number(),
            points: Type.Number(),
            alreadyCompleted: Type.Boolean()
          }),
          400: Type.Object({
            type: Type.Literal('error'),
            message: Type.Union([
              Type.Literal(
                'That does not appear to be a valid challenge submission.'
              ),
              Type.Literal(
                'You have not provided the valid links for us to inspect your work.'
              )
            ])
          }),
          403: Type.Object({
            type: Type.Literal('error'),
            message: Type.Literal(
              'You have to complete the project before you can submit a URL.'
            )
          }),
          500: Type.Object({
            message: Type.Literal(
              'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
            ),
            type: Type.Literal('danger')
          })
        }
      },
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
          challenge => challenge.id === projectId
        );
        const newChallenge = {
          challengeType,
          solution,
          githubLink
        };
        const alreadyCompleted = !!oldChallenge;
        const progressTimestamps =
          user.progressTimestamps as ProgressTimestamp[];
        const points = getPoints(progressTimestamps);
        // TODO: once we have the required acceptance tests, work on refactoring
        // this into something that the other routes can use. i.e. a few
        // functions that build the update object based on the challenge type.
        // Unlike buildUserUpdate we want multiple functions that we can call if
        // appropriate.

        if (alreadyCompleted) {
          await fastify.prisma.user.update({
            where: { id: userId },
            data: {
              completedChallenges: {
                updateMany: { where: { id: projectId }, data: newChallenge }
              },
              partiallyCompletedChallenges: {
                deleteMany: { where: { id: projectId } }
              }
            }
          });
        } else {
          await fastify.prisma.user.update({
            where: { id: userId },
            data: {
              completedChallenges: {
                push: {
                  ...newChallenge,
                  id: projectId,
                  completedDate
                }
              },
              partiallyCompletedChallenges: {
                deleteMany: { where: { id: projectId } }
              },
              progressTimestamps: [...progressTimestamps, completedDate]
            }
          });
        }

        return {
          alreadyCompleted,
          completedDate: oldChallenge?.completedDate ?? completedDate,
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
