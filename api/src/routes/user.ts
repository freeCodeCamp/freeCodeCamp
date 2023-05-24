import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';

export const userRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/account/delete',
    {
      schema: {
        response: {
          200: Type.Object({}),
          500: Type.Object({
            message: Type.Literal(
              'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
            ),
            type: Type.Literal('danger')
          })
        }
      }
    },
    async (req, reply) => {
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });
        await fastify.prisma.user.delete({
          where: { id: req.session.user.id }
        });
        await req.session.destroy();
        void reply.clearCookie('sessionId');

        return {};
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        };
      }
    }
  );

  fastify.post(
    '/user/report-user',
    {
      schema: {
        body: Type.Object({
          username: Type.String(),
          reportDescription: Type.String()
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.report-sent'),
            type: Type.Literal('info'),
            variables: Type.Object({
              email: Type.Union([Type.String(), Type.Undefined()])
            })
          }),
          500: Type.Object({
            message: Type.Literal('flash.provide-username'),
            type: Type.Literal('danger')
          })
        }
      }
    },
    async (req, reply) => {
      try {
        const { /*username,*/ reportDescription: report } = req.body;
        //const { origin } = getRedirectParams(req);

        if (report === '') {
          return {
            type: 'danger',
            message: 'flash.provide-username'
          } as const;
        }

        const user = await fastify.prisma.user.findFirst({
          where: { id: req.session.user.id }
        });

        return {
          type: 'info',
          message: 'flash.report-sent',
          variables: { email: user?.email }
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        throw err;
      }
    }
  );

  done();
};
