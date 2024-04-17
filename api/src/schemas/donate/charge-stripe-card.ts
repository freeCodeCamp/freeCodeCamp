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
      message: Type.String(),
      type: Type.Literal('info')
    }),
    402: Type.Object({
      message: Type.String(),
      type: Type.String(),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      client_secret: Type.Optional(Type.String())
    }),
    500: Type.Object({
      message: Type.String(),
      type: Type.Literal('danger')
    })
  }
};
