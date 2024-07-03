import { Type } from '@fastify/type-provider-typebox';

export const chargeStripe = {
  body: Type.Object({
    amount: Type.Number(),
    duration: Type.Literal('month'),
    email: Type.String({ format: 'email', maxLength: 1024 }),
    subscriptionId: Type.String()
  }),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean()
    }),
    default: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
