import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../../exam-environment/utils/errors';

export const userExamEnvironmentToken = {
  response: {
    201: Type.Object({
      examEnvironmentAuthorizationToken: Type.String()
    }),
    403: STANDARD_ERROR
    // default: STANDARD_ERROR
  }
};
