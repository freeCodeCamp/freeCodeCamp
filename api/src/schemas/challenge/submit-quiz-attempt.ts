import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const submitQuizAttempt = {
  body: Type.Object({
    challengeId: Type.String({
      format: 'objectid',
      maxLength: 24,
      minLength: 24
    }),
    quizId: Type.String()
  }),
  response: {
    200: Type.Object({}),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'That does not appear to be a valid quiz attempt submission.'
      )
    }),
    default: genericError
  }
};
