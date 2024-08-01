import { Type } from '@fastify/type-provider-typebox';
import { CODE } from '../../utils/new-exam';

export const examEnvironmentTokenGenerate = {
  response: {
    200: Type.Object({
      code: Type.Enum(CODE)
    })
  }
};
