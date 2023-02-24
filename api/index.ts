import { config } from 'dotenv';
config({ path: '../.env' });
import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify from 'fastify';
import middie from '@fastify/middie';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import MongoStore from 'connect-mongo';

import jwtAuthz from './plugins/fastify-jwt-authz';
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
  await fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET
  });
  await fastify.register(fastifySession, {
    secret: process.env.SESSION_SECRET ?? 'a_session_secret',
    store: MongoStore.create({
      mongoUrl: process.env.MONGOHQ_URL
    })
  });

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE
  });
  void fastify.register(jwtAuthz);

  void fastify.use('/test', testMiddleware);

  // Hooks
  void fastify.addHook(
    'onRequest',
    async (req, res) => await fastify.authenticate(req, res)
  );

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
