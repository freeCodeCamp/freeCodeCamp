import fastifyCookie, { type UnsignResult } from '@fastify/cookie';
import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import {
  COOKIE_DOMAIN,
  COOKIE_SECRET,
  FREECODECAMP_NODE_ENV
} from '../utils/env';

export { type CookieSerializeOptions } from '@fastify/cookie';

declare module 'fastify' {
  interface FastifyReply {
    clearOurCookies: () => void;
  }
}

/**
 * Signs a cookie value by prefixing it with "s:" and using the COOKIE_SECRET.
 *
 * @param value The value to sign.
 * @returns The signed cookie value.
 */
export const sign = (value: string) =>
  's:' + fastifyCookie.sign(value, COOKIE_SECRET);

/**
 * Unsigns a cookie value by removing the "s:" prefix and using the COOKIE_SECRET.
 *
 * @param rawValue The signed cookie value.
 * @returns The unsigned cookie value.
 */
export const unsign = (rawValue: string): UnsignResult => {
  const prefix = rawValue.slice(0, 2);
  if (prefix !== 's:') return { valid: false, renew: false, value: null };

  const value = rawValue.slice(2);
  return fastifyCookie.unsign(value, COOKIE_SECRET);
};

/**
 * Compatibility plugin for using cookies signed by express. By prefixing with
 * "s:" and removing it when unsigning, we can continue to use the same cookies
 * in Fastify.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const cookies: FastifyPluginCallback = (fastify, _options, done) => {
  void fastify.register(fastifyCookie, {
    secret: {
      sign,
      unsign
    },
    parseOptions: {
      domain: COOKIE_DOMAIN,
      httpOnly: FREECODECAMP_NODE_ENV !== 'development',
      // Path is necessary to ensure that only one cookie is set and it is valid
      // for all routes.
      path: '/',
      sameSite: 'lax',
      secure: FREECODECAMP_NODE_ENV !== 'development',
      signed: true
    }
  });

  void fastify.decorateReply('clearOurCookies', function () {
    void this.clearCookie('jwt_access_token');
    void this.clearCookie('_csrf');
    void this.clearCookie('csrf_token');
  });

  done();
};

export default fp(cookies, { name: 'cookies' });
