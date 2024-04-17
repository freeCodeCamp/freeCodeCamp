import { Type } from '@fastify/type-provider-typebox';

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
    500: Type.Object({
      type: Type.Literal('danger'),
      message: Type.Literal(
        'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
      )
    })
  }
};
