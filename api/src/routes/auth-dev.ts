import { FastifyPluginCallback } from 'fastify';

import { createAccessToken } from '../utils/tokens';
import {
  getPrefixedLandingPath,
  getRedirectParams,
  haveSamePath
} from '../utils/redirection';
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

    const params = getRedirectParams(req);
    let { returnTo } = params;
    const { origin, pathPrefix } = params;
    // if returnTo has a trailing slash, we need to remove it before comparing
    // it to the prefixed landing path
    if (returnTo.slice(-1) === '/') {
      returnTo = returnTo.slice(0, -1);
    }
    const redirectBase = getPrefixedLandingPath(origin, pathPrefix);
    returnTo += haveSamePath(redirectBase, returnTo) ? '/learn' : '';
    await reply.redirect(returnTo);
  });

  fastify.get('/signout', async (req, reply) => {
    void reply.clearCookie('jwt_access_token');
    void reply.clearCookie('csrf_token');
    void reply.clearCookie('_csrf');

    const { returnTo } = getRedirectParams(req);
    await reply.redirect(returnTo);
  });
  done();
};
