import { Type } from '@fastify/type-provider-typebox';

export const updateMyHonesty = {
  body: Type.Object({
    isHonest: Type.Literal(true)
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('buttons.accepted-honesty'),
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
