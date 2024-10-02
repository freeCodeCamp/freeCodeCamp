import type { FastifyPluginCallback } from 'fastify';
import fastifySentry from '@immobiliarelabs/fastify-sentry';
import fp from 'fastify-plugin';

import { SENTRY_DSN } from '../utils/env';

/**
 * Plugin to handle errors and send them to Sentry.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const errorHandling: FastifyPluginCallback = (fastify, _options, done) => {
  void fastify.register(fastifySentry, {
    dsn: SENTRY_DSN,
    // No need to initialize if DSN is not provided (e.g. in development and
    // test environments)
    skipInit: !SENTRY_DSN,
    errorResponse: (error, _request, reply) => {
      const isCSRFError =
        error.code === 'FST_CSRF_INVALID_TOKEN' ||
        error.code === 'FST_CSRF_MISSING_SECRET';
      if (reply.statusCode === 500 || isCSRFError) {
        void reply.send({
          message: 'flash.generic-error',
          type: 'danger'
        });
      } else {
        void reply.send(error);
      }
    }
  });

  done();
};

export default fp(errorHandling, {
  dependencies: ['redirect-with-message']
});
