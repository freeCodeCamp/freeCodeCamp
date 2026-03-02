import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../../exam-environment/utils/errors.js';

export const userExamEnvironmentToken = {
  response: {
    201: Type.Object({
      examEnvironmentAuthorizationToken: Type.String()
    }),
    403: STANDARD_ERROR
    // default: STANDARD_ERROR
  }
};

export const getUserExamEnvironmentToken = {
  response: {
    200: Type.Object({
      examEnvironmentAuthorizationToken: Type.String()
    }),
    404: STANDARD_ERROR
  }
};
