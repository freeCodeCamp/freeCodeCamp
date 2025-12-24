import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const updateStripeCard = {
  body: Type.Object({}),
  response: {
    200: Type.Object({
      sessionId: Type.String()
    }),
    default: genericError
  }
};
