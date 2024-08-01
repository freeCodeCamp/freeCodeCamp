import { Type } from '@fastify/type-provider-typebox';
import { CODE } from '../../utils/new-exam';

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
        code: Type.Enum(CODE)
      }),
      Type.Object({
        code: Type.Enum(CODE),
        message: Type.String()
      })
    ]),
    403: Type.Object({
      code: Type.Enum(CODE),
      message: Type.String()
    })
  }
};
