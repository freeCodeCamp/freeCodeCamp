import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

export const statusRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get('/status/ping', async (_req, _reply) => {
    return { msg: 'pong' };
  });

  done();
};
