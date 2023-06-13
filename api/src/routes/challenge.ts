import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post('/project-completed', () => {
    return { done: true };
  });

  done();
};
