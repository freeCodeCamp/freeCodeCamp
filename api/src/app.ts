import fastifyCsrfProtection from '@fastify/csrf-protection';
import express from '@fastify/express';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastifySentry from '@immobiliarelabs/fastify-sentry';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
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
import cookies from './plugins/cookies';
import cors from './plugins/cors';
import { NodemailerProvider } from './plugins/mail-providers/nodemailer';
import { SESProvider } from './plugins/mail-providers/ses';
import mailer from './plugins/mailer';
import redirectWithMessage from './plugins/redirect-with-message';
import security from './plugins/security';
import codeFlowAuth from './plugins/code-flow-auth';
import { mobileAuth0Routes } from './routes/auth';
import { devAuthRoutes } from './routes/auth-dev';
import {
  protectedCertificateRoutes,
  unprotectedCertificateRoutes
} from './routes/certificate';
import { challengeRoutes } from './routes/challenge';
import { deprecatedEndpoints } from './routes/deprecated-endpoints';
import { unsubscribeDeprecated } from './routes/deprecated-unsubscribe';
import { donateRoutes } from './routes/donate';
import { emailSubscribtionRoutes } from './routes/email-subscription';
import { settingRoutes, settingRedirectRoutes } from './routes/settings';
import { statusRoute } from './routes/status';
import { userGetRoutes, userRoutes, userPublicGetRoutes } from './routes/user';
import {
  API_LOCATION,
  EMAIL_PROVIDER,
  FCC_ENABLE_DEV_LOGIN_MODE,
  FCC_ENABLE_SWAGGER_UI,
  SENTRY_DSN
} from './utils/env';
import { isObjectID } from './utils/validation';

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

  await fastify.register(fastifySentry, {
    dsn: SENTRY_DSN,
    // No need to initialize if DSN is not provided (e.g. in development and
    // test environments)
    skipInit: !SENTRY_DSN,
    errorResponse: (error, _request, reply) => {
      const isCSRFError =
        error.code === 'FST_CSRF_INVALID_TOKEN' ||
        error.code === 'FST_CSRF_MISSING_SECRET';
      if (reply.statusCode === 500 || isCSRFError) {
        void reply.send({
          message: 'flash.generic-error',
          type: 'danger'
        });
      } else {
        void reply.send(error);
      }
    }
  });

  await fastify.register(cors);
  await fastify.register(cookies);

  void fastify.register(fastifyCsrfProtection, {
    // TODO: consider signing cookies. We don't on the api-server, but we could
    // as an extra layer of security.

    ///Ignore all other possible sources of CSRF
    // tokens since we know we can provide this one
    getToken: req => req.headers['csrf-token'] as string,
    cookieOpts: { signed: false, sameSite: 'strict' }
  });

  // All routes except signout should add a CSRF token to the response
  fastify.addHook('onRequest', (_req, reply, done) => {
    const isSignout = _req.url === '/signout' || _req.url === '/signout/';

    if (!isSignout) {
      const token = reply.generateCsrf();
      void reply.setCookie('csrf_token', token, {
        sameSite: 'strict',
        signed: false
      });
    }
    done();
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

  // redirectWithMessage must be registered before codeFlowAuth
  void fastify.register(redirectWithMessage);
  void fastify.register(codeFlowAuth);
  void fastify.register(prismaPlugin);
  void fastify.register(mobileAuth0Routes);
  if (FCC_ENABLE_DEV_LOGIN_MODE) {
    void fastify.register(devAuthRoutes);
  }
  void fastify.register(challengeRoutes);
  void fastify.register(settingRoutes);
  void fastify.register(settingRedirectRoutes);
  void fastify.register(donateRoutes);
  void fastify.register(emailSubscribtionRoutes);
  void fastify.register(userRoutes);
  void fastify.register(userPublicGetRoutes);
  void fastify.register(protectedCertificateRoutes);
  void fastify.register(unprotectedCertificateRoutes);
  void fastify.register(userGetRoutes);
  void fastify.register(deprecatedEndpoints);
  void fastify.register(statusRoute);
  void fastify.register(unsubscribeDeprecated);

  return fastify;
};
