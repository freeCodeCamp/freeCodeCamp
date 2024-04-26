import { Type } from '@fastify/type-provider-typebox';

export const chargeStripe = {
  body: Type.Object({
    amount: Type.Number(),
    duration: Type.Literal('month'),
    email: Type.String(),
    name: Type.String(),
    token: Type.Object({
      id: Type.String()
    })
  }),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean(),
      type: Type.Literal('success')
    }),
    500: Type.Object({
      error: Type.Union([
        Type.Literal('Donation failed due to a server error.'),
        Type.Literal(
          'The donation form had invalid values for this submission.'
        )
      ])
    })
  }
};
