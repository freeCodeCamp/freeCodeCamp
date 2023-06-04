import Sentry, { SentryPluginOptions } from '@immobiliarelabs/fastify-sentry';
import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

/* eslint-disable @typescript-eslint/no-misused-promises */
const fastifySentry: FastifyPluginCallback<SentryPluginOptions> = async (
  fastify,
  options
) => {
  await fastify.register(Sentry, options);

  fastify.log.info('Sentry plugin registered');
};

export default fp(fastifySentry);
