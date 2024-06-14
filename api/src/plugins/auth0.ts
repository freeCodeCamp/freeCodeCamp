import fastifyOauth2 from '@fastify/oauth2';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import fp from 'fastify-plugin';

import {
  API_LOCATION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  HOME_LOCATION
} from '../utils/env';

/**
 * Fastify plugin for Auth0 authentication. This uses fastify-plugin to expose
 * the auth0OAuth decorator (for easier testing), but to maintain encapsulation
 * it should be registered in a plugin. That prevents auth0OAuth from being
 * available globally.
 *
 * @param fastify - The Fastify instance.
 * @param _options - The plugin options.
 * @param done - The callback function.
 */
export const auth0Client: FastifyPluginCallbackTypebox = fp(
  (fastify, _options, done) => {
    // @ts-expect-error - when using discovery, client.auth is not allowed by the
    // code, but required by the types.
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

    // TODO: use a schema to validate the query params.
    fastify.get('/auth/auth0/callback', async function (request, reply) {
      const { error, error_description } = request.query as Record<
        string,
        string
      >;
      if (error === 'access_denied') {
        const blockedByLaw =
          error_description === 'Access denied from your location';

        if (blockedByLaw) {
          return reply.redirect(302, `${HOME_LOCATION}/blocked`);
        } else {
          return reply.redirectWithMessage(`${HOME_LOCATION}/learn`, {
            type: 'info',
            content: error_description ?? 'Authentication failed'
          });
        }
      }

      let token;
      try {
        token = (
          await this.auth0OAuth.getAccessTokenFromAuthorizationCodeFlow(request)
        ).token;
      } catch (error) {
        // This is the plugin's error message. If it changes, we will either
        // have to update the test or write custom state create/verify
        // functions.
        if (error instanceof Error && error.message === 'Invalid state') {
          fastify.log.error('Auth failed: invalid state');
        }
        return reply.redirect(302, '/signin');
      }

      // TODO: use userinfo.email to find or create a user
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userinfo = await fastify.auth0OAuth.userinfo(token);

      // TODO: implement whatever redirects and set-cookieing the api-server does
      void reply.send({ msg: 'success' });
    });

    done();
  },
  { dependencies: ['redirect-with-message'] }
);
