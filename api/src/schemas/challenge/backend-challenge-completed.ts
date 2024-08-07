import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const backendChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
  }),
  response: {
    200: Type.Object({
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'That does not appear to be a valid challenge submission.'
      )
    }),
    default: genericError
  }
};
