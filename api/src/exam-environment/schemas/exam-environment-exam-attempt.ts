import { Type } from '@fastify/type-provider-typebox';
import { STANDARD_ERROR } from '../utils/errors';

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
  startTimeInMS: Type.Number(),
  questionSets: Type.Array(
    Type.Object({
      id: Type.String(),
      questions: Type.Array(
        Type.Object({
          id: Type.String(),
          answers: Type.Array(Type.String()),
          submissionTimeInMS: Type.Number()
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
  ])
});

export const examEnvironmentGetExamAttempts = {
  headers: Type.Object({
    'exam-environment-authorization-token': Type.String()
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
    'exam-environment-authorization-token': Type.String()
  }),
  response: {
    200: examEnvAttempt,
    default: STANDARD_ERROR
  }
};
