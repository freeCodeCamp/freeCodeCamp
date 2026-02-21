import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import {
  normalizeChallenges,
  NormalizedChallenge
} from '../../utils/normalize.js';
import * as schemas from '../../schemas/classroom/classroom.js';

/**
 * Fastify plugin for classroom-related protected routes.
 * Provides endpoint for retrieving user data for classrooms.
 * @param fastify - The Fastify instance.
 * @param _options - Plugin options (unused).
 * @param done - Callback to signal plugin registration is complete.
 */
export const classroomRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // Endpoint to retrieve a user's ID from a user's email.
  // If we send a 404 error here, it will stop the entire classroom process from working.
  // Instead, we indicate that the user was not found through a null response and continue.
  fastify.post(
    '/api/protected/classroom/get-user-id',
    {
      schema: schemas.classroomGetUserIdSchema
    },
    async (request, reply) => {
      const { email } = request.body;

      // Basic email validation - return empty userId for invalid emails
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return reply.send({ userId: '' });
      }

      try {
        // Find the user by email
        const user = await fastify.prisma.user.findFirst({
          where: { email, isClassroomAccount: true },
          select: { id: true }
        });

        if (!user) {
          return reply.send({ userId: '' });
        }

        return reply.send({
          userId: user.id
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.code(500).send({ error: 'Failed to retrieve user id' });
      }
    }
  );

  // Endpoint to retrieve user(s) data from a list of user ids
  fastify.post(
    '/api/protected/classroom/get-user-data',
    {
      schema: schemas.classroomGetUserDataSchema
    },
    async (request, reply) => {
      const { userIds = [] } = request.body;

      // Limit number of users per request for performance
      // Send custom error message if this is exceeded
      if (userIds.length > 50) {
        return reply.code(400).send({
          error: 'Too many users requested. Maximum 50 allowed.'
        });
      }

      try {
        // Find all the requested users by user id
        const users = await fastify.prisma.user.findMany({
          where: {
            id: { in: userIds },
            isClassroomAccount: true
          },
          select: {
            id: true,
            completedChallenges: true
          }
        });

        // Map to transform user data into the required format
        const userData: Record<string, NormalizedChallenge[]> = {};

        users.forEach(user => {
          // Normalize challenges
          const normalizedChallenges = normalizeChallenges(
            user.completedChallenges
          );

          userData[user.id] = normalizedChallenges;
        });

        return reply.send({
          data: userData
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.code(500).send({ error: 'Failed to retrieve user data' });
      }
    }
  );

  done();
};
