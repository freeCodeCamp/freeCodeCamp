import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentTokenMeta = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Object({
      expireAt: Type.String({ format: 'date-time' })
    }),
    404: STANDARD_ERROR,
    418: STANDARD_ERROR
  }
};
