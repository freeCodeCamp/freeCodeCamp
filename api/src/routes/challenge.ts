import {
  type FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';
import { isObjectID } from '../utils/validation';

const invalidChallengeSubmission = {
  type: 'error',
  message: 'That does not appear to be a valid challenge submission.'
} as const;

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
        body: Type.Object({
          id: Type.Optional(Type.String()),
          challengeType: Type.Optional(Type.Number())
        }),
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
      },
      attachValidation: true
    },
    (req, reply) => {
      if (req.validationError) {
        void reply.code(400);
        return invalidChallengeSubmission;
      }
      if (!isObjectID(req.body.id)) {
        void reply.code(400);
        return invalidChallengeSubmission;
      }
      return { done: true };
    }
  );

  done();
};
