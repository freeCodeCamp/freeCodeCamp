import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentPostExamAttempt = {
  body: Type.Object({
    // TODO: Find a way to use Prisma `NewExamAttempt` type
    attempt: Type.Object({
      examId: Type.String(),
      questionSets: Type.Array(
        Type.Object({
          id: Type.String(),
          questions: Type.Array(
            Type.Object({
              id: Type.String(),
              answers: Type.Array(Type.String())
            })
          )
        })
      )
    })
  }),
  response: {
    400: STANDARD_ERROR,
    404: STANDARD_ERROR,
    500: STANDARD_ERROR
  }
};
