import { Type } from '@fastify/type-provider-typebox';

export const updateMyQuincyEmail = {
  body: Type.Object({
    sendQuincyEmail: Type.Boolean()
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.subscribe-to-quincy-updated'),
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
