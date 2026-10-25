import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

// PayPal donations are granted by the subscription activation webhook, so the
// only payment the client reports here is a card payment it had to complete
// 3D Secure for.
export const addDonation = {
  body: Type.Object({
    amount: Type.Number(),
    duration: Type.String(),
    stripePaymentIntentId: Type.String()
  }),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean()
    }),
    403: genericError,
    409: Type.Object({
      message: Type.Literal('User is already donating.'),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      message: Type.Literal('Something went wrong.'),
      type: Type.Literal('danger')
    })
  }
};
