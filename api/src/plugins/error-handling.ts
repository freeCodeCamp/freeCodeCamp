import type { FastifyPluginCallback } from 'fastify';
import fastifySentry from '@immobiliarelabs/fastify-sentry';
import fp from 'fastify-plugin';

import { SENTRY_DSN } from '../utils/env';
import { getRedirectParams } from '../utils/redirection';

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
    errorResponse: (error, request, reply) => {
      const accepts = request.accepts().type(['json', 'html']);
      const isCSRFError =
        error.code === 'FST_CSRF_INVALID_TOKEN' ||
        error.code === 'FST_CSRF_MISSING_SECRET';

      const { returnTo } = getRedirectParams(request);

      const message =
        reply.statusCode === 500 || isCSRFError
          ? 'flash.generic-error'
          : error.message;
      if (accepts === 'json') {
        void reply.send({
          message,
          type: 'danger'
        });
      } else {
        void reply.status(302);
        void reply.redirectWithMessage(returnTo, {
          type: 'danger',
          content: message
        });
      }
    }
  });

  done();
};

export default fp(errorHandling, {
  dependencies: ['redirect-with-message', '@fastify/accepts']
});
