import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { startOfDay } from 'date-fns';

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
      const logger = fastify.log.child({ req, res: reply });
      const { challengeId, url } = req.body;

      try {
        const user = await fastify.prisma.user.findFirst({
          where: { id: req.user?.id },
          select: { activityTimestamps: true }
        });

        const todayStart = startOfDay(new Date()).getTime();
        const existingTimestamps = (user?.activityTimestamps as number[]) ?? [];
        const alreadyRecordedToday = existingTimestamps.includes(todayStart);

        const updateData: {
          currentChallengeId: string;
          lastActivityUrl: string;
          activityTimestamps?: number[];
        } = {
          currentChallengeId: challengeId,
          lastActivityUrl: url
        };

        if (!alreadyRecordedToday) {
          updateData.activityTimestamps = [...existingTimestamps, todayStart];
        }

        await fastify.prisma.user.updateMany({
          where: { id: req.user?.id },
          data: updateData
        });
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
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
