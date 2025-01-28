import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas';

type Endpoints = [string, 'GET' | 'POST'][];

export const endpoints: Endpoints = [
  ['/refetch-user-completed-challenges', 'POST'],
  ['/certificate/verify-can-claim-cert', 'GET'],
  ['/api/github', 'GET'],
  ['/account', 'GET']
];

/**
 * Plugin for the deprecated endpoints. Instantiates a Fastify route for each
 * endpoint, returning a 410 status code and a message indicating that the user
 * should reload the app.
 *
 * These endpoints remain active until we can confirm that no requests are being
 * made to them.
 *
 * @param fastify The Fastify instance.
 * @param _options Fastify options I guess?
 * @param done Callback to signal that the logic has completed.
 */
export const deprecatedEndpoints: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  endpoints.forEach(([endpoint, method]) => {
    fastify.route({
      method,
      url: endpoint,
      schema: schemas.deprecatedEndpoints,
      handler: async (_req, reply) => {
        void reply.status(410);
        return {
          message: {
            type: 'info',
            message:
              'Please reload the app, this feature is no longer available.'
          }
        } as const;
      }
    });
  });

  done();
};
