import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const updateMyClassroomMode = {
  body: Type.Object({
    isClassroomAccount: Type.Boolean()
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.classroom-mode-updated'),
      type: Type.Literal('success')
    }),
    403: Type.Union([
      Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      }),
      genericError
    ])
  }
};
