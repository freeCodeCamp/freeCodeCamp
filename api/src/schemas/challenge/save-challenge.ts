import { Type } from '@fastify/type-provider-typebox';
import { saveChallengeBody } from '../types';

export const saveChallenge = {
  body: saveChallengeBody,
  response: {
    200: Type.Object({
      savedChallenges: Type.Array(
        Type.Intersect([
          saveChallengeBody,
          Type.Object({ lastSavedDate: Type.Number() })
        ])
      )
    }),
    403: Type.Literal('That challenge type is not saveable.'),
    500: Type.Object({
      type: Type.Literal('danger'),
      message: Type.Literal(
        'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
      )
    })
  }
};
