import { Type } from '@fastify/type-provider-typebox';

export const getPublicProfile = {
  querystring: Type.Object({
    username: Type.String({ minLength: 1 })
  }),
  response: {
    400: Type.Object({}),
    404: Type.Object({})
  }
};
