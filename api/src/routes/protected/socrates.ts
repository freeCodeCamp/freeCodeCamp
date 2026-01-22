import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';
import { SOCRATES_API_KEY, SOCRATES_ENDPOINT } from '../../utils/env.js';

/**
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const socratesRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // Socrates plugin
  fastify.put(
    '/socrates/get-hint',
    {
      schema: schemas.askSocrates
    },
    async (req, reply) => {
      try {
        const response = await fetch(SOCRATES_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': SOCRATES_API_KEY
          },
          body: JSON.stringify(req.body)
        });

        const responseText = await response.text();

        if (!response.ok) {
          req.log.error(
            {
              status: response.status,
              response: responseText || undefined
            },
            'Socrates API returned an error response.'
          );

          if (response.status === 400 || response.status === 429) {
            return reply.status(400).send({
              error: 'Too many requests.',
              type: 'info'
            });
          }

          return reply.status(500).send({
            error: 'Something went wrong.',
            type: 'danger'
          });
        }

        let payload: unknown;
        try {
          payload = responseText ? JSON.parse(responseText) : null;
        } catch (error) {
          req.log.error({
            err: error,
            response: responseText || undefined
          });
          return reply.status(500).send({
            error: 'Something went wrong.',
            type: 'danger'
          });
        }

        if (
          !payload ||
          typeof payload !== 'object' ||
          typeof (payload as { hint?: unknown }).hint !== 'string'
        ) {
          req.log.error(
            {
              response: payload
            },
            'Socrates API did not return a hint.'
          );
          return reply.status(500).send({
            error: 'Something went wrong.',
            type: 'danger'
          });
        }

        const { hint } = payload as { hint: string };

        return { hint } as const;
      } catch (error) {
        req.log.error(
          { err: error },
          'Failed to fetch hint from Socrates API.'
        );
        return reply.status(500).send({
          error: 'Something went wrong.',
          type: 'danger'
        });
      }
    }
  );
  done();
};
