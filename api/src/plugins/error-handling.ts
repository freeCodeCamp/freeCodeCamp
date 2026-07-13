import type { FastifyError, FastifyPluginCallback } from 'fastify';
import * as Sentry from '@sentry/node';
import fp from 'fastify-plugin';

import { getRedirectParams } from '../utils/redirection.js';
import { clientNetInfo } from '../utils/logger.js';

declare module 'fastify' {
  interface FastifyInstance {
    Sentry: typeof Sentry;
  }
}

/**
 * Plugin to handle errors and send them to Sentry.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const isExpectedClientError = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  'statusCode' in error &&
  typeof (error as { statusCode?: unknown }).statusCode === 'number' &&
  (error as { statusCode: number }).statusCode < 500;

const errorHandling: FastifyPluginCallback = (fastify, _options, done) => {
  Sentry.setupFastifyErrorHandler(fastify, {
    shouldHandleError: error => !isExpectedClientError(error)
  });

  fastify.decorate('Sentry', Sentry);

  fastify.setErrorHandler((error: FastifyError, request, reply) => {
    const accepts = request.accepts().type(['json', 'html']);
    const { returnTo } = getRedirectParams(request);

    if (!reply.statusCode || reply.statusCode === 200) {
      const statusCode =
        error.statusCode && error.statusCode >= 400 ? error.statusCode : 500;
      reply.code(statusCode);
    }

    const isCSRFError =
      error.code === 'FST_CSRF_INVALID_TOKEN' ||
      error.code === 'FST_CSRF_MISSING_SECRET';

    if (!isCSRFError) {
      const context = { err: error, ...clientNetInfo(request) };
      if (reply.statusCode >= 500) {
        request.log.error(context, 'Error in request');
      } else {
        request.log.warn(context, 'Client error in request');
      }
    } else {
      fastify.Sentry?.metrics?.count('security.csrf_rejected', 1, {
        attributes: { reason: error.code }
      });
    }

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
  });

  done();
};

export default fp(errorHandling, {
  dependencies: ['redirect-with-message', '@fastify/accepts']
});
