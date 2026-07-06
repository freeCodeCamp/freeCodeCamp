import crypto from 'node:crypto';
import type {
  FastifyPluginCallback,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import fp from 'fastify-plugin';

import { TPA_API_BEARER_TOKEN } from '../utils/env.js';

declare module 'fastify' {
  interface FastifyInstance {
    validateBearerToken: (
      req: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>;
  }
}

const plugin: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorate(
    'validateBearerToken',
    async function (req: FastifyRequest, reply: FastifyReply) {
      const secret = TPA_API_BEARER_TOKEN ?? '';
      if (secret.length === 0) {
        fastify.log.error('TPA_API_BEARER_TOKEN is not configured');
        await reply
          .status(500)
          .send({ error: 'Service authentication not configured' });
        return;
      }

      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        await reply.status(401).send({ error: 'Bearer token is required' });
        return;
      }

      const token = authHeader.slice(7);
      const tokenBuf = Buffer.from(token);
      const secretBuf = Buffer.from(secret);
      if (
        tokenBuf.length !== secretBuf.length ||
        !crypto.timingSafeEqual(tokenBuf, secretBuf)
      ) {
        await reply.status(401).send({ error: 'Invalid bearer token' });
        return;
      }
    }
  );

  done();
};

export default fp(plugin, { name: 'service-bearer-auth' });
