import { Type } from '@fastify/type-provider-typebox';

export const addDonation = {
  body: Type.Object({}),
  response: {
    200: Type.Object({
      isDonating: Type.Boolean()
    }),
    400: Type.Object({
      message: Type.Literal('User is already donating.'),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      message: Type.Literal('Something went wrong.'),
      type: Type.Literal('danger')
    })
  }
};
