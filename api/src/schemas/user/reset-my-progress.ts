import { Type } from '@fastify/type-provider-typebox';
import { generic500 } from '../types';

export const resetMyProgress = {
  response: {
    200: Type.Object({}),
    500: generic500
  }
};
