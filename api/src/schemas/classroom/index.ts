import { Type } from '@fastify/type-provider-typebox';
import { genericError, Nullable } from '../types';

export const getClassroom = {
  params: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
  }),
  response: {
    200: Type.Object({
      id: Nullable(Type.String()),
      students: Type.Array(
        Type.Object({
          id: Type.String()
        })
      )
    }),
    400: Type.Object({
      message: Type.String(),
      type: Type.Literal('info')
    }),
    default: genericError
  }
};
