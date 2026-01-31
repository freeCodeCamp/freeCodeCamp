import { Type } from '@fastify/type-provider-typebox';

export const updateMyEducation = {
  body: Type.Object({
    education: Type.Array(
      Type.Object(
        {
          id: Type.String(),
          school: Type.String(),
          degree: Type.String(),
          fieldOfStudy: Type.Optional(Type.String()),
          location: Type.Optional(Type.String()),
          startDate: Type.Optional(Type.String()),
          endDate: Type.Optional(Type.String()),
          description: Type.Optional(Type.String())
        },
        { additionalProperties: false }
      )
    )
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.education-updated'),
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
