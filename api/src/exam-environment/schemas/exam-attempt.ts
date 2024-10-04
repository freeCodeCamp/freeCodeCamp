import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentPostExamAttempt = {
  body: Type.Object({
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
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    // An empty 200 response cannot be typed 🤷‍♂️
    400: STANDARD_ERROR,
    403: STANDARD_ERROR,
    404: STANDARD_ERROR,
    500: STANDARD_ERROR
  }
};
