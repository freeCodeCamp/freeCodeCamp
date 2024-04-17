import { Type } from '@fastify/type-provider-typebox';

export const updateMyEmail = {
  body: Type.Object({
    email: Type.String({ format: 'email', maxLength: 1024 })
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.email-valid'),
      type: Type.Literal('success')
    }),
    '4xx': Type.Object({
      message: Type.String(),
      type: Type.Union([Type.Literal('danger'), Type.Literal('info')])
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
