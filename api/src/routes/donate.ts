import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import { DbUtils } from './helpers/db-utils';

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
  const { findUserById, updateUserById } = new DbUtils(fastify);

  fastify.post(
    '/donate/add-donation',
    {
      schema: {
        body: Type.Object({}),
        response: {
          200: Type.Object({
            isDonating: Type.Boolean()
          }),
          400: Type.Object({
            message: Type.Literal('User is already donating.'),
            type: Type.Literal('info')
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
        const user = await findUserById(req.session.user.id, {
          isDonating: true
        });

        if (user.isDonating) {
          void reply.code(400);
          return {
            type: 'info',
            message: 'User is already donating.'
          } as const;
        }

        await updateUserById(req.session.user.id, { isDonating: true });

        return {
          isDonating: true
        } as const;
      } catch (error) {
        fastify.log.error(error);
        void reply.code(500);
        return {
          type: 'danger',
          message: 'Something went wrong.'
        } as const;
      }
    }
  );

  done();
};
