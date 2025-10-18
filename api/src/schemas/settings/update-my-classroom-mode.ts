import { Type } from '@fastify/type-provider-typebox';

export const updateMyClassroomMode = {
  body: Type.Object({
    isClassroomAccount: Type.Literal(true)
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.classroom-mode-updated'),
      type: Type.Literal('success')
    }),
    400: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
