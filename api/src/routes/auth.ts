import { FastifyPluginCallback, FastifyRequest } from 'fastify';
// TODO(Post-MVP): use fastify-rate-limit instead of express-rate-limit
import rateLimit from 'express-rate-limit';
// @ts-expect-error - no types
import MongoStoreRL from 'rate-limit-mongo';

import { AUTH0_DOMAIN, MONGOHQ_URL } from '../utils/env';
import { auth0Client } from '../plugins/auth0';
import { findOrCreateUser } from './helpers/auth-helpers';

const getEmailFromAuth0 = async (req: FastifyRequest) => {
  const auth0Res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  if (!auth0Res.ok) {
    req.log.error(auth0Res);
    throw new Error('Invalid Auth0 Access Token');
  }

  const { email } = (await auth0Res.json()) as { email: string };
  return email;
};

/**
 * Route handler for Mobile authentication.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const mobileAuth0Routes: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  // Rate limit for mobile login
  // 10 requests per 15 minute windows
  void fastify.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 10,
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: req => {
        return (req.headers['x-forwarded-for'] as string) || 'localhost';
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      store: new MongoStoreRL({
        collectionName: 'UserRateLimit',
        uri: MONGOHQ_URL,
        expireTimeMs: 15 * 60 * 1000
      })
    })
  );

  fastify.get('/mobile-login', async req => {
    const email = await getEmailFromAuth0(req);

    await findOrCreateUser(fastify, email);
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
