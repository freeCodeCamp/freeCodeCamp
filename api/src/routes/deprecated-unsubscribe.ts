import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { schemas } from '../schemas';

type Endpoint = [string, 'GET' | 'POST'];

export const unsubscribeEndpoints: Endpoint[] = [
  ['/u/:email', 'GET'],
  ['/unsubscribe/:email', 'GET']
];

export const unsubscribeDeprecated: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  unsubscribeEndpoints.forEach(([endpoint, method]) => {
    fastify.route({
      method,
      url: endpoint,
      schema: schemas.subscriptionDeprecated,
      handler: async (_req, reply) => {
        void reply.status(410);
        return {
          message: {
            type: 'info',
            message:
              'We are no longer able to process this unsubscription request. Please go to your settings to update your email preferences'
          }
        } as const;
      }
    });
  });

  done();
};
