import {
  init,
  configureScope,
  addRequestDataToEvent,
  captureException
} from '@sentry/node';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const fastifySentry = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
): void => {
  init(options);
  fastify.addHook('onRequest', (request, _reply, done) => {
    configureScope(({ addEventProcessor }) => {
      addEventProcessor(event => {
        return addRequestDataToEvent(event, request.raw);
      });
    });
    done();
  });
  fastify.addHook('onError', (_request, _reply, error, done) => {
    captureException(error);
    done();
  });

  fastify.setErrorHandler((error, request, reply) => {
    reply.log.error(error.message);
    if (error.statusCode)
      reply.statusCode = error.statusCode >= 400 ? error.statusCode : 500;
    request.log.error(error);
  });
  done();
};
