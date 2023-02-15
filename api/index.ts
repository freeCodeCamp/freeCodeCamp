import { config } from 'dotenv';
config({ path: '../.env' });
import fastifyAuth0 from 'fastify-auth0-verify';
// @ts-expect-error declaration files will be provided
import jwtAuthz from 'fastify-jwt-authz';
import Fastify from 'fastify';
import middie from '@fastify/middie';

import { testRoutes } from './routes/test';
import { dbConnector } from './db';
import { auth0Verify, testMiddleware } from './middleware';

const fastify = Fastify({
  logger: { level: process.env.NODE_ENV === 'development' ? 'debug' : 'fatal' }
});

fastify.get('/', async (_request, _reply) => {
  return { hello: 'world' };
});

const start = async () => {
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  void fastify.register(jwtAuthz);

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE
  });

  void fastify.use('/test', testMiddleware);

  // Hooks
  void fastify.addHook('preValidation', auth0Verify);

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
