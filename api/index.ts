import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify from 'fastify';
import middie from '@fastify/middie';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import MongoStore from 'connect-mongo';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import jwtAuthz from './plugins/fastify-jwt-authz';
import sessionAuth from './plugins/session-auth';
import { testRoutes } from './routes/test';
import { auth0Routes } from './routes/auth0';
import { testValidatedRoutes } from './routes/validation-test';
import { testMiddleware } from './middleware';
import prismaPlugin from './db/prisma';

import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  NODE_ENV,
  PORT,
  MONGOHQ_URL,
  SESSION_SECRET
} from './utils/env';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    },
    level: 'debug'
  },
  // TODO: is this the right level for production or should we use 'error'?
  production: { level: 'fatal' },
  test: false
};

const fastify = Fastify({
  logger: envToLogger[NODE_ENV]
}).withTypeProvider<TypeBoxTypeProvider>();

export type FastifyInstanceWithTypeProvider = typeof fastify;

fastify.get('/', async (_request, _reply) => {
  return { hello: 'world' };
});

const start = async () => {
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);
  await fastify.register(fastifyCookie);
  // @ts-expect-error - @fastify/session's types are not, yet, compatible with
  // express-session's types
  await fastify.register(fastifySession, {
    secret: SESSION_SECRET,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      secure: NODE_ENV !== 'development'
    },
    store: MongoStore.create({
      mongoUrl: MONGOHQ_URL
    })
  });

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: AUTH0_DOMAIN,
    audience: AUTH0_AUDIENCE
  });
  void fastify.register(jwtAuthz);
  void fastify.register(sessionAuth);

  void fastify.use('/test', testMiddleware);

  void fastify.register(prismaPlugin);

  void fastify.register(testRoutes);
  void fastify.register(auth0Routes, { prefix: '/auth0' });
  void fastify.register(testValidatedRoutes);

  try {
    const port = Number(PORT);
    fastify.log.info(`Starting server on port ${port}`);
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
