import { Type } from '@fastify/type-provider-typebox';

export const examEnvironmentPostExamGenerate = {
  response: {
    200: Type.Object({}),
    500: Type.Object({})
  }
};
