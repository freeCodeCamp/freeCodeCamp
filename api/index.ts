import { config } from 'dotenv';
config({ path: '../.env' });
import Fastify from 'fastify';
import middie from '@fastify/middie';
import { testRoutes } from './routes/test';
import { dbConnector } from './db';
import { testMiddleware } from './middleware';

const fastify = Fastify({
  logger: { level: process.env.NODE_ENV === 'development' ? 'debug' : 'fatal' }
});

fastify.get('/', async (_request, _reply) => {
  return { hello: 'world' };
});

const start = async () => {
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);

  void fastify.use('/test', testMiddleware);

  void fastify.register(dbConnector);
  void fastify.register(testRoutes);

  try {
    const port = Number(process.env.PORT) || 3000;
    fastify.log.info(`Starting server on port ${port}`);
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
