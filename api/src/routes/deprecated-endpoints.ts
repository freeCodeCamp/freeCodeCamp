import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';

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
      schema: {
        response: {
          410: Type.Object({
            message: Type.Object({
              type: Type.Literal('info'),
              message: Type.Literal(
                'Please reload the app, this feature is no longer available.'
              )
            })
          })
        }
      },
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
