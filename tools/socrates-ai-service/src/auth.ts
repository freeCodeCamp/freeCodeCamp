import { timingSafeEqual } from 'node:crypto';
import type { FastifyReply, FastifyRequest, preHandlerHookHandler } from 'fastify';

const HEADER = 'x-api-key';

const headerToString = (raw: string | string[] | undefined): string | null => {
  if (typeof raw === 'string') return raw;
  if (Array.isArray(raw)) {
    const first = raw[0];
    return typeof first === 'string' ? first : null;
  }
  return null;
};

const equalsConstantTime = (a: string, b: string): boolean => {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
};

export const requireApiKey = (expected: string): preHandlerHookHandler => {
  return async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const provided = headerToString(req.headers[HEADER]);
    if (!provided || !equalsConstantTime(provided, expected)) {
      await reply.code(401).send({ error: 'unauthorized' });
    }
  };
};
