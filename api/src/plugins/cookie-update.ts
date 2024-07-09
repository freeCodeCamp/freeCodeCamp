import { FastifyPluginCallback } from 'fastify';

import type { CookieSerializeOptions } from './cookies';

type Options = { cookies: string[]; attributes: CookieSerializeOptions };

/**
 * Plugin that updates the attributes of cookies in the response, without
 * changing the value.
 *
 * @param fastify The Fastify instance.
 * @param options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param options.cookies The names of the cookies to update.
 * @param options.attributes The attributes to update the cookies with. NOTE:
 * The attributes are merged with the default values given to \@fastify/cookie.
 * @param done Callback to signal that the logic has completed.
 */
export const cookieUpdate: FastifyPluginCallback<Options> = (
  fastify,
  options,
  done
) => {
  fastify.addHook('onSend', (request, reply, _payload, next) => {
    for (const cookie of options.cookies) {
      const oldCookie = request.cookies[cookie];
      if (!oldCookie) continue;

      const unsigned = reply.unsignCookie(oldCookie);
      const raw = unsigned.valid ? unsigned.value : oldCookie;
      void reply.setCookie(cookie, raw, options.attributes);
    }
    next();
  });

  done();
};
