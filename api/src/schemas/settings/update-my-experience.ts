import { Type } from '@fastify/type-provider-typebox';

export const updateMyExperience = {
  body: Type.Object({
    experience: Type.Array(
      Type.Object(
        {
          id: Type.String(),
          title: Type.String(),
          company: Type.String(),
          location: Type.Optional(Type.String()),
          startDate: Type.String(),
          endDate: Type.Optional(Type.String()),
          description: Type.String()
        },
        { additionalProperties: false }
      )
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
