import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { HOME_LOCATION } from '../utils/env.js';
import { allowedOrigins } from '../utils/allowed-origins.js';

const cors: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.options('*', (_req, reply) => {
    void reply.send();
  });

  fastify.addHook('onRequest', async (req, reply) => {
    // `origin` is an undocumented reserved keyword in Sentry
    // if used as attribute name in logs, it is overwritten in queries
    // https://github.com/getsentry/sentry/issues/120640
    const _origin = req.headers.origin;
    if (_origin && allowedOrigins.includes(_origin)) {
      req.log.debug({ _origin }, 'Allowing access to origin');
      void reply.header('Access-Control-Allow-Origin', _origin);
    } else {
      // TODO: Discuss if this is the correct approach. Standard practice is to
      // reflect one of a list of allowed origins and handle development
      // separately. If we switch to that approach we can replace use
      // @fastify/cors instead.
      void reply.header('Access-Control-Allow-Origin', HOME_LOCATION);

      if (_origin && !req.url?.startsWith('/status/')) {
        req.log.warn({ _origin }, 'Received request from disallowed origin');
      } else {
        req.log.debug({ _origin }, 'Unknown or missing origin');
      }
    }

    void reply
      .header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Csrf-Token, Coderoad-User-Token, Exam-Environment-Authorization-Token'
      )
      .header('Access-Control-Allow-Credentials', true)
      // These 4 are the only methods we use
      .header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
      // Vary: Origin to prevent cache poisoning
      // TODO: do we need Vary: Accept-Encoding?
      .header('Vary', 'Origin, Accept-Encoding');
  });

  done();
};

export default fp(cors);
