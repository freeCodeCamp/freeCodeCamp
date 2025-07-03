import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';
export const examEnvironmentExams = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Object({
      exams: Type.Array(
        Type.Object({
          id: Type.String(),
          config: Type.Object({
            name: Type.String(),
            note: Type.String(),
            totalTimeInMS: Type.Number(),
            retakeTimeInMS: Type.Number()
          }),
          canTake: Type.Boolean()
        })
      )
    }),
    500: STANDARD_ERROR
  }
};
