import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { FREECODECAMP_NODE_ENV } from '../utils/env';

const securityHeaders: FastifyPluginCallback = (fastify, _options, done) => {
  // OWASP recommended headers
  fastify.addHook('onRequest', async (req, reply) => {
    const logger = fastify.log.child({ req });

    logger.debug('Adding security headers to response');

    void reply
      .header('Cache-Control', 'no-store')
      .header('Content-Security-Policy', "frame-ancestors 'none'")
      .header('X-Content-Type-Options', 'nosniff')
      .header('X-Frame-Options', 'DENY');
    // TODO: Increase this gradually to 2 years. Include preload once it is
    // at least 1 year.
    if (FREECODECAMP_NODE_ENV === 'production') {
      void reply.header(
        'Strict-Transport-Security',
        'max-age=300; includeSubDomains'
      );
    }
  });

  done();
};

export default fp(securityHeaders);
