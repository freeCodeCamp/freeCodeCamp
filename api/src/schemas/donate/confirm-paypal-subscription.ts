import { Type } from '@fastify/type-provider-typebox';

export const confirmPaypalSubscription = {
  body: Type.Object({
    subscriptionId: Type.String(),
    amount: Type.Number(),
    duration: Type.Literal('month')
  }),
  response: {
    200: Type.Object({
      subscriptionId: Type.String(),
      status: Type.Union([Type.Literal('active'), Type.Literal('pending')])
    }),
    400: Type.Object({
      error: Type.String()
    }),
    default: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
