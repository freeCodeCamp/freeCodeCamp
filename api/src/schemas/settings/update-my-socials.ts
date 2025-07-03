import { Type } from '@fastify/type-provider-typebox';

const urlOrEmptyString = Type.Union([
  Type.Literal(''),
  Type.String({ format: 'uri', maxLength: 1024 })
]);

export const updateMySocials = {
  body: Type.Object({
    website: urlOrEmptyString,
    twitter: urlOrEmptyString,
    githubProfile: urlOrEmptyString,
    linkedin: urlOrEmptyString
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
