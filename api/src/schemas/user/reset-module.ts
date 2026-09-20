import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const resetModule = {
  body: Type.Object({
    blockIds: Type.Array(Type.String({ minLength: 1 }), {
      minItems: 1,
      maxItems: 500
    })
  }),
  response: {
    200: Type.Object({
      removedChallengeIds: Type.Array(Type.String())
    }),
    400: Type.Object({
      message: Type.String(),
      type: Type.String()
    }),
    default: genericError
  }
};
