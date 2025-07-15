import { Type } from '@fastify/type-provider-typebox';

const challengeLanguage = Type.Object({
  tests: Type.Array(
    Type.Object({
      text: Type.String(),
      testString: Type.String()
    })
  ),
  challengeFiles: Type.Array(
    Type.Object({
      contents: Type.String(),
      fileKey: Type.String()
    })
  )
});

const singleChallenge = Type.Object({
  id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
  date: Type.String(),
  challengeNumber: Type.Number(),
  title: Type.String(),
  description: Type.String(),
  javascript: challengeLanguage,
  python: challengeLanguage
});

const date = {
  params: Type.Object({
    date: Type.String({ format: 'date' })
  }),
  response: {
    200: singleChallenge,
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Invalid date format. Please use YYYY-MM-DD.')
    }),
    404: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Challenge not found.')
    }),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Internal server error.')
    })
  }
};

const today = {
  response: {
    200: singleChallenge,
    404: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Challenge not found.')
    }),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Internal server error.')
    })
  }
};

const all = {
  response: {
    200: Type.Array(
      Type.Object({
        id: Type.String(),
        date: Type.String(),
        challengeNumber: Type.Number(),
        title: Type.String()
      })
    ),
    404: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('No challenges found.')
    }),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Internal server error.')
    })
  }
};

const newest = {
  response: {
    200: Type.Object({
      date: Type.String({ format: 'date-time' })
    }),
    404: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('No challenges found.')
    }),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('Internal server error.')
    })
  }
};

export const dailyCodingChallenge = {
  date,
  today,
  newest,
  all
};
