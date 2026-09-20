import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { DEPLOYMENT_VERSION } from '../../utils/env.js';

/**
 * Plugin for the health check endpoint.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const statusRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get('/status/ping', async (req, _res) => {
    req.log.debug({ what: 'pong' }, 'Replying to ping');
    return { msg: 'pong' };
  });

  fastify.get('/status/version', async (req, _res) => {
    req.log.debug('Sending version');
    return { version: DEPLOYMENT_VERSION };
  });

  fastify.get('/status/ready', async (req, reply) => {
    try {
      await fastify.prisma.$runCommandRaw({ ping: 1 });
      return { status: 'ready' };
    } catch (err) {
      fastify.Sentry?.metrics?.count('readiness.check_failed', 1);
      req.log.error(err, 'Readiness check failed: database unreachable');
      return reply.code(503).send({ status: 'unavailable' });
    }
  });

  done();
};
