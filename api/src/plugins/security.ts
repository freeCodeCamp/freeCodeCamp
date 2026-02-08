import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { FREECODECAMP_NODE_ENV } from '../utils/env.js';

const securityHeaders: FastifyPluginCallback = (fastify, _options, done) => {
  // OWASP recommended headers
  fastify.addHook('onRequest', async (req, reply) => {
    void reply
      .header('Cache-Control', 'no-store')
      .header('Content-Security-Policy', "frame-ancestors 'none'")
      .header('X-Content-Type-Options', 'nosniff')
      .header('X-Frame-Options', 'DENY');
    if (FREECODECAMP_NODE_ENV === 'production') {
      void reply.header(
        'Strict-Transport-Security',
        'max-age=63072000; includeSubDomains; preload'
      );
    }
  });

  done();
};

export default fp(securityHeaders);
