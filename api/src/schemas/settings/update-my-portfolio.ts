import { Type } from '@fastify/type-provider-typebox';

export const updateMyPortfolio = {
  body: Type.Object({
    portfolio: Type.Array(
      Type.Object({
        description: Type.Optional(Type.String()),
        id: Type.Optional(Type.String()),
        image: Type.Optional(Type.String()),
        title: Type.Optional(Type.String()),
        url: Type.Optional(Type.String())
      })
    )
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.portfolio-item-updated'),
      type: Type.Literal('success')
    }),
    // TODO(Post-MVP): give more detailed response (i.e. which item is
    // missing)
    400: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    }),
    // TODO(Post-MVP): differentiate with more than just the status
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
