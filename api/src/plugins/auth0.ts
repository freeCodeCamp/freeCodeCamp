import fastifyOauth2, { type OAuth2Namespace } from '@fastify/oauth2';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import fp from 'fastify-plugin';

import {
  API_LOCATION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  COOKIE_DOMAIN,
  HOME_LOCATION
} from '../utils/env';
import { findOrCreateUser } from '../routes/helpers/auth-helpers';
import { createAccessToken } from '../utils/tokens';
import {
  getLoginRedirectParams,
  getPrefixedLandingPath
} from '../utils/redirection';

declare module 'fastify' {
  interface FastifyInstance {
    auth0OAuth: OAuth2Namespace;
  }
}

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
    void fastify.register(fastifyOauth2, {
      name: 'auth0OAuth',
      scope: ['openid', 'email', 'profile'],
      credentials: {
        client: {
          id: AUTH0_CLIENT_ID,
          secret: AUTH0_CLIENT_SECRET
        }
      },
      discovery: { issuer: `https://${AUTH0_DOMAIN}` },
      callbackUri: `${API_LOCATION}/auth/auth0/callback`,
      cookie: {
        // It's important not to sign the cookie, since the OAuth2 plugin will
        // not unsign it.
        signed: false
      }
    });

    fastify.get('/signin', async function (request, reply) {
      const returnTo = request.headers.referer ?? `${HOME_LOCATION}/learn`;
      void reply.setCookie('login-returnto', returnTo, {
        domain: COOKIE_DOMAIN,
        httpOnly: true,
        secure: true,
        signed: true,
        sameSite: 'lax'
      });

      const redirectUrl = await this.auth0OAuth.generateAuthorizationUri(
        request,
        reply
      );
      void reply.redirect(redirectUrl);
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
          return reply.redirect(`${HOME_LOCATION}/blocked`);
        } else {
          return reply.redirectWithMessage(`${HOME_LOCATION}/learn`, {
            type: 'info',
            content: error_description ?? 'Authentication failed'
          });
        }
      }

      const { returnTo, pathPrefix, origin } = getLoginRedirectParams(request);
      const redirectBase = getPrefixedLandingPath(origin, pathPrefix);

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
        } else {
          fastify.log.error('Auth failed', error);
          fastify.Sentry.captureException(error);
        }
        // It's important _not_ to redirect to /signin here, as that could
        // create an infinite loop.
        return reply.redirectWithMessage(returnTo, {
          type: 'danger',
          content: 'flash.generic-error'
        });
      }

      let email;
      try {
        const userinfo = (await fastify.auth0OAuth.userinfo(token)) as {
          email: string;
        };
        email = userinfo.email;
        if (typeof email !== 'string') throw Error('Invalid userinfo response');
      } catch (error) {
        fastify.log.error('Auth failed', error);
        fastify.Sentry.captureException(error);
        return reply.redirect('/signin');
      }

      const { id, acceptedPrivacyTerms } = await findOrCreateUser(
        fastify,
        email
      );

      reply.setAccessTokenCookie(createAccessToken(id));

      if (acceptedPrivacyTerms) {
        void reply.redirectWithMessage(returnTo, {
          type: 'success',
          content: 'flash.signin-success'
        });
      } else {
        void reply.redirectWithMessage(`${redirectBase}/email-sign-up`, {
          type: 'success',
          content: 'flash.signin-success'
        });
      }
    });

    done();
  },
  { dependencies: ['redirect-with-message'] }
);
