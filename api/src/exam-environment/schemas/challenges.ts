import { Type } from '@fastify/type-provider-typebox';
// import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentGetExamChallenge = {
  querystring: Type.Object({
    challengeId: Type.Optional(Type.String({ format: 'objectid' })),
    examId: Type.Optional(Type.String({ format: 'objectid' }))
  })
  // response: {
  //   200: examEnvAttempt,
  //   default: STANDARD_ERROR
  // }
};
