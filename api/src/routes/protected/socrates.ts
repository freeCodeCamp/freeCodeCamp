import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas.js';
import { SOCRATES_API_KEY, SOCRATES_ENDPOINT } from '../../utils/env.js';
import { mapErr } from '../../utils/index.js';
import { Prisma } from '@prisma/client';

const DAILY_LIMITS = { donor: 10, nonDonor: 3 } as const;

function getDailyLimit(isDonating: boolean): number {
  return isDonating ? DAILY_LIMITS.donor : DAILY_LIMITS.nonDonor;
}

const NETWORK_ERROR_CODES = new Set([
  'ENOTFOUND',
  'ECONNREFUSED',
  'ECONNRESET',
  'ETIMEDOUT',
  'EAI_AGAIN'
]);

function isFetchNetworkError(error: unknown): boolean {
  if (!(error instanceof TypeError)) {
    return false;
  }
  const cause = (error as { cause?: unknown }).cause;
  const code =
    cause && typeof cause === 'object' && 'code' in cause
      ? (cause as { code?: unknown }).code
      : undefined;
  if (typeof code === 'string') {
    return code.startsWith('UND_ERR_') || NETWORK_ERROR_CODES.has(code);
  }
  return error.message === 'fetch failed';
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
      const donorStatus = req.user.isDonating ? 'donor' : 'non-donor';
      const now = new Date();
      const todayUTC = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
      );
      const userId = req.user.id;

      const res = await mapErr(
        fastify.prisma.$runCommandRaw({
          findAndModify: 'SocratesUsage',
          query: {
            userId: { $oid: userId },
            date: { $date: todayUTC.toISOString() },
            count: { $lt: limit }
          },
          update: { $inc: { count: 1 } },
          upsert: true,
          new: true
        })
      );

      if (res.hasError) {
        const error = res.error;
        // Doc exists but is at the limit.
        // - query does not match
        // - upsert tries insert
        // - unique index rejects
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2010' &&
          /11000|DuplicateKey/.test(error.message)
        ) {
          fastify.Sentry?.metrics?.count('socrates.rate_limit_hit', 1, {
            attributes: { source: 'local', donorStatus }
          });
          return reply.status(429).send({
            error: 'socrates-daily-limit',
            type: 'info',
            attempts: limit,
            limit
          });
        }

        // Bad error running query.
        throw error;
      }

      type FindAndModifyResult = { value: { count: number } };
      const data = res.data as FindAndModifyResult;

      const attempts = data.value.count;

      const rollbackUsage = async () => {
        await fastify.prisma.socratesUsage.update({
          where: {
            userId_date: { userId: req.user!.id, date: todayUTC }
          },
          data: { count: { decrement: 1 } }
        });
      };

      const upstreamFetchStart = performance.now();

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

        fastify.Sentry?.metrics?.distribution(
          'socrates.upstream_latency_ms',
          performance.now() - upstreamFetchStart,
          { unit: 'millisecond', attributes: { result: 'success' } }
        );

        const responseText = await response.text();

        if (!response.ok) {
          req.log.error(
            {
              status: response.status,
              upstreamBody: responseText.slice(0, 500)
            },
            'Socrates API returned an error response.'
          );

          await rollbackUsage();

          if (response.status === 429) {
            fastify.Sentry?.metrics?.count('socrates.rate_limit_hit', 1, {
              attributes: { source: 'upstream', donorStatus }
            });
            return reply.status(429).send({
              error: 'socrates-rate-limit',
              type: 'info',
              attempts: attempts - 1,
              limit
            });
          }

          if (response.status === 400) {
            fastify.Sentry?.metrics?.count('socrates.upstream_call_failed', 1, {
              attributes: { reason: 'bad_status' }
            });
            return reply.status(400).send({
              error: 'socrates-unable-to-generate',
              type: 'info',
              attempts: attempts - 1,
              limit
            });
          }

          fastify.Sentry?.captureException(
            new Error(`Socrates API returned status ${response.status}`)
          );
          fastify.Sentry?.metrics?.count('socrates.upstream_call_failed', 1, {
            attributes: { reason: 'bad_status' }
          });
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
          fastify.Sentry?.captureException(error);
          fastify.Sentry?.metrics?.count('socrates.upstream_call_failed', 1, {
            attributes: { reason: 'invalid_response' }
          });
          req.log.error(
            { err: error },
            'Failed to parse Socrates API response.'
          );
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
          fastify.Sentry?.captureException(
            new Error('Socrates API did not return a hint')
          );
          fastify.Sentry?.metrics?.count('socrates.upstream_call_failed', 1, {
            attributes: { reason: 'missing_hint' }
          });
          req.log.error(
            {
              payloadType: payload === null ? 'null' : typeof payload,
              hintType: typeof (payload as { hint?: unknown } | null)?.hint
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

        fastify.Sentry?.metrics?.count('socrates.hint_granted', 1, {
          attributes: { donorStatus }
        });
        return { hint, attempts, limit } as const;
      } catch (error) {
        fastify.Sentry?.metrics?.distribution(
          'socrates.upstream_latency_ms',
          performance.now() - upstreamFetchStart,
          { unit: 'millisecond', attributes: { result: 'failure' } }
        );
        if (!isFetchNetworkError(error)) {
          fastify.Sentry?.captureException(error);
        }
        fastify.Sentry?.metrics?.count('socrates.upstream_call_failed', 1, {
          attributes: {
            reason: isFetchNetworkError(error) ? 'network' : 'exception'
          }
        });
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
