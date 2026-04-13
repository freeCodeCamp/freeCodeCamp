import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';
import { SOCRATES_API_KEY, SOCRATES_ENDPOINT } from '../../utils/env.js';

const DAILY_LIMITS = { donor: 10, nonDonor: 3 } as const;

function getDailyLimit(isDonating: boolean): number {
  return isDonating ? DAILY_LIMITS.donor : DAILY_LIMITS.nonDonor;
}

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
            error: 'socrates-invalid-request',
            type: 'info',
            attempts: 0,
            limit: 0
          });
        } else {
          fastify.errorHandler(error, req, reply);
        }
      }
    },
    async (req, reply) => {
      if (!req.user || req.user.socrates === false) {
        return reply.status(403).send({
          error: 'socrates-no-access',
          type: 'danger',
          attempts: 0,
          limit: 0
        });
      }

      const limit = getDailyLimit(req.user.isDonating);
      const now = new Date();
      const todayUTC = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
      );

      const existing = await fastify.prisma.socratesUsage.findUnique({
        where: {
          userId_date: { userId: req.user.id, date: todayUTC }
        }
      });

      if (existing && existing.count >= limit) {
        return reply.status(429).send({
          error: 'socrates-daily-limit',
          type: 'info',
          attempts: limit,
          limit
        });
      }

      const usage = await fastify.prisma.socratesUsage.upsert({
        where: {
          userId_date: { userId: req.user.id, date: todayUTC }
        },
        create: {
          userId: req.user.id,
          date: todayUTC,
          count: 1
        },
        update: {
          count: { increment: 1 }
        }
      });

      const attempts = usage.count;

      const rollbackUsage = async () => {
        await fastify.prisma.socratesUsage.update({
          where: {
            userId_date: { userId: req.user!.id, date: todayUTC }
          },
          data: { count: { decrement: 1 } }
        });
      };

      try {
        const response = await fetch(`${SOCRATES_ENDPOINT}/hint`, {
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

          await rollbackUsage();

          if (response.status === 429) {
            return reply.status(429).send({
              error: 'socrates-rate-limit',
              type: 'info',
              attempts: attempts - 1,
              limit
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
              error: upstreamMessage || 'socrates-unable-to-generate',
              type: 'info',
              attempts: attempts - 1,
              limit
            });
          }

          return reply.status(500).send({
            error: 'socrates-unavailable',
            type: 'danger',
            attempts: attempts - 1,
            limit
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
          await rollbackUsage();
          return reply.status(500).send({
            error: 'socrates-unavailable',
            type: 'danger',
            attempts: attempts - 1,
            limit
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
          await rollbackUsage();
          return reply.status(500).send({
            error: 'socrates-unavailable',
            type: 'danger',
            attempts: attempts - 1,
            limit
          });
        }

        const { hint } = payload as { hint: string };

        return { hint, attempts, limit } as const;
      } catch (error) {
        req.log.error(
          { err: error },
          'Failed to fetch hint from Socrates API.'
        );
        await rollbackUsage();
        return reply.status(500).send({
          error: 'socrates-unavailable',
          type: 'danger',
          attempts: attempts - 1,
          limit
        });
      }
    }
  );
  done();
};
