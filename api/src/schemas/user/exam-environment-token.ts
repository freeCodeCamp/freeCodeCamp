import { Type } from '@fastify/type-provider-typebox';

export const userExamEnvironmentToken = {
  response: {
    200: Type.Object({
      examEnvironmentAuthorizationToken: Type.String()
    })
  }
};
