import { Type } from '@fastify/type-provider-typebox';

export const chargeStripeCard = {
  body: Type.Object({
    paymentMethodId: Type.String(),
    amount: Type.Number(),
    duration: Type.Literal('month')
  }),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean(),
      type: Type.Literal('success')
    }),
    400: Type.Object({
      error: Type.Object({
        message: Type.String(),
        type: Type.Union([
          Type.Literal('AlreadyDonatingError'),
          Type.Literal('MethodRestrictionError')
        ])
      })
    }),
    402: Type.Object({
      error: Type.Object({
        message: Type.String(),
        type: Type.Union([
          Type.Literal('UserActionRequired'),
          Type.Literal('PaymentMethodRequired')
        ]),
        client_secret: Type.Optional(Type.String())
      })
    }),
    500: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
