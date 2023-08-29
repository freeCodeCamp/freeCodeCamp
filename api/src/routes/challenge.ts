import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import { uniqBy } from 'lodash';
import { jwtSecret } from '../../../api-server/config/secrets';
import { getChallenges } from '../utils/get-challenges';
import { updateUserChallengeData } from '../utils/common-challenge-functions';
import { formatValidationError } from '../utils/error-formatting';
import { schemas } from '../schemas';
import { getPoints, ProgressTimestamp } from '../utils/progress';
import { challengeTypes } from '../../../config/challenge-types';
import {
  canSubmitCodeRoadCertProject,
  createProject,
  updateProject
} from './helpers/challenge-helpers';

interface JwtPayload {
  userToken: string;
}

/**
 * Plugin for the challenge submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const challenges = getChallenges();

  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/coderoad-challenge-completed',
    {
      schema: schemas.coderoadChallengeCompleted,
      attachValidation: true
    },
    async (req, reply) => {
      let userToken;

      const { 'coderoad-user-token': encodedUserToken } = req.headers;
      const { tutorialId } = req.body;

      if (!tutorialId) {
        void reply.code(400);
        return {
          type: 'error',
          msg: `'tutorialId' not found in request body`
        } as const;
      }

      if (!encodedUserToken) {
        void reply.code(400);
        return {
          type: 'error',
          msg: `'Coderoad-User-Token' not found in request headers`
        } as const;
      }

      try {
        if (typeof encodedUserToken === 'string' && jwtSecret) {
          const payload = jwt.verify(encodedUserToken, jwtSecret) as JwtPayload;
          userToken = payload.userToken;
        }
      } catch {
        void reply.code(400);
        return { type: 'error', msg: `invalid user token` } as const;
      }

      const tutorialRepo = tutorialId?.split(':')[0];
      const tutorialOrg = tutorialRepo?.split('/')?.[0];

      if (tutorialOrg !== 'freeCodeCamp') {
        void reply.code(400);
        return {
          type: 'error',
          msg: `Tutorial not hosted on freeCodeCamp GitHub account`
        } as const;
      }

      const codeRoadChallenges = challenges.filter(
        ({ challengeType }) =>
          challengeType === challengeTypes.codeAllyPractice ||
          challengeType === challengeTypes.codeAllyCert
      );

      const challenge = codeRoadChallenges.find(challenge => {
        return tutorialRepo && challenge.url?.endsWith(tutorialRepo);
      });

      if (!challenge) {
        void reply.code(400);
        return { type: 'error', msg: 'Tutorial name is not valid' } as const;
      }

      const { id: challengeId, challengeType } = challenge;
      try {
        const tokenInfo = await fastify.prisma.userToken.findUnique({
          where: { id: userToken }
        });

        if (!tokenInfo) {
          void reply.code(400);
          return { type: 'error', msg: 'User token not found' } as const;
        }

        const { userId } = tokenInfo;

        const user = await fastify.prisma.user.findFirstOrThrow({
          where: { id: userId }
        });

        if (!user) {
          void reply.code(400);
          return {
            type: 'error',
            msg: 'User for user token not found'
          } as const;
        }

        const completedDate = Date.now();
        const { completedChallenges = [], partiallyCompletedChallenges = [] } =
          user;

        const isCompleted = completedChallenges.some(
          challenge => challenge.id === challengeId
        );

        if (challengeType === challengeTypes.codeAllyCert && !isCompleted) {
          const finalChallenge = {
            id: challengeId,
            completedDate
          };

          await fastify.prisma.user.update({
            where: { id: req.session.user.id },
            data: {
              partiallyCompletedChallenges: uniqBy(
                [finalChallenge, ...partiallyCompletedChallenges],
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
        void reply.code(400);
        return {
          type: 'error',
          msg: 'An error occurred trying to submit the challenge'
        } as const;
      }
      return {
        type: 'success',
        msg: 'Successfully submitted challenge'
      } as const;
    }
  );

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
          challengeType === challengeTypes.codeAllyCert &&
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

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: schemas.backendChallengeCompleted,
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
