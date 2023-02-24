import { config } from 'dotenv';
config({ path: '../.env' });
import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify from 'fastify';
import middie from '@fastify/middie';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';

import jwtAuthz from './plugins/fastify-jwt-authz';
import { testRoutes } from './routes/test';
import { dbConnector } from './db';
import { auth0Verify, testMiddleware } from './middleware';
import { testValidatedRoutes } from './routes/validation-test';

const fastify = Fastify({
  logger: { level: process.env.NODE_ENV === 'development' ? 'debug' : 'fatal' }
}).withTypeProvider<JsonSchemaToTsProvider>();

// We could specify the type parameters of FastifyInstance to include the type
// provider, but it's a chore and typeof works just as well.
export type FastifyInstanceWithTypeProvider = typeof fastify;

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
  void fastify.register(jwtAuthz);

  void fastify.use('/test', testMiddleware);

  // Hooks
  void fastify.addHook('preValidation', auth0Verify);

  void fastify.register(dbConnector);
  void fastify.register(testRoutes);
  void fastify.register(testValidatedRoutes);

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
