import { performance } from 'node:perf_hooks';
import fastifyOauth2, { type OAuth2Namespace } from '@fastify/oauth2';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Type } from 'typebox';
import { Value } from 'typebox/value';
import fp from 'fastify-plugin';

import { isError } from 'lodash-es';
import {
  API_LOCATION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  COOKIE_DOMAIN,
  HOME_LOCATION
} from '../utils/env.js';
import { findOrCreateUser } from '../routes/helpers/auth-helpers.js';
import { createAccessToken } from '../utils/tokens.js';
import { getLoginRedirectParams } from '../utils/redirection.js';
import { clientNetInfo } from '../utils/logger.js';

declare module 'fastify' {
  interface FastifyInstance {
    auth0OAuth: OAuth2Namespace;
  }
}

const Auth0ErrorSchema = Type.Object({
  data: Type.Object({
    payload: Type.Object({
      error: Type.String()
    })
  })
});

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

    void fastify.register(function (fastify, _options, done) {
      // TODO(Post-MVP): move this into the app, so that we add this hook once for
      // all auth routes.
      fastify.addHook('onRequest', fastify.redirectIfSignedIn);

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

      fastify.get('/signin/google', async function (request, reply) {
        const returnTo = request.headers.referer ?? `${HOME_LOCATION}/learn`;
        void reply.setCookie('login-returnto', returnTo, {
          domain: COOKIE_DOMAIN,
          httpOnly: true,
          secure: true,
          signed: true,
          sameSite: 'lax'
        });

        const authorizationEndpoint =
          await this.auth0OAuth.generateAuthorizationUri(request, reply);

        const url = new URL(authorizationEndpoint);
        url.searchParams.set('connection', 'google-oauth2');

        void reply.redirect(url.toString());
      });
      done();
    });

    // TODO: use a schema to validate the query params.
    fastify.get('/auth/auth0/callback', async function (req, reply) {
      const { error, error_description } = req.query as Record<string, string>;
      if (error === 'access_denied') {
        const blockedByLaw =
          error_description === 'Access denied from your location';
        if (blockedByLaw) {
          req.log.info('Access denied due to user location');
          return reply.redirect(`${HOME_LOCATION}/blocked`);
        } else {
          req.log.info(
            { errorDescription: error_description, ...clientNetInfo(req) },
            'Authentication failed for user'
          );
          return reply.redirectWithMessage(`${HOME_LOCATION}/learn`, {
            type: 'info',
            content: error_description ?? 'Authentication failed'
          });
        }
      }

      const { returnTo, origin } = getLoginRedirectParams(req);

      let token;
      try {
        token = (
          await this.auth0OAuth.getAccessTokenFromAuthorizationCodeFlow(req)
        ).token;
      } catch (error) {
        fastify.Sentry?.metrics?.count('auth.failed', 1, {
          attributes: { stage: 'token' }
        });
        // This is the plugin's error message. If it changes, we will either
        // have to update the test or write custom state create/verify
        // functions.
        if (error instanceof Error && error.message === 'Invalid state') {
          req.log.warn(error, 'Auth failed: invalid state');
        } else if (Value.Check(Auth0ErrorSchema, error)) {
          const errorType = error.data.payload.error;
          const expectedErrorTypes = ['invalid_grant', 'access_denied'];
          if (!expectedErrorTypes.includes(errorType)) {
            fastify.Sentry?.captureException(error);
          }
          req.log.error(error, 'Auth failed: ' + errorType);
        } else {
          fastify.Sentry?.captureException(error);
          req.log.error(error, 'Failed to get access token from Auth0');
        }
        // It's important _not_ to redirect to /signin here, as that could
        // create an infinite loop.
        return reply.redirectWithMessage(returnTo, {
          type: 'danger',
          content: 'flash.generic-error'
        });
      }

      let email;
      const __userinfoStart = performance.now();
      try {
        const userinfo = (await fastify.auth0OAuth.userinfo(token)) as {
          email: string;
        };
        fastify.Sentry?.metrics?.distribution(
          'auth.login_latency_ms',
          performance.now() - __userinfoStart,
          {
            unit: 'millisecond',
            attributes: { provider: 'auth0', result: 'success' }
          }
        );
        req.log.debug(
          { hasEmail: !!userinfo.email },
          'Received Auth0 userinfo'
        );
        email = userinfo.email;
        if (typeof email !== 'string') {
          req.log.warn('Auth0 userinfo missing email');
          return reply.redirectWithMessage(returnTo, {
            type: 'danger',
            content: 'flash.no-email-in-userinfo'
          });
        }
      } catch (error) {
        fastify.Sentry?.metrics?.distribution(
          'auth.login_latency_ms',
          performance.now() - __userinfoStart,
          {
            unit: 'millisecond',
            attributes: { provider: 'auth0', result: 'failure' }
          }
        );
        fastify.Sentry?.metrics?.count('auth.failed', 1, {
          attributes: { stage: 'userinfo' }
        });
        if (isError(error) && 'innerError' in error) {
          // This is a specific error from the @fastify/oauth2 plugin.
          const innerError = error.innerError as Error;
          innerError.message = `Auth0 userinfo error: ${innerError.message}`;
          fastify.Sentry?.captureException(innerError);
          req.log.error(innerError, 'Failed to get userinfo from Auth0');
        } else {
          fastify.Sentry?.captureException(error);
          req.log.error(error, 'Failed to get userinfo from Auth0');
        }
        return reply.redirectWithMessage(returnTo, {
          type: 'danger',
          content: 'flash.generic-error'
        });
      }

      const { id } = await findOrCreateUser(fastify, email);

      reply.setAccessTokenCookie(createAccessToken(id));

      fastify.Sentry?.metrics?.count('auth.login_succeeded', 1, {
        attributes: { provider: 'auth0' }
      });

      const returnPath = new URL(returnTo).pathname;
      const returnURL = returnPath === '/' ? `${origin}/learn` : returnTo;

      void reply.redirectWithMessage(returnURL, {
        type: 'success',
        content: 'flash.signin-success'
      });
    });

    done();
  },
  // TODO(Post-MVP): remove bouncer dependency when moving redirectIfSignedIn
  // out of this plugin.
  { dependencies: ['redirect-with-message', 'bouncer'] }
);
