import { Type } from '@fastify/type-provider-typebox';
import { saveChallengeBody } from '../types';

export const modernChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
    challengeType: Type.Number(),
    files: Type.Optional(
      Type.Array(
        Type.Object({
          contents: Type.String(),
          key: Type.String(),
          ext: Type.String(),
          name: Type.String(),
          history: Type.Array(Type.String())
        })
      )
    )
  }),
  response: {
    200: Type.Object({
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean(),
      savedChallenges: Type.Array(
        Type.Intersect([
          saveChallengeBody,
          Type.Object({ lastSavedDate: Type.Number() })
        ])
      )
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
