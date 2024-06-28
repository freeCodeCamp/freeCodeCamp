import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const deleteMyAccount = {
  response: {
    200: Type.Object({}),
    default: genericError
  }
};
