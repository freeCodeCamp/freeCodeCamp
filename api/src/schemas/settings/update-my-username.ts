import { Type } from '@fastify/type-provider-typebox';

export const updateMyUsername = {
  body: Type.Object({
    username: Type.String({ minLength: 3, maxLength: 1000 })
  }),
  response: {
    200: Type.Object({
      message: Type.String(),
      type: Type.Literal('success'),
      variables: Type.Object({ username: Type.String() })
    }),
    400: Type.Object({
      message: Type.Optional(Type.String()),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      message: Type.String(),
      type: Type.Literal('danger')
    })
  }
};
