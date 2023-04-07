import { init, captureException } from '@sentry/node';
import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

const fastifySentry: FastifyPluginCallback<{ dsn: string }> = (
  fastify,
  options,
  done
) => {
  init(options);

  fastify.setErrorHandler((error, request) => {
    captureException(error);
    request.log.error(error);
  });
  done();
};

export default fp(fastifySentry);
