import { Type } from '@fastify/type-provider-typebox';

export const examEnvironmentPostExamGenerate = {
  body: Type.Object({
    examId: Type.String()
  }),
  response: {
    200: Type.Object({}),
    500: Type.Object({})
  }
};
