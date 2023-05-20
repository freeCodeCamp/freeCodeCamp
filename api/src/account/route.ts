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
      const username = req.params.username;
      void reply.redirect('/' + username);
    }
  );

  done();
};
