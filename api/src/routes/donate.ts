import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';

export const donateRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // The order matters here, since we want to reject invalid cross site requests
  // before checking if the user is authenticated.
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/donate/add-donation',
    {
      schema: {
        body: Type.Object({}),
        response: {
          200: Type.Object({
            isDonating: Type.Boolean()
          }),
          500: Type.Object({
            message: Type.Literal('Something went wrong.'),
            type: Type.Literal('danger')
          })
        }
      }
    },
    async (req, reply) => {
      try {
        const user = await fastify.prisma.user.findUnique({
          where: { id: req.session.user.id }
        });

        if (user?.isDonating) {
          throw new Error('User is already donating.');
        }

        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            isDonating: true
          }
        });

        return {
          isDonating: true
        } as const;
      } catch (error) {
        fastify.log.error(error);
        void reply.code(400);
        return {
          type: 'danger',
          message: 'Something went wrong.'
        } as const;
      }
    }
  );

  done();
};
