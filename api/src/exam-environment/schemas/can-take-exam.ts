import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';
export const examEnvironmentCanTakeExam = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Union([
      Type.Object({
        data: Type.Object({
          availableExams: Type.Array(
            Type.Object({
              examId: Type.String(),
              examName: Type.String(),
              canTake: Type.Boolean()
            })
          )
        })
      }),
      STANDARD_ERROR
    ])
  }
};
