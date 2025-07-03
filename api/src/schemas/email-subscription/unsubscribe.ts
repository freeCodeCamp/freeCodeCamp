import { Type } from '@fastify/type-provider-typebox';

export const unsubscribe = {
  params: Type.Object({
    unsubscribeId: Type.String({
      minLength: 1
    })
  })
};
