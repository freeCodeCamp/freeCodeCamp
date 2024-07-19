import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const updateStripeCard = {
  response: {
    200: Type.Object({
      sessionId: Type.String()
    }),
    default: genericError
};
