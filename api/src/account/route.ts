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
        body: Type.Object({
          username: Type.String()
        })
      }
    },
    async (req, reply) => {
      const username = req.body.username;
      void reply.redirect('/' + username);
    }
  );

  done();
};
