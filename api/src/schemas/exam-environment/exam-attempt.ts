import { Type } from '@fastify/type-provider-typebox';

export const examEnvironmentPostExamAttempt = {
  response: {
    200: Type.Object({}),
    500: Type.Object({})
  }
};
