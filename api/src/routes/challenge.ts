import type { ErrorObject } from 'ajv';
import {
  type FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';

import { isObjectID } from '../utils/validation';
import { formatValidationError } from '../utils/error-formatting';

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
          challengeType: Type.Optional(Type.Number()),
          solution: Type.String()
        }),
        response: {
          // TODO: update to correct schema and test success case.
          200: Type.Object({ done: Type.Boolean() }),
          400: Type.Object({
            type: Type.Literal('error'),
            message: Type.String()
            // TODO: use literals if possible.
            // message: Type.Union([
            //   Type.Literal(
            //     'That does not appear to be a valid challenge submission.'
            //   ),
            //   Type.Literal(
            //     'You have not provided the valid links for us to inspect your work.'
            //   )
            // ])
          })
        }
      },
      attachValidation: true
    },
    (req, reply) => {
      if (!isObjectID(req.body.id)) {
        void reply.code(400);
        return invalidChallengeSubmission;
      }
      if (req.validationError) {
        void reply.code(400);
        const formattedErrors = formatValidationError(
          req.validationError.validation as ErrorObject[]
        );
        return formattedErrors[0] ?? invalidChallengeSubmission;
      }

      return { done: true };
    }
  );

  done();
};
