import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import type { FastifyReply, FastifyRequest } from 'fastify';
import {
  getRedirectParams,
  getPrefixedLandingPath,
  haveSamePath
} from '../utils/redirection';
import { findOrCreateUser } from '../routes/helpers/auth-helpers';
import { createAccessToken } from '../utils/tokens';

const trimTrailingSlash = (str: string) =>
  str.endsWith('/') ? str.slice(0, -1) : str;

async function handleRedirects(req: FastifyRequest, reply: FastifyReply) {
  const params = getRedirectParams(req);
  const { origin, pathPrefix } = params;
  const returnTo = trimTrailingSlash(params.returnTo);
  const landingUrl = getPrefixedLandingPath(origin, pathPrefix);

  return await reply.redirect(
    haveSamePath(landingUrl, returnTo) ? `${returnTo}/learn` : returnTo
  );
}

/**
 * Fastify plugin for dev authentication.
 *
 * @param fastify - The Fastify instance.
 * @param _options - The plugin options.
 * @param done - The callback function.
 */
export const devAuth: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get('/signin', async (req, reply) => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(fastify, email);

    reply.setAccessTokenCookie(createAccessToken(id));

    await handleRedirects(req, reply);
  });

  done();
};
