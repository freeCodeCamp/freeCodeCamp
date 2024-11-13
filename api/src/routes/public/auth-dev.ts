import type { FastifyPluginCallback } from 'fastify';

import { devAuth } from '../../plugins/auth-dev';

/**
 * Route handler for development login.
 *
 * @deprecated
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const devAuthRoutes: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  void fastify.register(devAuth);
  done();
};
