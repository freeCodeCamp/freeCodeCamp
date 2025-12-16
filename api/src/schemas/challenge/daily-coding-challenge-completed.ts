import { Type } from '@fastify/type-provider-typebox';

// This has to be declared as a tuple, because Type.Union expects a
// tuple of types, not an array of unions of said types.
const languages: [Type.TLiteral<'javascript'>, Type.TLiteral<'python'>] = [
  Type.Literal('javascript'),
  Type.Literal('python')
];

export const dailyCodingChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
    language: Type.Union(languages)
  }),
  response: {
    200: Type.Object({
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean(),
      completedDailyCodingChallenges: Type.Array(
        Type.Object({
          id: Type.String(),
          completedDate: Type.Number(),
          languages: Type.Array(Type.Union(languages))
        })
      )
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'That does not appear to be a valid challenge submission.'
      )
    }),
    403: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'Exam submissions are not allowed on this endpoint.'
      )
    })
  }
};
