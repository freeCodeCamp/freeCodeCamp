import { Type } from '@fastify/type-provider-typebox';

export const resubscribe = {
  params: Type.Object({
    unsubscribeId: Type.String({
      minLength: 1
    })
  })
};
