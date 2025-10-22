import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const deleteMyAccount = {
  response: {
    200: Type.Object({}),
    default: genericError
  }
};

export const deleteUser = {
  params: Type.Object({
    userId: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
  }),
  response: {
    204: Type.Null(),
    default: Type.Object({
      type: Type.String(),
      message: Type.String()
    })
  }
};
