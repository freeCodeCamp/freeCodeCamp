import { Type } from '@fastify/type-provider-typebox';

export const confirmEmail = {
  querystring: Type.Object({
    email: Type.String({ maxLength: 1000 }),
    token: Type.String({ minLength: 64, maxLength: 64 })
  })
};
