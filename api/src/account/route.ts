import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';

export const accountRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/user/account',
    {
      schema: {
        params: Type.Object({
          username: Type.String()
        })
      }
    },
    async (req, reply) => {
      const camper = await fastify.prisma.user.findFirst({
        where: { username: req.params.username },
        select: {
          username: true
        }
      });
      if (camper) void reply.redirect(`/${camper.username}`);
    }
  );

  done();
};
