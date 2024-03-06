import { Type } from '@fastify/type-provider-typebox';

export const unsubscribe = {
  params: Type.Object({
    unsubscribeId: Type.String({
      minLength: 1
    })
  }),
  response: {
    302: Type.Object({
      // this doesn't seem to work
      headers: Type.Object({
        location: Type.String()
      })
    }),
    500: Type.Object({
      error: Type.String()
    })
  }
};
