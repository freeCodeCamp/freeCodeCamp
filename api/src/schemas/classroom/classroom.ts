import { Type } from '@fastify/type-provider-typebox';
export const classroomGetUserIdSchema = {
  body: Type.Object({
    email: Type.String({ format: 'email', maxLength: 1024 })
  }),
  response: {
    200: Type.Object({ userId: Type.String() }),
    400: Type.Object({ error: Type.String() }),
    401: Type.Object({ error: Type.String() }),
    500: Type.Object({ error: Type.String() })
  }
};
export const classroomGetUserDataSchema = {
  body: Type.Object({
    userIds: Type.Array(
      Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
      { maxItems: 50 }
    )
  }),
  response: {
    200: Type.Object({
      data: Type.Record(
        Type.String({ maxLength: 24 }),
        Type.Array(
          Type.Object({
            id: Type.String(),
            completedDate: Type.Number()
          })
        ),
        { propertyNames: { maxLength: 24 } }
      )
    }),
    400: Type.Object({ error: Type.String() }),
    401: Type.Object({ error: Type.String() }),
    500: Type.Object({ error: Type.String() })
  }
};
