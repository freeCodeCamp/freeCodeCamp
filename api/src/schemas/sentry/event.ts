import { Type } from '@fastify/type-provider-typebox';

export const sentryPostEvent = {
  body: Type.Object({
    text: Type.String()
  }),
  response: {
    500: Type.Object({
      message: Type.Literal('flash.generic-error'),
      type: Type.Literal('danger')
    })
  }
};
