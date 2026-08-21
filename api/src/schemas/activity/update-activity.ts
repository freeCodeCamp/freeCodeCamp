import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const updateActivity = {
  body: Type.Object({
    eventId: Type.String({ format: 'uuid', maxLength: 36 }),
    eventType: Type.Literal('challenge_submit'),
    challengeId: Type.String({ minLength: 1 }),
    url: Type.String({ minLength: 1, maxLength: 1024, pattern: '^/learn/' }),
    occurredAt: Type.String({ format: 'date-time', maxLength: 64 }),
    timezone: Type.String({ minLength: 1, maxLength: 100 })
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.activity-updated'),
      type: Type.Literal('success')
    }),
    default: genericError
  }
};
