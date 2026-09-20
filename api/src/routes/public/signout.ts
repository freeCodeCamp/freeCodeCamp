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
      void reply.clearOurCookies();
      fastify.Sentry?.metrics?.count('auth.signed_out', 1);
      req.log.info({ audit: true }, 'User signed out');

      await reply.send({});
    }
  );
  done();
};
