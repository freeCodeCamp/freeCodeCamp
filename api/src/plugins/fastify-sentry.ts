import { init, captureException } from '@sentry/node';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';

const fastifySentry = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  init(options);

  fastify.setErrorHandler((error, request) => {
    captureException(error);
    request.log.error(error);
  });
  done();
};

export default fp(fastifySentry);
