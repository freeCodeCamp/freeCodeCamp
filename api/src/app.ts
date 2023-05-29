import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault
} from 'fastify';
import middie from '@fastify/middie';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import MongoStore from 'connect-mongo';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import fastifyCsrfProtection from '@fastify/csrf-protection';

import fastifySentry from './plugins/fastify-sentry';
import cors from './plugins/cors';
import jwtAuthz from './plugins/fastify-jwt-authz';
import security from './plugins/security';
import sessionAuth from './plugins/session-auth';
import { settingRoutes } from './routes/settings';
import { deprecatedEndpoints } from './routes/deprecated-endpoints';
import { auth0Routes, devLoginCallback } from './routes/auth';
import { testMiddleware } from './middleware';
import prismaPlugin from './db/prisma';

import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  COOKIE_DOMAIN,
  FREECODECAMP_NODE_ENV,
  MONGOHQ_URL,
  SESSION_SECRET,
  FCC_ENABLE_SWAGGER_UI,
  API_LOCATION,
  FCC_ENABLE_DEV_LOGIN_MODE,
  SENTRY_DSN
} from './utils/env';
import { userRoutes } from './routes/user';

export type FastifyInstanceWithTypeProvider = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export const build = async (
  options: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> = {}
): Promise<FastifyInstanceWithTypeProvider> => {
  // TODO: Old API returns 403s for failed validation. We now return 400 (default) from AJV.
  // Watch when implementing in client
  const fastify = Fastify(options).withTypeProvider<TypeBoxTypeProvider>();

  void fastify.register(security);

  fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' };
  });
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);
  if (SENTRY_DSN) {
    await fastify.register(fastifySentry, { dsn: SENTRY_DSN });
  }

  await fastify.register(cors);
  await fastify.register(fastifyCookie);

  // @ts-expect-error @fastify/csrf-protection is overly restrictive, here. It
  // requires an hmacKey if getToken is provided, but that should only be a
  // requirement if the getUserInfo function is provided.
  void fastify.register(fastifyCsrfProtection, {
    // TODO: consider signing cookies. We don't on the api-server, but we could
    // as an extra layer of security.

    ///Ignore all other possible sources of CSRF
    // tokens since we know we can provide this one
    getToken: req => req.headers['csrf-token'] as string
  });

  // All routes should add a CSRF token to the response
  fastify.addHook('onRequest', (_req, reply, done) => {
    const token = reply.generateCsrf();
    // Path is necessary to ensure that only one cookie is set and it is valid
    // for all routes.
    void reply.setCookie('csrf_token', token, {
      path: '/',
      sameSite: 'strict',
      domain: COOKIE_DOMAIN,
      secure: FREECODECAMP_NODE_ENV === 'production'
    });
    done();
  });

  // @ts-expect-error - @fastify/session's types are not, yet, compatible with
  // express-session's types
  await fastify.register(fastifySession, {
    secret: SESSION_SECRET,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      secure: FREECODECAMP_NODE_ENV !== 'development'
    },
    store: MongoStore.create({
      mongoUrl: MONGOHQ_URL
    })
  });

  // Swagger plugin
  if (FCC_ENABLE_SWAGGER_UI) {
    void fastify.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'freeCodeCamp API',
          version: '1.0.0' // API version
        },
        components: {
          securitySchemes: {
            session: {
              type: 'apiKey',
              name: 'sessionId',
              in: 'cookie'
            }
          }
        },
        security: [{ session: [] }]
      }
    });
    void fastify.register(fastifySwaggerUI, {
      uiConfig: {
        // Convert csrf_token cookie to csrf-token header
        requestInterceptor: req => {
          const csrfTokenCookie = document.cookie
            .split(';')
            .find(str => str.includes('csrf_token'));
          const [_key, csrfToken] = csrfTokenCookie?.split('=') ?? [];

          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (csrfToken) req.headers['csrf-token'] = csrfToken.trim();
          return req;
        }
      }
    });
    fastify.log.info(`Swagger UI available at ${API_LOCATION}/documentation`);
  }

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: AUTH0_DOMAIN,
    audience: AUTH0_AUDIENCE
  });
  void fastify.register(jwtAuthz);
  void fastify.register(sessionAuth);

  void fastify.use('/test', testMiddleware);

  void fastify.register(prismaPlugin);

  void fastify.register(auth0Routes, { prefix: '/auth' });
  if (FCC_ENABLE_DEV_LOGIN_MODE) {
    void fastify.register(devLoginCallback, { prefix: '/auth' });
  }
  void fastify.register(settingRoutes);
  void fastify.register(userRoutes);
  void fastify.register(deprecatedEndpoints);

  return fastify;
};
