import { Type } from '@fastify/type-provider-typebox';
// import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentGetChallengeById = {
  params: Type.Object({
    challengeId: Type.String({ format: 'objectid' })
  }),
  headers: Type.Object({
    // Optional, because the handler is used in both the `/user/` base and `/exam-environment/` base.
    // If it is missing, auth will catch.
    'exam-environment-authorization-token': Type.Optional(Type.String())
  })
  // response: {
  //   200: examEnvAttempt,
  //   default: STANDARD_ERROR
  // }
};

export const examEnvironmentGetExamsByChallengeId = {
  params: Type.Object({
    challengeId: Type.String({ format: 'objectid' })
  }),
  headers: Type.Object({
    // Optional, because the handler is used in both the `/user/` base and `/exam-environment/` base.
    // If it is missing, auth will catch.
    'exam-environment-authorization-token': Type.Optional(Type.String())
  })
  // response: {
  //   200: examEnvAttempt,
  //   default: STANDARD_ERROR
  // }
};
