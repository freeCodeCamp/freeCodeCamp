import fastifyCookie from '@fastify/cookie';
import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { COOKIE_SECRET } from '../utils/env';

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
      sign: value => {
        return 's:' + fastifyCookie.sign(value, COOKIE_SECRET);
      },
      unsign: rawValue => {
        const prefix = rawValue.slice(0, 2);
        if (prefix !== 's:')
          throw Error('Signed cookie values must be prefixed with "s:"');
        const value = rawValue.slice(2);
        return fastifyCookie.unsign(value, COOKIE_SECRET);
      }
    }
  });

  done();
};

export default fp(cookies);
