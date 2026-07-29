import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';
import { getActivityDate, isValidTimeZone } from '../../utils/activity-date.js';
import { generateNanoId } from '../../utils/ids.js';

const MAX_EVENT_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_FUTURE_SKEW_MS = 5 * 60 * 1000;

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
      const { eventId, eventType, challengeId, url, occurredAt, timezone } =
        req.body;
      const eventDate = new Date(occurredAt);
      const now = Date.now();

      if (
        !isValidTimeZone(timezone) ||
        eventDate.getTime() < now - MAX_EVENT_AGE_MS ||
        eventDate.getTime() > now + MAX_FUTURE_SKEW_MS
      ) {
        void reply.code(400);
        return reply.send({
          message: 'flash.generic-error',
          type: 'danger'
        } as const);
      }

      try {
        let user = await fastify.prisma.user.findFirst({
          where: { id: req.user?.id },
          select: { activityTrackingId: true }
        });

        if (!user) {
          throw new Error('Authenticated user does not exist');
        }

        if (!user.activityTrackingId) {
          const activityTrackingId = generateNanoId();
          await fastify.prisma.user.updateMany({
            where: {
              id: req.user?.id,
              OR: [
                { activityTrackingId: null },
                { activityTrackingId: { isSet: false } }
              ]
            },
            data: { activityTrackingId }
          });
          user = await fastify.prisma.user.findFirst({
            where: { id: req.user?.id },
            select: { activityTrackingId: true }
          });
        }

        if (!user?.activityTrackingId) {
          throw new Error('Unable to initialize activity tracking ID');
        }

        const insertStart = performance.now();
        try {
          await fastify.clickhouse.insert({
            table: 'activity_events',
            format: 'JSONEachRow',
            values: [
              {
                event_id: eventId,
                tracking_id: user.activityTrackingId,
                event_type: eventType,
                challenge_id: challengeId,
                url,
                occurred_at: eventDate.toISOString(),
                activity_date: getActivityDate(eventDate, timezone),
                timezone
              }
            ]
          });
          fastify.Sentry.metrics.distribution(
            'clickhouse.query_duration_ms',
            performance.now() - insertStart,
            {
              unit: 'millisecond',
              attributes: {
                operation: 'insert_activity',
                result: 'success'
              }
            }
          );
        } catch (error) {
          fastify.Sentry.metrics.count('clickhouse.insert_failed', 1);
          fastify.Sentry.metrics.distribution(
            'clickhouse.query_duration_ms',
            performance.now() - insertStart,
            {
              unit: 'millisecond',
              attributes: {
                operation: 'insert_activity',
                result: 'failure'
              }
            }
          );
          throw error;
        }
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
        void reply.code(503);
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
