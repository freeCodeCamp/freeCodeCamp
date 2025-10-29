import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors.js';
export const examEnvironmentExams = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.Optional(Type.String())
  }),
  response: {
    200: Type.Array(
      Type.Object({
        id: Type.String(),
        config: Type.Object({
          name: Type.String(),
          note: Type.String(),
          totalTimeInS: Type.Number(),
          retakeTimeInS: Type.Number(),
          passingPercent: Type.Number()
        }),
        canTake: Type.Boolean(),
        prerequisites: Type.Array(Type.String())
      })
    ),
    500: STANDARD_ERROR
  }
};
