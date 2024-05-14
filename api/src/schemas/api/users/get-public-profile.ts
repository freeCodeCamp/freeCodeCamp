import { Type } from '@fastify/type-provider-typebox';
import { profileUI } from '../../types';

export const getPublicProfile = {
  querystring: Type.Object({
    username: Type.String({ minLength: 1 })
  }),
  response: {
    200: Type.Union([
      Type.Object({
        entities: Type.Object({
          user: Type.Record(
            Type.String(),
            Type.Object({
              isLocked: Type.Boolean(),
              profileUI,
              username: Type.String()
            })
          )
        }),
        result: Type.String()
      }),
      // TODO: replace Any with real type.
      Type.Object({ entities: Type.Any(), result: Type.String() })
    ]),
    // We can't simply have Type.Object({}), even though that's correct, because
    // TypeScript will then accept all responses (since every object can be
    // assigned to {})
    400: Type.Object({ entities: Type.Optional(Type.Never()) }),
    404: Type.Object({ entities: Type.Optional(Type.Never()) })
  }
};
