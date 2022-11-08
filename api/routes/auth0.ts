import { FastifyInstance } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await
export async function auth0Routes(fastify: FastifyInstance) {
  fastify.get('/oauth/token', async (_request, _reply) => {
    return { a: 'b' };
  });
}
