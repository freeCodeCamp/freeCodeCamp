import { Type } from '@fastify/type-provider-typebox';
import { CODE } from '../utils/exam';

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
    200: Type.Object({
      code: Type.Enum(CODE)
    })
  }
};
