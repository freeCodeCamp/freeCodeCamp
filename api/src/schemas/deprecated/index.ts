import { Type } from '@fastify/type-provider-typebox';

export const deprecatedEndpoints = {
  response: {
    410: Type.Object({
      message: Type.Object({
        type: Type.Literal('info'),
        message: Type.Literal(
          'Please reload the app, this feature is no longer available.'
        )
      })
    })
  }
};
