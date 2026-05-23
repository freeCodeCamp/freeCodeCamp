import type { FastifyPluginCallback } from 'fastify';

import { signout } from '../../schemas.js';

/**
 * Route handler for signing out.
 */
export const signoutRoute: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/signout',
    {
      schema: signout
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });

      // Clear auth/session cookies
      void reply.clearOurCookies();

      logger.info('User signed out');

      // Redirect with proper logout flash message
      return reply.redirectWithMessage('http://localhost:8000/', {
        type: 'success',
        content: 'flash.signout-success'
      });
    }
  );

  done();
};
