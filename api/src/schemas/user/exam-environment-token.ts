import { Type } from '@fastify/type-provider-typebox';
import { CODE } from '../../exam-environment/utils/exam';

export const userExamEnvironmentToken = {
  response: {
    200: Type.Object({
      code: Type.Enum(CODE),
      data: Type.Object({
        examEnvironmentAuthorizationToken: Type.String()
      })
    })
  }
};
