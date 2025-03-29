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
      exists: Type.Literal(true)
    })
  }
};
