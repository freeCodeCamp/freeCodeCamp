import { Type } from '@fastify/type-provider-typebox';
import { DailyCodingChallengeLanguage } from '@prisma/client';

const languages = Object.values(DailyCodingChallengeLanguage).map(k =>
  Type.Literal(k)
);

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
    })
  }
};
