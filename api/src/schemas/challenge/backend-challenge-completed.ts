import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

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
    403: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'Exam submissions are not allowed on this endpoint.'
      )
    }),
    default: genericError
  }
};
