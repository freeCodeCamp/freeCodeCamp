import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';
import {
  getRequestTimezone,
  insertActivityEvent
} from '../../data/activity.js';

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
      const { eventId, eventType, subjectId, url } = req.body;

      try {
        await insertActivityEvent(fastify, {
          userId: req.user!.id,
          eventId,
          eventType,
          source: 'client',
          subjectId,
          url,
          timezone: getRequestTimezone(req)
        });
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
