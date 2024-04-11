import { Type } from '@fastify/type-provider-typebox';

export const exam = {
  params: Type.Object({
    id: Type.String({
      format: 'objectid',
      maxLength: 24,
      minLength: 24
    })
  }),
  response: {
    200: Type.Object({
      generatedExam: Type.Array(
        Type.Object({
          id: Type.String(),
          question: Type.String(),
          answers: Type.Array(
            Type.Object({
              id: Type.String(),
              answer: Type.String()
            })
          )
        })
      )
    }),
    // TODO: Standardize error responses - e.g. { type, message }
    400: Type.Object({
      error: Type.String()
    }),
    403: Type.Object({
      error: Type.String()
    }),
    500: Type.Object({
      error: Type.String()
    })
  }
};
