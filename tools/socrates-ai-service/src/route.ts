import type { FastifyInstance } from 'fastify';
import { requireApiKey } from './auth.js';
import { generateHint, PedagogyViolationError, type HintDeps } from './hint.js';
import { requestSchema } from './schemas.js';

export type RouteDeps = HintDeps & {
  readonly apiKey: string;
};

export const registerHintRoute = (
  fastify: FastifyInstance,
  deps: RouteDeps
): void => {
  fastify.post(
    '/hint',
    { preHandler: requireApiKey(deps.apiKey) },
    async (req, reply) => {
      const parsed = requestSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ error: 'invalid-request' });
      }
      const payload = parsed.data;

      const learnerCode = payload.userInput?.trim() ?? '';
      if (learnerCode.length === 0) {
        return reply.code(400).send({ error: 'no-attempt' });
      }

      const hasFailing = payload.hints.some(h => h.failed === true);
      if (!hasFailing) {
        return reply.code(400).send({ error: 'no-failing-test' });
      }

      try {
        const hint = await generateHint(payload, deps);
        return reply.code(200).send({ hint });
      } catch (err) {
        if (err instanceof PedagogyViolationError) {
          req.log.warn({ reason: err.reason }, 'pedagogy violation');
          return reply.code(400).send({ error: 'pedagogy-violation' });
        }
        req.log.error({ err }, 'hint generation failed');
        return reply.code(500).send({ error: 'service-unavailable' });
      }
    }
  );
};
