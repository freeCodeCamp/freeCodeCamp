import { Type } from '@fastify/type-provider-typebox';
// import { CODE } from '../utils/exam';

export const examEnvironmentPostExamGenerate = {
  body: Type.Object({
    examId: Type.String()
  }),
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  })
  // response: {
  //   200: Type.Object({
  //     code: Type.Enum(CODE),
  //     data: Type.Object({
  //       exam: Type.Record(Type.String(), Type.Unknown()),
  //       examAttempt: Type.Record(Type.String(), Type.Unknown())
  //     })
  //   }),
  //   404: Type.Object({
  //     code: Type.Enum(CODE),
  //     message: Type.String()
  //   }),
  //   403: Type.Object({
  //     code: Type.Enum(CODE),
  //     message: Type.String()
  //   }),
  //   500: Type.Object({
  //     code: Type.Optional(Type.Enum(CODE)),
  //     message: Type.String()
  //   })
  // }
};
