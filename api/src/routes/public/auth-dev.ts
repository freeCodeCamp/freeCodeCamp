import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';

import { createAccessToken } from '../../utils/tokens';
import {
  getPrefixedLandingPath,
  getRedirectParams,
  haveSamePath
} from '../../utils/redirection';
import { findOrCreateUser } from '../helpers/auth-helpers';

const trimTrailingSlash = (str: string) =>
  str.endsWith('/') ? str.slice(0, -1) : str;

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
  async function handleRedirects(req: FastifyRequest, reply: FastifyReply) {
    const params = getRedirectParams(req);
    const { origin, pathPrefix } = params;
    const returnTo = trimTrailingSlash(params.returnTo);
    const landingUrl = getPrefixedLandingPath(origin, pathPrefix);

    return await reply.redirect(
      haveSamePath(landingUrl, returnTo) ? `${returnTo}/learn` : returnTo
    );
  }

  fastify.get('/signin', async (req, reply) => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(fastify, email);

    reply.setAccessTokenCookie(createAccessToken(id));

    await handleRedirects(req, reply);
  });

  done();
};
