import { init, captureException } from '@sentry/node';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';

const fastifySentry = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  init(options);

  fastify.setErrorHandler((error, request, reply) => {
    reply.log.error(error.message);
    captureException(error);
    if (error.statusCode)
      reply.statusCode = error.statusCode >= 400 ? error.statusCode : 500;
    request.log.error(error);
    done();
  });
  done();
};

export default fp(fastifySentry);
