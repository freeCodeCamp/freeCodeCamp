import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors.js';

export const examEnvironmentPostExamAttempt = {
  body: Type.Object({
    attempt: Type.Object({
      examId: Type.String({ format: 'objectid' }),
      questionSets: Type.Array(
        Type.Object({
          id: Type.String({ format: 'objectid' }),
          questions: Type.Array(
            Type.Object({
              id: Type.String({ format: 'objectid' }),
              answers: Type.Array(Type.String({ format: 'objectid' }))
            })
          )
        })
      )
    })
  }),
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    default: STANDARD_ERROR
  }
};

const examEnvAttempt = Type.Object({
  id: Type.String(),
  examId: Type.String(),
  startTime: Type.String({ format: 'date-time' }),
  questionSets: Type.Array(
    Type.Object({
      id: Type.String(),
      questions: Type.Array(
        Type.Object({
          id: Type.String(),
          answers: Type.Array(Type.String()),
          submissionTime: Type.String({ format: 'date-time' })
        })
      )
    })
  ),
  result: Type.Union([
    Type.Null(),
    Type.Object({
      score: Type.Number(),
      passingPercent: Type.Number()
    })
  ]),
  version: Type.Number(),
  status: Type.Enum(['InProgress', 'PendingModeration', 'Approved', 'Denied'])
});

export const examEnvironmentGetExamAttempts = {
  headers: Type.Object({
    // Optional, because the handler is used in both the `/user/` base and `/exam-environment/` base
    // If it is missing, auth will catch.
    'exam-environment-authorization-token': Type.Optional(Type.String())
  }),
  response: {
    200: Type.Array(examEnvAttempt),
    default: STANDARD_ERROR
  }
};

export const examEnvironmentGetExamAttempt = {
  params: Type.Object({
    attemptId: Type.String({ format: 'objectid' })
  }),
  headers: Type.Object({
    // Optional, because the handler is used in both the `/user/` base and `/exam-environment/` base.
    // If it is missing, auth will catch.
    'exam-environment-authorization-token': Type.Optional(Type.String())
  }),
  response: {
    200: examEnvAttempt,
    default: STANDARD_ERROR
  }
};

export const examEnvironmentGetExamAttemptsByExamId = {
  params: Type.Object({
    examId: Type.String({ format: 'objectid' })
  }),
  headers: Type.Object({
    // Optional, because the handler is used in both the `/user/` base and `/exam-environment/` base.
    // If it is missing, auth will catch.
    'exam-environment-authorization-token': Type.Optional(Type.String())
  }),
  response: {
    200: Type.Array(examEnvAttempt)
    //   default: STANDARD_ERROR
  }
};
