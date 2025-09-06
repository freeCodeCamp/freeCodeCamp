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
  // Endpoint to retrieve user(s) data from a list of emails
  fastify.get(
    '/api/protected/classroom/get-user-data',
    {
      schema: {
        querystring: Type.Object({
          emails: Type.String() // Comma-separated
        }),
        response: {
          200: Type.Object({
            data: Type.Record(
              Type.String(), // Email as key
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
          })
        }
      }
    },
    async (request, reply) => {
      const { emails = '' } = request.query as { emails: string };

      // Split the comma-separated string into an array
      const emailArray = emails.split(',').filter(Boolean);

      console.log('emails to query:', emailArray);

      // Limit number of users per request for performance
      if (emailArray.length > 50) {
        return reply.code(400).send({
          error: 'Too many users requested. Maximum 50 allowed.'
        });
      }

      try {
        // Find all the requested users by email instead of username
        const users = await fastify.prisma.user.findMany({
          where: {
            email: { in: emailArray }
          },
          select: {
            email: true,
            completedChallenges: true
          }
        });

        // Map to transform user data into the required format
        const userData: Record<string, object[]> = {};

        users.forEach(user => {
          // Normalize challenges
          const normalizedChallenges = normalizeChallenges(
            user.completedChallenges
          );
          console.log(
            'normalizedChallenges for user',
            user.email,
            normalizedChallenges.length
          );

          if (user.email !== null) {
            userData[user.email] = normalizedChallenges;
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
