import { Type } from '@fastify/type-provider-typebox';
import { generic500 } from '../types';

export const deleteUserToken = {
  response: {
    200: Type.Object({
      userToken: Type.Null()
    }),
    404: Type.Object({
      message: Type.Literal('userToken not found'),
      type: Type.Literal('info')
    }),
    500: generic500
  }
};
