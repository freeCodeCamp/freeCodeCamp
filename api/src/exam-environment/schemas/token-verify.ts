import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentTokenVerify = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Object({
      data: Type.String()
    }),
    403: STANDARD_ERROR
  }
};
