import { Type } from '@fastify/type-provider-typebox';

export const updateMyPrivacyTerms = {
  body: Type.Object({
    quincyEmails: Type.Boolean()
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.privacy-updated'),
      type: Type.Literal('success')
    }),
    400: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
