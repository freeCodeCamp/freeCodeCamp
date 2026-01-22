import { Type } from '@fastify/type-provider-typebox';

export const updateMyEmail = {
  body: Type.Object({
    email: Type.String({ format: 'email', maxLength: 1024 })
  }),
  response: {
    200: Type.Object({
      message: Type.Literal(
        'Check your email and click the link we sent you to confirm your new email address.'
      ),
      type: Type.Literal('info')
    }),
    400: Type.Object({
      message: Type.String(),
      type: Type.Union([Type.Literal('danger'), Type.Literal('info')])
    }),
    429: Type.Object({
      message: Type.String(),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
