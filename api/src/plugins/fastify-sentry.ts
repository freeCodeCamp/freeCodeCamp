import { init, captureException } from '@sentry/node';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const fastifySentry = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
): void => {
  init(options);

  fastify.setErrorHandler((error, request, reply) => {
    reply.log.error(error.message);
    captureException(error);
    if (error.statusCode)
      reply.statusCode = error.statusCode >= 400 ? error.statusCode : 500;
    request.log.error(error);
  });
  done();
};
