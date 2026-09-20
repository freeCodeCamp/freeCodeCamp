import { Type } from '@fastify/type-provider-typebox';

export const deleteMsUsername = {
  response: {
    200: Type.Object({ msUsername: Type.Null() }),
    500: Type.Object({
      message: Type.Literal('flash.ms.transcript.unlink-err'),
      type: Type.Literal('error')
    })
  }
};
