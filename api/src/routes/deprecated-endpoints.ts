import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { schemas } from '../schemas';

type Endpoints = [string, 'GET' | 'POST'][];

export const endpoints: Endpoints = [
  ['/refetch-user-completed-challenges', 'POST'],
  ['/certificate/verify-can-claim-cert', 'GET'],
  ['/api/github', 'GET']
];

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
