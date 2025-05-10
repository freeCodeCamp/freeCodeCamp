import { Type } from '@fastify/type-provider-typebox';

export const dailyCodingChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
    challengeType: Type.Number(),
    language: Type.Union([Type.Literal('javascript'), Type.Literal('python')])
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
          completedLanguages: Type.Array(
            Type.Union([Type.Literal('javascript'), Type.Literal('python')])
          )
        })
      )
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal(
        'That does not appear to be a valid challenge submission.'
      )
    })
  }
};
