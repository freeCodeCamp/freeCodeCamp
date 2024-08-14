import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentPostExamAttempt = {
  body: Type.Object({
    // TODO: Find a way to use Prisma `NewExamAttempt` type
    attempt: Type.Object({
      id: Type.String(),
      exam_id: Type.String(),
      generated_exam_id: Type.String(),
      user_id: Type.String(),
      question_types: Type.Array(
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
