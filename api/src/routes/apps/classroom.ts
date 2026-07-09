import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { normalizeDate } from '../../utils/normalize.js';
import * as schemas from '../../schemas.js';

/**
 * Routes for the classroom app integration.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const classroomRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/get-user-id',
    {
      schema: schemas.classroomGetUserIdSchema
    },
    async (request, reply) => {
      const { email } = request.body;

      try {
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

  fastify.post(
    '/get-user-data',
    {
      schema: schemas.classroomGetUserDataSchema
    },
    async (request, reply) => {
      const { userIds } = request.body;

      try {
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

        const userData: Record<
          string,
          { id: string; completedDate: number }[]
        > = {};

        users.forEach(user => {
          userData[user.id] = user.completedChallenges.map(challenge => ({
            id: challenge.id,
            completedDate: normalizeDate(challenge.completedDate)
          }));
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
