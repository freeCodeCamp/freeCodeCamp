import { Type } from '@fastify/type-provider-typebox';

export const updateMyAbout = {
  body: Type.Object({
    // TODO(Post-MVP): make these required
    about: Type.Optional(Type.String()),
    name: Type.Optional(Type.String()),
    picture: Type.Optional(Type.String()),
    location: Type.Optional(Type.String())
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.updated-about-me'),
      type: Type.Literal('success')
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
