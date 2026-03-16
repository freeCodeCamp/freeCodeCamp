import type { FastifyPluginCallback } from 'fastify';

import { signout } from '../../schemas.js';

/**
 * Route handler for signing out.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const signoutRoute: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/signout',
    {
      schema: signout
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });

      void reply.clearOurCookies();
      logger.info('User signed out');

      await reply.send({});
    }
  );
  done();
};
