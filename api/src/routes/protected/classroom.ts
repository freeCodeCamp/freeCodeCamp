import { FastifyPluginCallback } from 'fastify';
import { Type } from '@fastify/type-provider-typebox';
import { normalizeChallenges } from '../../utils/normalize.js';

/**
 * Fastify plugin for classroom-related protected routes.
 * Provides endpoint for retrieving user data for classrooms.
 * @param fastify - The Fastify instance.
 * @param _options - Plugin options (unused).
 * @param done - Callback to signal plugin registration is complete.
 */
export const classroomRoutes: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  // Endpoint to retrieve a user's ID from a user's email.
  fastify.post(
    '/api/protected/classroom/get-user-id',
    {
      schema: {
        body: Type.Object({
          email: Type.String({ format: 'email' })
        }),
        response: {
          200: Type.Object({
            userId: Type.String()
          }),
          404: Type.Object({
            error: Type.String()
          })
        }
      }
    },
    async (request, reply) => {
      const { email } = request.body as { email: string };

      try {
        // Find the user by email
        const user = await fastify.prisma.user.findFirst({
          where: { email },
          select: {
            id: true,
            isClassroomAccount: true
          }
        });

        if (!user || !user.isClassroomAccount) {
          return reply.code(404).send({ error: 'User not found' });
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
      schema: {
        body: Type.Object({
          userIds: Type.Array(Type.String())
        }),
        response: {
          200: Type.Object({
            data: Type.Record(
              Type.String(), // Id as key
              Type.Array(
                Type.Object({
                  id: Type.String(),
                  completedDate: Type.Number(),
                  challengeName: Type.Optional(Type.String()),
                  files: Type.Optional(Type.Array(Type.Object({}))),
                  githubLink: Type.Optional(Type.String()),
                  solution: Type.Optional(Type.String())
                })
              )
            )
          }),
          400: Type.Object({
            error: Type.String()
          }),
          500: Type.Object({
            error: Type.String()
          })
        }
      }
    },
    async (request, reply) => {
      const { userIds = [] } = request.body as { userIds: string[] };

      // Limit number of users per request for performance
      if (userIds.length > 50) {
        return reply.code(400).send({
          error: 'Too many users requested. Maximum 50 allowed.'
        });
      }

      try {
        // Find all the requested users by user id
        const users = await fastify.prisma.user.findMany({
          where: {
            id: { in: userIds }
          },
          select: {
            id: true,
            completedChallenges: true,
            isClassroomAccount: true
          }
        });

        // Map to transform user data into the required format
        const userData: Record<string, object[]> = {};

        users.forEach(user => {
          if (!user.isClassroomAccount) {
            return;
          }

          // Normalize challenges
          const normalizedChallenges = normalizeChallenges(
            user.completedChallenges
          );

          if (user.id !== null) {
            userData[user.id] = normalizedChallenges;
          }
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
