import { randomBytes } from 'crypto';
import fastifyAccepts from '@fastify/accepts';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import uriResolver from 'fast-uri';
import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault
} from 'fastify';
import { Ajv } from 'ajv';
import addFormats from 'ajv-formats';

import prismaPlugin from './db/prisma.js';
import cookies from './plugins/cookies.js';
import cors from './plugins/cors.js';
import { NodemailerProvider } from './plugins/mail-providers/nodemailer.js';
import { SESProvider } from './plugins/mail-providers/ses.js';
import mailer from './plugins/mailer.js';
import redirectWithMessage from './plugins/redirect-with-message.js';
import security from './plugins/security.js';
import auth from './plugins/auth.js';
import bouncer from './plugins/bouncer.js';
import errorHandling from './plugins/error-handling.js';
import csrf from './plugins/csrf.js';
import notFound from './plugins/not-found.js';
import shadowCapture from './plugins/shadow-capture.js';
import growthBook from './plugins/growth-book.js';

import * as publicRoutes from './routes/public/index.js';
import * as protectedRoutes from './routes/protected/index.js';

import {
  API_LOCATION,
  EMAIL_PROVIDER,
  FCC_ENABLE_DEV_LOGIN_MODE,
  FCC_ENABLE_SWAGGER_UI,
  FCC_ENABLE_SHADOW_CAPTURE,
  FCC_ENABLE_SENTRY_ROUTES,
  GROWTHBOOK_FASTIFY_API_HOST,
  GROWTHBOOK_FASTIFY_CLIENT_KEY
} from './utils/env.js';
import { isObjectID } from './utils/validation.js';
import { getLogger } from './utils/logger.js';
import {
  examEnvironmentOpenRoutes,
  examEnvironmentValidatedTokenRoutes
} from './exam-environment/routes/exam-environment.js';
import { dailyCodingChallengeRoutes } from './daily-coding-challenge/routes/daily-coding-challenge.js';

type FastifyInstanceWithTypeProvider = FastifyInstance<
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
addFormats.default(ajv);
ajv.addFormat('objectid', {
  type: 'string',
  validate: (str: string) => isObjectID(str)
});

export const buildOptions: FastifyHttpOptions<
  RawServerDefault,
  FastifyBaseLogger
> = {
  loggerInstance: getLogger(),
  genReqId: () => randomBytes(8).toString('hex'),
  // disabled so we can customise the request/response logging
  disableRequestLogging: true
};

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
  fastify.addHook('onRequest', (req, _reply, done) => {
    const logger = fastify.log.child({ req });
    logger.debug({ req }, 'received request');
    done();
  });

  fastify.addHook('onResponse', (req, reply, done) => {
    const logger = fastify.log.child({ res: reply });
    logger.debug({ req, res: reply }, 'responding to request');
    done();
  });

  void fastify.register(redirectWithMessage);
  void fastify.register(security);
  void fastify.register(fastifyAccepts);
  void fastify.register(errorHandling);

  await fastify.register(cors);
  await fastify.register(cookies);
  await fastify.register(csrf);

  await fastify.register(growthBook, {
    apiHost: GROWTHBOOK_FASTIFY_API_HOST,
    clientKey: GROWTHBOOK_FASTIFY_CLIENT_KEY
  });

  const provider =
    EMAIL_PROVIDER === 'ses' ? new SESProvider() : new NodemailerProvider();
  void fastify.register(mailer, { provider });

  // Swagger plugin
  if (FCC_ENABLE_SWAGGER_UI ?? fastify.gb.isOn('swagger-ui')) {
    void fastify.register(fastifySwagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: 'freeCodeCamp API',
          version: '1.0.0' // API version
        }
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

  if (FCC_ENABLE_SHADOW_CAPTURE ?? fastify.gb.isOn('shadow-capture')) {
    void fastify.register(shadowCapture);
  }

  void fastify.register(auth);
  void fastify.register(notFound);
  void fastify.register(prismaPlugin);
  void fastify.register(bouncer);

  // Routes requiring authentication:
  void fastify.register(async function (fastify, _opts) {
    fastify.addHook('onRequest', fastify.authorize);
    // CSRF protection enabled:
    await fastify.register(async function (fastify, _opts) {
      // TODO: bounce unauthed requests before checking CSRF token. This will
      // mean moving csrfProtection into custom plugin and testing separately,
      // because it's a pain to mess around with other cookies/hook order.
      // eslint-disable-next-line @typescript-eslint/unbound-method
      fastify.addHook('onRequest', fastify.csrfProtection);
      fastify.addHook('onRequest', fastify.send401IfNoUser);

      await fastify.register(protectedRoutes.challengeRoutes);
      await fastify.register(protectedRoutes.donateRoutes);
      await fastify.register(protectedRoutes.protectedCertificateRoutes);
      await fastify.register(protectedRoutes.settingRoutes);
      await fastify.register(protectedRoutes.userRoutes);
    });

    // CSRF protection disabled:
    await fastify.register(async function (fastify, _opts) {
      fastify.addHook('onRequest', fastify.send401IfNoUser);

      await fastify.register(protectedRoutes.userGetRoutes);
    });

    // Routes that redirect if access is denied:
    await fastify.register(async function (fastify, _opts) {
      fastify.addHook('onRequest', fastify.redirectIfNoUser);

      await fastify.register(protectedRoutes.settingRedirectRoutes);
    });
  });

  // TODO: The route should not handle its own AuthZ
  await fastify.register(protectedRoutes.challengeTokenRoutes);

  // Routes for signed out users:
  void fastify.register(async function (fastify) {
    fastify.addHook('onRequest', fastify.authorize);
    // TODO(Post-MVP): add the redirectIfSignedIn hook here, rather than in the
    // mobileAuth0Routes and authRoutes plugins.
    await fastify.register(publicRoutes.mobileAuth0Routes);
    if (FCC_ENABLE_DEV_LOGIN_MODE) {
      await fastify.register(publicRoutes.devAuthRoutes);
    } else {
      await fastify.register(publicRoutes.authRoutes);
    }
  });

  void fastify.register(function (fastify, _opts, done) {
    fastify.addHook('onRequest', fastify.authorizeExamEnvironmentToken);

    void fastify.register(examEnvironmentValidatedTokenRoutes);
    done();
  });
  void fastify.register(examEnvironmentOpenRoutes);

  if (FCC_ENABLE_SENTRY_ROUTES ?? fastify.gb.isOn('sentry-routes')) {
    void fastify.register(publicRoutes.sentryRoutes);
  }

  void fastify.register(publicRoutes.chargeStripeRoute);
  void fastify.register(publicRoutes.signoutRoute);
  void fastify.register(publicRoutes.emailSubscribtionRoutes);
  void fastify.register(publicRoutes.userPublicGetRoutes);
  void fastify.register(publicRoutes.unprotectedCertificateRoutes);
  void fastify.register(publicRoutes.deprecatedEndpoints);
  void fastify.register(publicRoutes.statusRoute);
  void fastify.register(publicRoutes.unsubscribeDeprecated);
  void fastify.register(dailyCodingChallengeRoutes);

  return fastify;
};
