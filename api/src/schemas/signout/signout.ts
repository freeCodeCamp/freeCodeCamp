import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types.js';

export const signout = {
  response: {
    200: Type.Object({}),
    default: genericError
  }
};
