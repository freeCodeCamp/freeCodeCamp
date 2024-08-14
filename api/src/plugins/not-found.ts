import type { FastifyPluginCallback } from 'fastify';

import fp from 'fastify-plugin';
import accepts from '@fastify/accepts';

import { getRedirectParams } from '../utils/redirection';

/**
 * Plugin for handling missing endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const fourOhFour: FastifyPluginCallback = (fastify, _options, done) => {
  void fastify.register(accepts);

  // If the request accepts JSON and does not specifically prefer text/html,
  // this will return a 404 JSON response. Everything else will be redirected.
  fastify.setNotFoundHandler((request, reply) => {
    const accepted = request.accepts().type(['json', 'html']);

    if (accepted == 'json') {
      void reply.code(404).send({ error: 'path not found' });
    } else {
      const { origin } = getRedirectParams(request);
      void reply.status(302);
      void reply.redirectWithMessage(`${origin}/404`, {
        type: 'danger',
        content: `We couldn't find path ${request.url}`
      });
    }
  });
  done();
};

export default fp(fourOhFour, { dependencies: ['redirect-with-message'] });
