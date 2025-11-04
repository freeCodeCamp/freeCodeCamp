import { Type } from '@fastify/type-provider-typebox';

export const updateMyExperience = {
  body: Type.Object({
    experience: Type.Array(
      Type.Object({
        id: Type.Optional(Type.String()),
        title: Type.Optional(Type.String()),
        company: Type.Optional(Type.String()),
        location: Type.Optional(Type.String()),
        startDate: Type.Optional(Type.String()),
        endDate: Type.Optional(Type.String()),
        description: Type.Optional(Type.String())
      })
    )
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.experience-updated'),
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
