import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const resetModule = {
  body: Type.Object({
    blockId: Type.String({ minLength: 1 })
  }),
  response: {
    200: Type.Object({
      blockId: Type.String(),
      completedChallengesRemoved: Type.Number(),
      savedChallengesRemoved: Type.Number(),
      partiallyCompletedChallengesRemoved: Type.Number()
    }),
    400: Type.Object({
      message: Type.String(),
      type: Type.String()
    }),
    default: genericError
  }
};
