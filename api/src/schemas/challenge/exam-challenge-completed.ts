import { Type } from '@fastify/type-provider-typebox';
import { examResults, genericError } from '../types';

export const examChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
    challengeType: Type.Number(),
    userCompletedExam: Type.Object({
      examTimeInSeconds: Type.Number(),
      userExamQuestions: Type.Array(
        Type.Object({
          id: Type.String(),
          question: Type.String(),
          answer: Type.Object({
            id: Type.String(),
            answer: Type.String()
          })
        }),
        { minItems: 1 }
      )
    })
  }),
  response: {
    200: Type.Object({
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean(),
      examResults
    }),
    400: Type.Object({
      error: Type.String()
    }),
    403: Type.Union([
      Type.Object({
        error: Type.String()
      }),
      genericError
    ]),
    500: Type.Object({
      error: Type.String()
    })
  }
};
