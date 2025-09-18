import { Type } from '@fastify/type-provider-typebox';
// import { STANDARD_ERROR } from '../utils/errors';

export const examEnvironmentGetExamIdsByChallengeId = {
  params: Type.Object({
    challengeId: Type.String({ format: 'objectid' })
  })
  // response: {
  //   200: examEnvAttempt,
  //   default: STANDARD_ERROR
  // }
};
