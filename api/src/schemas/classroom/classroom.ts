import { Type } from '@fastify/type-provider-typebox';
export const classroomGetUserIdSchema = {
  body: Type.Object({
    email: Type.String({ format: 'email', maxLength: 1024 })
  }),
  response: {
    200: Type.Object({ userId: Type.String() }),
    404: Type.Object({ error: Type.String() }),
    500: Type.Object({ error: Type.String() })
  }
};
export const classroomGetUserDataSchema = {
  body: Type.Object({
    userIds: Type.Array(Type.String(), { maxItems: 50 })
  }),
  response: {
    200: Type.Object({
      data: Type.Record(
        Type.String(),
        Type.Array(
          Type.Object({
            id: Type.String(),
            completedDate: Type.Number()
          })
        )
      )
    }),
    400: Type.Object({ error: Type.String() }),
    500: Type.Object({ error: Type.String() })
  }
};
