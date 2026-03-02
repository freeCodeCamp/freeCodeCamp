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
      schema: schemas.askSocrates,
      errorHandler(error, req, reply) {
        if (error.validation) {
          void reply.status(400).send({
            error: 'Please write some code before asking Socrates for a hint.',
            type: 'info'
          });
        } else {
          fastify.errorHandler(error, req, reply);
        }
      }
    },
    async (req, reply) => {
      if (!req.user?.socrates) {
        return reply.status(403).send({
          error: 'You do not have access to Socrates.',
          type: 'danger'
        });
      }

      try {
        const response = await fetch(SOCRATES_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': SOCRATES_API_KEY
          },
          body: JSON.stringify({
            description: req.body.description,
            userInput: req.body.userInput,
            seed: req.body.seed,
            hints: req.body.hints,
            userId: req.user.id
          })
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

          if (response.status === 429) {
            return reply.status(429).send({
              error:
                'You have reached the hint limit. Please wait a moment before trying again.',
              type: 'info'
            });
          }

          if (response.status === 400) {
            let upstreamMessage: string | undefined;
            try {
              const parsed = responseText
                ? (JSON.parse(responseText) as { error?: string })
                : null;
              upstreamMessage = parsed?.error;
            } catch {
              // ignore parse errors
            }
            return reply.status(400).send({
              error:
                upstreamMessage ||
                'Socrates was unable to generate a hint. Please try again.',
              type: 'info'
            });
          }

          return reply.status(500).send({
            error:
              'Socrates is temporarily unavailable. Please try again later.',
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
            error:
              'Socrates is temporarily unavailable. Please try again later.',
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
            error:
              'Socrates is temporarily unavailable. Please try again later.',
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
          error: 'Socrates is temporarily unavailable. Please try again later.',
          type: 'danger'
        });
      }
    }
  );
  done();
};
