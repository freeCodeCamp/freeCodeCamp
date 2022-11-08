import { FastifyInstance } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await
export async function testRoutes(fastify: FastifyInstance) {
  const collection = fastify?.mongo?.db?.collection('user');

  fastify.get('/test', async (_request, _reply) => {
    if (!collection) {
      return { error: 'No collection' };
    }
    const user = await collection?.findOne({ email: 'bar@bar.com' });
    return { user };
  });
}
