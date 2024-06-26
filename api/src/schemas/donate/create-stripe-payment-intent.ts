import { Type } from '@fastify/type-provider-typebox';

export const createStripePaymentIntent = {
  body: Type.Object({
    amount: Type.Number(),
    duration: Type.Literal('month'),
    email: Type.String(),
    name: Type.String()
  }),
  response: {
    200: Type.Object({
      subscriptionId: Type.String(),
      clientSecret: Type.String()
    }),
    400: Type.Object({
      error: Type.Literal(
        'The donation form had invalid values for this submission.'
      )
    }),
    500: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
