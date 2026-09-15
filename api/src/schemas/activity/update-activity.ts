import { Type } from '@fastify/type-provider-typebox';
import { activityStreak, genericError } from '../types.js';
import { clientActivityEventTypes } from '../../data/activity.js';

export const updateActivity = {
  body: Type.Object({
    eventId: Type.String({ format: 'uuid', maxLength: 36 }),
    eventType: Type.Union(
      clientActivityEventTypes.map(eventType => Type.Literal(eventType))
    ),
    subjectId: Type.Optional(Type.String({ minLength: 1, maxLength: 256 })),
    url: Type.Optional(
      Type.String({ minLength: 1, maxLength: 1024, pattern: '^/learn/' })
    )
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.activity-updated'),
      type: Type.Literal('success')
    }),
    default: genericError
  }
};

export const qualifyActivityStreak = {
  body: Type.Object({}),
  response: {
    200: Type.Object({
      activityStreak
    }),
    409: genericError,
    default: genericError
  }
};
