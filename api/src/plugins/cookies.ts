import fastifyCookie from '@fastify/cookie';
import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { COOKIE_SECRET } from '../utils/env';

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
export const unsign = (rawValue: string) => {
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
    }
  });

  done();
};

export default fp(cookies);
