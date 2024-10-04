import type { FastifyPluginCallback } from 'fastify';
import fastifyCsrfProtection from '@fastify/csrf-protection';

import fp from 'fastify-plugin';

export const CSRF_COOKIE = 'csrf_token';
export const CSRF_HEADER = 'csrf-token';
export const CSRF_SECRET_COOKIE = '_csrf';

/**
 * Plugin for preventing CSRF attacks.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const csrf: FastifyPluginCallback = (fastify, _options, done) => {
  void fastify.register(fastifyCsrfProtection, {
    // TODO: consider signing cookies. We don't on the api-server, but we could
    // as an extra layer of security.

    ///Ignore all other possible sources of CSRF
    // tokens since we know we can provide this one
    getToken: req => req.headers[CSRF_HEADER] as string,
    cookieOpts: { signed: false, sameSite: 'strict' }
  });

  // All routes except signout should add a CSRF token to the response
  fastify.addHook('onRequest', (_req, reply, done) => {
    const isSignout = _req.url === '/signout' || _req.url === '/signout/';

    if (!isSignout) {
      const token = reply.generateCsrf();
      void reply.setCookie(CSRF_COOKIE, token, {
        sameSite: 'strict',
        signed: false,
        // it needs to be read by the client, so that it can be sent in the
        // header of the next request:
        httpOnly: false
      });
    }
    done();
  });

  done();
};

export default fp(csrf, { dependencies: ['cookies'] });
