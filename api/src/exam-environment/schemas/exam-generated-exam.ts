import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentPostExamGeneratedExam = {
  body: Type.Object({
    examId: Type.String()
  }),
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Object({
      data: Type.Object({
        exam: Type.Record(Type.String(), Type.Unknown()),
        examAttempt: Type.Record(Type.String(), Type.Unknown())
      })
    }),
    403: STANDARD_ERROR,
    404: STANDARD_ERROR,
    429: STANDARD_ERROR,
    500: STANDARD_ERROR
  }
};
