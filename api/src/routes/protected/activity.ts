import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';

/**
 * Plugin for the activity tracking endpoint.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const activityRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/activity',
    {
      schema: schemas.updateActivity
    },
    async (req, reply) => {
      const { url } = req.body;

      try {
        await fastify.prisma.user.updateMany({
          where: { id: req.user?.id },
          data: {
            lastActivityUrl: url,
            lastActivityTimestamp: Date.now()
          }
        });
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return reply.send({
          message: 'flash.generic-error',
          type: 'danger'
        } as const);
      }

      return reply.send({
        message: 'flash.activity-updated' as const,
        type: 'success' as const
      });
    }
  );

  done();
};
