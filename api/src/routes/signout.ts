import type { FastifyPluginCallback } from 'fastify';

import { getRedirectParams } from '../utils/redirection';

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
  fastify.get('/signout', async (req, reply) => {
    void reply.clearCookie('jwt_access_token');
    void reply.clearCookie('csrf_token');
    void reply.clearCookie('_csrf');

    const { returnTo } = getRedirectParams(req);
    await reply.redirect(returnTo);
  });
  done();
};
