import fastifyCookie from '@fastify/cookie';
import fastifyCsrfProtection from '@fastify/csrf-protection';
import express from '@fastify/express';
import fastifySession from '@fastify/session';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastifySentry from '@immobiliarelabs/fastify-sentry';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import MongoStore from 'connect-mongo';
import uriResolver from 'fast-uri';
import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault
} from 'fastify';

import prismaPlugin from './db/prisma';
import cors from './plugins/cors';
import { NodemailerProvider } from './plugins/mail-providers/nodemailer';
import { SESProvider } from './plugins/mail-providers/ses';
import mailer from './plugins/mailer';
import redirectWithMessage from './plugins/redirect-with-message';
import security from './plugins/security';
import sessionAuth from './plugins/session-auth';
import {
  devLoginCallback,
  devLegacyAuthRoutes,
  mobileAuth0Routes
} from './routes/auth';
import { challengeRoutes } from './routes/challenge';
import { deprecatedEndpoints } from './routes/deprecated-endpoints';
import { unsubscribeDeprecated } from './routes/deprecated-unsubscribe';
import { donateRoutes } from './routes/donate';
import { settingRoutes } from './routes/settings';
import { statusRoute } from './routes/status';
import { userGetRoutes, userRoutes } from './routes/user';
import {
  API_LOCATION,
  COOKIE_DOMAIN,
  EMAIL_PROVIDER,
  FCC_ENABLE_DEV_LOGIN_MODE,
  FCC_ENABLE_SWAGGER_UI,
  FREECODECAMP_NODE_ENV,
  MONGOHQ_URL,
  SENTRY_DSN,
  SESSION_SECRET
} from './utils/env';
import { isObjectID } from './utils/validation';
import { certificateRoutes } from './routes/certificate';

export type FastifyInstanceWithTypeProvider = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

// Options that fastify uses
const ajv = new Ajv({
  coerceTypes: 'array', // change data type of data to match type keyword
  useDefaults: true, // replace missing properties and items with the values from corresponding default keyword
  removeAdditional: true, // remove additional properties
  uriResolver,
  addUsedSchema: false,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false
});

// add the default formatters from avj-formats
addFormats(ajv);
ajv.addFormat('objectid', {
  type: 'string',
  validate: (str: string) => isObjectID(str)
});

/**
 * Top-level wrapper to instantiate the API server. This is where all middleware and
 * routes should be mounted.
 *
 * @param options The options to pass to the Fastify constructor.
 * @returns The instantiated Fastify server, with TypeBox.
 */
export const build = async (
  options: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> = {}
): Promise<FastifyInstanceWithTypeProvider> => {
  // TODO: Old API returns 403s for failed validation. We now return 400 (default) from AJV.
  // Watch when implementing in client
  const fastify = Fastify(options).withTypeProvider<TypeBoxTypeProvider>();

  fastify.setValidatorCompiler(({ schema }) => ajv.compile(schema));

  void fastify.register(security);

  fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' };
  });
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(express);
  if (SENTRY_DSN) {
    await fastify.register(fastifySentry, { dsn: SENTRY_DSN });
  }

  await fastify.register(cors);
  await fastify.register(fastifyCookie);

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

  const provider =
    EMAIL_PROVIDER === 'ses' ? new SESProvider() : new NodemailerProvider();
  void fastify.register(mailer, { provider });

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

  void fastify.register(sessionAuth);
  void fastify.register(prismaPlugin);
  void fastify.register(mobileAuth0Routes);
  if (FCC_ENABLE_DEV_LOGIN_MODE) {
    void fastify.register(devLoginCallback, { prefix: '/auth' });
    void fastify.register(devLegacyAuthRoutes);
  }
  void fastify.register(certificateRoutes);
  void fastify.register(challengeRoutes);
  void fastify.register(settingRoutes);
  void fastify.register(donateRoutes);
  void fastify.register(userRoutes);
  void fastify.register(userGetRoutes);
  void fastify.register(deprecatedEndpoints);
  void fastify.register(statusRoute);
  void fastify.register(unsubscribeDeprecated);
  void fastify.register(redirectWithMessage);

  return fastify;
};
