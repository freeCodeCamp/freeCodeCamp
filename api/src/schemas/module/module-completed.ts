import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const moduleCompleted = {
  body: Type.Object({
    id: Type.String()
  }),
  response: {
    200: Type.Object({
      alreadyCompleted: Type.Boolean(),
      completedDate: Type.Number()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'That does not appear to be a valid module submission.'
      )
    }),
    default: genericError
  }
};
