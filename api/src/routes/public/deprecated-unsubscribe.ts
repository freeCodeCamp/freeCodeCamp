import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { getRedirectParams } from '../../utils/redirection';

type Endpoint = [string, 'GET' | 'POST'];

export const unsubscribeEndpoints: Endpoint[] = [
  ['/u/:email', 'GET'],
  ['/unsubscribe/:email', 'GET']
];

/**
 * Plugin for the deprecated unsubscribe endpoints. Each route returns a 302
 * redirect to the referer with a message explaining how to unsubscribe.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const unsubscribeDeprecated: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  unsubscribeEndpoints.forEach(([endpoint, method]) => {
    fastify.route({
      method,
      url: endpoint,
      handler: async (req, reply) => {
        const { origin } = getRedirectParams(req);
        void reply.redirectWithMessage(origin, {
          type: 'info',
          content:
            'We are no longer able to process this unsubscription request. ' +
            'Please go to your settings to update your email preferences'
        });
      }
    });
  });

  done();
};
