import { FastifyPluginCallback, FastifyRequest } from 'fastify';
import fastifyOauth2, { OAuth2Namespace } from '@fastify/oauth2';
import rateLimit from 'express-rate-limit';
// @ts-expect-error - no types
import MongoStoreRL from 'rate-limit-mongo';

import {
  API_LOCATION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  MONGOHQ_URL
} from '../utils/env';
import { findOrCreateUser } from './helpers/auth-helpers';

declare module 'fastify' {
  interface FastifyInstance {
    auth0OAuth: OAuth2Namespace;
  }
}

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
  void fastify.register(fastifyOauth2, {
    name: 'auth0OAuth',
    scope: ['openid', 'email', 'profile'], // TODO: check what scopes the api-server uses
    credentials: {
      client: {
        id: AUTH0_CLIENT_ID,
        secret: AUTH0_CLIENT_SECRET
      }
    },
    startRedirectPath: '/signin',
    discovery: { issuer: `https://${AUTH0_DOMAIN}` },
    callbackUri: `${API_LOCATION}/auth/auth0/callback`
  });

  fastify.get('/auth/auth0/callback', async function (request, reply) {
    const { token } =
      await this.auth0OAuth.getAccessTokenFromAuthorizationCodeFlow(request);

    // TODO: use userinfo.email to find or create a user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userinfo = await fastify.auth0OAuth.userinfo(token);

    // TODO: implement whatever redirects and set-cookieing the api-server does
    void reply.send({ msg: 'success' });
  });
  done();
};
