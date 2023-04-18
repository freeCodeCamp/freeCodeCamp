import { FastifyPluginCallback } from 'fastify';

import fp from 'fastify-plugin';

import { FREECODECAMP_NODE_ENV } from '../utils/env';

const fastifySentry: FastifyPluginCallback = (fastify, _options, done) => {
  // OWASP recommended headers
  fastify.addHook('onSend', async (_request, reply, payload) => {
    void reply
      .header('Cache-Control', 'no-store')
      .header('Content-Security-Policy', "frame-ancestors 'none'")
      .header('Content-Type', 'application/json; charset=utf-8')
      .header('X-Content-Type-Options', 'nosniff')
      .header('X-Frame-Options', 'DENY');
    // TODO: Increase this gradually to 2 years.
    if (FREECODECAMP_NODE_ENV === 'production') {
      void reply.header(
        'Strict-Transport-Security',
        'max-age=300; includeSubDomains'
      );
    }
    return payload;
  });

  done();
};

export default fp(fastifySentry);
