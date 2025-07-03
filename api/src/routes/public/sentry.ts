import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { type FastifyInstance, type FastifyReply } from 'fastify';

import { UpdateReqType } from '../../utils';
import * as schemas from '../../schemas';

/**
 * Plugin for Sentry-related endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const sentryRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/sentry/event',
    {
      schema: schemas.sentryPostEvent
    },
    postSentryEventHandler
  );

  done();
};

function postSentryEventHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.sentryPostEvent>,
  _reply: FastifyReply
) {
  throw new Error(`Sentry Test: ${req.body.text}`);
}
