import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

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
          Type.Literal('MethodRestrictionError'),
          Type.Literal('EmailRequiredError')
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
    403: genericError,
    409: Type.Object({
      error: Type.Object({
        message: Type.String(),
        type: Type.Literal('AlreadyDonatingError')
      })
    }),
    500: Type.Object({
      error: Type.Literal('Donation failed due to a server error.')
    })
  }
};
