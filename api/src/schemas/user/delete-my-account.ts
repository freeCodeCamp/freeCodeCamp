import { Type } from '@fastify/type-provider-typebox';
import { generic500 } from '../types';

export const deleteMyAccount = {
  response: {
    200: Type.Object({}),
    500: generic500
  }
};
