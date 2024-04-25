import { Type } from '@fastify/type-provider-typebox';

export const updateMySocials = {
  body: Type.Object({
    website: Type.Optional(Type.String({ format: 'url', maxLength: 1024 })),
    twitter: Type.Optional(Type.String({ format: 'url', maxLength: 1024 })),
    githubProfile: Type.Optional(
      Type.String({ format: 'url', maxLength: 1024 })
    ),
    linkedin: Type.Optional(Type.String({ format: 'url', maxLength: 1024 }))
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.updated-socials'),
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
