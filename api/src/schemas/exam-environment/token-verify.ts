import { Type } from '@fastify/type-provider-typebox';

// const STANDARD_RESPONSE_TYPE = Type.Object({
//   data: Type.Optional(Type.Unknown()),
//   message: Type.Optional(Type.Object({ code: Type.String(), text: Type.String() })),
//   status: Type.Union([Type.Literal('success'), Type.Literal('error')])
// });

export const examEnvironmentTokenVerify = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: Type.Union([
      Type.Object({
        status: Type.Literal('success')
      }),
      Type.Object({
        status: Type.Literal('error'),
        message: Type.Object({ code: Type.String(), text: Type.String() })
      })
    ]),
    400: Type.Object({})
  }
};
