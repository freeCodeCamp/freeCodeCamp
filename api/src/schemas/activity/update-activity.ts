import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const updateActivity = {
  body: Type.Object({
    challengeId: Type.String({ minLength: 1 }),
    url: Type.String({ minLength: 1, maxLength: 1024, pattern: '^/learn/' })
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.activity-updated'),
      type: Type.Literal('success')
    }),
    default: genericError
  }
};
