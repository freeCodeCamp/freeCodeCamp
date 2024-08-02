import { Type } from '@fastify/type-provider-typebox';
import { CODE } from '../utils/exam';

export const examEnvironmentPostExamAttempt = {
  response: {
    200: Type.Object({
      code: Type.Enum(CODE)
    })
  }
};
