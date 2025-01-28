import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import isEmail from 'validator/lib/isEmail';

import { AUTH0_DOMAIN } from '../../utils/env';
import { auth0Client } from '../../plugins/auth0';
import { createAccessToken } from '../../utils/tokens';
import { findOrCreateUser } from '../helpers/auth-helpers';

const getEmailFromAuth0 = async (
  req: FastifyRequest
): Promise<string | null> => {
  const auth0Res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  if (!auth0Res.ok) return null;

  // For now, we assume the response is a JSON object. If not, we can't proceed
  // and the only safe thing to do is to throw.
  const { email } = (await auth0Res.json()) as { email?: string };
  return typeof email === 'string' ? email : null;
};

/**
 * Route handler for Mobile authentication.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 *
 */
export const mobileAuth0Routes: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  // TODO(Post-MVP): move this into the app, so that we add this hook once for
  // all auth routes.
  fastify.addHook('onRequest', fastify.redirectIfSignedIn);

  fastify.get('/mobile-login', async (req, reply) => {
    const email = await getEmailFromAuth0(req);

    if (!email) {
      return reply.status(401).send({
        message: 'We could not log you in, please try again in a moment.',
        type: 'danger'
      });
    }
    if (!isEmail(email)) {
      return reply.status(400).send({
        message: 'The email is incorrectly formatted',
        type: 'danger'
      });
    }

    const { id } = await findOrCreateUser(fastify, email);

    reply.setAccessTokenCookie(createAccessToken(id));
  });

  done();
};

/**
 * Route handler for authentication routes.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const authRoutes: FastifyPluginCallback = (fastify, _options, done) => {
  // All routes are registered by the auth0 plugin, but we need an extra plugin
  // (this one) to encapsulate the auth0 decorators. Otherwise auth0OAuth will
  // be available globally.
  void fastify.register(auth0Client);
  done();
};
