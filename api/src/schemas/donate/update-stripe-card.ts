import { Type } from '@fastify/type-provider-typebox';

export const updateStripeCard = {
  response: {
    200: Type.Object({
      sessionId: Type.String()
    }),
    default: Type.Object({
      message: Type.Literal('Something went wrong.'),
      type: Type.Literal('danger')
    })
  }
};
