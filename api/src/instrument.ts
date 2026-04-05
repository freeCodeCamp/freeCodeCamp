import { FastifyInstance } from 'fastify';
import * as Sentry from '@sentry/node';

export const registerSentry = (app: FastifyInstance) => {
  app.addHook('onRequest', async (req) => {
    Sentry.setContext('request', {
      method: req.method,
      url: req.url,
      headers: req.headers
    });
  });

  app.setErrorHandler((error, request, reply) => {
    Sentry.captureException(error);

    reply.status(error.statusCode || 500).send({
      message: 'Internal Server Error'
    });
  });
};
