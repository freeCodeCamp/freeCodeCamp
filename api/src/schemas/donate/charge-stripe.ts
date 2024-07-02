import { Type } from '@fastify/type-provider-typebox';

export const chargeStripe = {
  body: Type.Object({
    amount: Type.Number(),
    duration: Type.Literal('month'),
    email: Type.String(),
    subscriptionId: Type.String()
  }),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean()
    }),
    500: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
