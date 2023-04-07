import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

const fastifySentry: FastifyPluginCallback = (fastify, _options, done) => {
  // OWASP recommended headers
  fastify.addHook('onSend', async (_request, reply, payload) => {
    void reply
      .header('Cache-Control', 'no-store')
      .header('Content-Security-Policy', "frame-ancestors 'none'")
      .header('Content-Type', 'application/json; charset=utf-8')
      // TODO: Increase this gradually to 2 years. Also, check if this needs to
      // be off for dev
      .header('Strict-Transport-Security', 'max-age=300; includeSubDomains')
      .header('X-Content-Type-Options', 'nosniff')
      .header('X-Frame-Options', 'DENY');
    return payload;
  });

  done();
};

export default fp(fastifySentry);
