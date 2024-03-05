import { FastifyPluginCallback } from 'fastify';

import { createAccessToken } from '../utils/tokens';
import { HOME_LOCATION } from '../utils/env';
import { findOrCreateUser } from './helpers/auth-helpers';

/**
 * Route handler for development login.
 *
 * @deprecated
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const devAuthRoutes: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  fastify.get('/signin', async (req, reply) => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(fastify, email);

    reply.setAccessTokenCookie(createAccessToken(id));
    const referer = req.validateReferrer();
    await reply.redirect(referer ?? new URL('learn', HOME_LOCATION).href);
  });

  fastify.get('/signout', async (req, reply) => {
    void reply.clearCookie('jwt_access_token');
    void reply.clearCookie('csrf_token');
    void reply.clearCookie('_csrf');

    const referer = req.validateReferrer();
    await reply.redirect(referer ?? HOME_LOCATION);
  });
  done();
};
