import {
  type FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';
import { isObjectID } from '../utils/validation';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/project-completed',
    {
      schema: {
        // TODO(Post-MVP): make id required.
        body: Type.Object({ id: Type.Optional(Type.String()) }),
        response: {
          // TODO: update to correct schema and test success case.
          200: Type.Object({ done: Type.Boolean() }),
          400: Type.Object({
            type: Type.Literal('error'),
            message: Type.Literal(
              'That does not appear to be a valid challenge submission.'
            )
          })
        }
      }
    },
    (req, reply) => {
      if (!isObjectID(req.body.id)) {
        void reply.code(400);
        return {
          type: 'error',
          message: 'That does not appear to be a valid challenge submission.'
        } as const;
      }
      return { done: true };
    }
  );

  done();
};
