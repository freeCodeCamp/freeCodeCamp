import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const resetModule = {
  body: Type.Object({
    blockId: Type.String({ minLength: 1 })
  }),
  response: {
    204: Type.Object({}),
    400: Type.Object({
      message: Type.String(),
      type: Type.String()
    }),
    default: genericError
  }
};
