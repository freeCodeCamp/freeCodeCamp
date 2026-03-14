import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const updateActivity = {
  body: Type.Object({
    url: Type.String({ minLength: 1, pattern: '^/learn/' })
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.activity-updated'),
      type: Type.Literal('success')
    }),
    default: genericError
  }
};
