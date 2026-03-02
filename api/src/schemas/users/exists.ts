import { Type } from '@fastify/type-provider-typebox';

export const userExists = {
  querystring: Type.Object({
    username: Type.String({ minLength: 1 })
  }),
  response: {
    200: Type.Object({
      exists: Type.Boolean()
    }),
    400: Type.Object({
      type: Type.Literal('danger'),
      message: Type.Literal('username parameter is required')
      // message: Type.Literal("'username' parameter is required")
    })
  }
};
