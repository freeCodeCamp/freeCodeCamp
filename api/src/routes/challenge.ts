import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: {
        body: Type.Object({
          id: Type.String(),
          solution: Type.String()
        })
      }
    },
    async (req, reply) => {
      try {
        console.log(req.body);
        return {
          message: 'Challenge Submitted'
        };
      } catch (error) {
        fastify.log.error(error);
        void reply.code(500);
        return {
          message: 'flash.wrong-updating',
          type: 'danger'
        };
      }
    }
  );

  done();
};
