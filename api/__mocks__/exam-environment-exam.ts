/* eslint-disable jsdoc/require-jsdoc */
import { Static } from '@fastify/type-provider-typebox';
import {
  ExamEnvironmentConfig,
  ExamEnvironmentQuestionType,
  ExamEnvironmentExamAttempt,
  ExamEnvironmentExam,
  ExamEnvironmentGeneratedExam,
  ExamEnvironmentQuestionSet,
  ExamEnvironmentChallenge
} from '@prisma/client';
import { ObjectId } from 'mongodb';
import { examEnvironmentPostExamAttempt } from '../src/exam-environment/schemas/index.js';

const defaultUserId = '5bd30e0f1caf6ac3ddddddb5';

export const oid = () => new ObjectId().toString();

export const examId = oid();

export const config = {
  totalTimeInS: 2 * 60 * 60,
  tags: [],
  name: 'Test Exam',
  note: 'Some exam note...',
  passingPercent: 80,
  questionSets: [
    {
      type: ExamEnvironmentQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    },
    {
      type: ExamEnvironmentQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 2,
      numberOfIncorrectAnswers: 1
    },
    {
      type: ExamEnvironmentQuestionType.Dialogue,
      numberOfSet: 1,
      numberOfQuestions: 2,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    }
  ],
  retakeTimeInS: 24 * 60 * 60
} satisfies ExamEnvironmentConfig;

export const questionSets: ExamEnvironmentQuestionSet[] = [
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.MultipleChoice,
    context: null,
    questions: [
      {
        id: oid(),
        tags: ['q1t1'],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.MultipleChoice,
    context: null,
    questions: [
      {
        id: oid(),
        tags: [],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.Dialogue,
    context: 'Dialogue 1 context',
    questions: [
      {
        id: oid(),
        tags: ['q1t1'],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      },
      {
        id: oid(),
        tags: ['q2t1', 'q2t2'],
        text: 'Question 2',
        deprecated: true,
        audio: {
          url: 'https://freecodecamp.org',
          captions: null
        },
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      },
      {
        id: oid(),
        tags: ['q3t1', 'q3t2'],
        text: 'Question 3',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  }
];

export const generatedExam: ExamEnvironmentGeneratedExam = {
  examId,
  id: oid(),
  deprecated: false,
  questionSets: [
    {
      id: questionSets[0]!.id,
      questions: [
        {
          id: questionSets[0]!.questions[0]!.id,
          answers: [
            questionSets[0]!.questions[0]!.answers[0]!.id,
            questionSets[0]!.questions[0]!.answers[1]!.id
          ]
        }
      ]
    },
    {
      id: questionSets[1]!.id,
      questions: [
        {
          id: questionSets[1]!.questions[0]!.id,
          answers: [
            questionSets[1]!.questions[0]!.answers[0]!.id,
            questionSets[1]!.questions[0]!.answers[1]!.id,
            questionSets[1]!.questions[0]!.answers[2]!.id
          ]
        }
      ]
    },
    {
      id: questionSets[2]!.id,
      questions: [
        {
          id: questionSets[2]!.questions[0]!.id,
          answers: [
            questionSets[2]!.questions[0]!.answers[0]!.id,
            questionSets[2]!.questions[0]!.answers[1]!.id,
            questionSets[2]!.questions[0]!.answers[2]!.id
          ]
        },
        {
          id: questionSets[2]!.questions[1]!.id,
          answers: [
            questionSets[2]!.questions[1]!.answers[0]!.id,
            questionSets[2]!.questions[1]!.answers[1]!.id,
            questionSets[2]!.questions[1]!.answers[2]!.id
          ]
        }
      ]
    }
  ],
  version: 2
};

export const examAttempt: ExamEnvironmentExamAttempt = {
  examId,
  generatedExamId: generatedExam.id,
  examModerationId: null,
  id: oid(),
  questionSets: [
    {
      id: generatedExam.questionSets[0]!.id,
      questions: [
        {
          id: generatedExam.questionSets[0]!.questions[0]!.id,
          answers: [generatedExam.questionSets[0]!.questions[0]!.answers[0]!],
          submissionTime: new Date()
        }
      ]
    },
    {
      id: generatedExam.questionSets[1]!.id,
      questions: [
        {
          id: generatedExam.questionSets[1]!.questions[0]!.id,
          answers: [generatedExam.questionSets[1]!.questions[0]!.answers[1]!],
          submissionTime: new Date()
        }
      ]
    },
    {
      id: generatedExam.questionSets[2]!.id,
      questions: [
        {
          id: generatedExam.questionSets[2]!.questions[0]!.id,
          answers: [generatedExam.questionSets[2]!.questions[0]!.answers[1]!],
          submissionTime: new Date()
        },
        {
          id: generatedExam.questionSets[2]!.questions[1]!.id,
          answers: [generatedExam.questionSets[2]!.questions[1]!.answers[0]!],
          submissionTime: new Date()
        }
      ]
    }
  ],
  startTime: new Date(),
  userId: defaultUserId,
  version: 2
};

export const examAttemptSansSubmissionTime: Static<
  typeof examEnvironmentPostExamAttempt.body
>['attempt'] = {
  examId,
  questionSets: [
    {
      id: generatedExam.questionSets[0]!.id,
      questions: [
        {
          id: generatedExam.questionSets[0]!.questions[0]!.id,
          answers: [generatedExam.questionSets[0]!.questions[0]!.answers[0]!]
        }
      ]
    },
    {
      id: generatedExam.questionSets[1]!.id,
      questions: [
        {
          id: generatedExam.questionSets[1]!.questions[0]!.id,
          answers: [generatedExam.questionSets[1]!.questions[0]!.answers[1]!]
        }
      ]
    },
    {
      id: generatedExam.questionSets[2]!.id,
      questions: [
        {
          id: generatedExam.questionSets[2]!.questions[0]!.id,
          answers: [generatedExam.questionSets[2]!.questions[0]!.answers[1]!]
        },
        {
          id: generatedExam.questionSets[2]!.questions[1]!.id,
          answers: [generatedExam.questionSets[2]!.questions[1]!.answers[0]!]
        }
      ]
    }
  ]
};

export const exam = {
  id: examId,
  config,
  questionSets,
  prerequisites: ['67112fe1c994faa2c26d0b1d'],
  deprecated: false,
  version: 2
} satisfies ExamEnvironmentExam;

export const examEnvironmentChallenge: ExamEnvironmentChallenge = {
  id: oid(),
  examId,
  // Id of the certified full stack developer exam challenge page
  challengeId: '645147516c245de4d11eb7ba',
  version: 1
};

export async function seedEnvExam() {
  await clearEnvExam();

  await fastifyTestInstance.prisma.examEnvironmentExam.create({
    data: exam
  });
  await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.create({
    data: generatedExam
  });

  // TODO: This would be nice to use, but the test logic for examAttempt need to account
  //       for dynamic ids.
  // let numberOfExamsGenerated = 0;
  // while (numberOfExamsGenerated < 2) {
  //   try {
  //     const generatedExam = generateExam(exam);
  //     await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.create({
  //       data: generatedExam
  //     });
  //     numberOfExamsGenerated++;
  //   } catch (_e) {
  //     //
  //   }
  // }
}

export async function clearEnvExam() {
  await fastifyTestInstance.prisma.examEnvironmentExamAttempt.deleteMany({});
  await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.deleteMany({});
  await fastifyTestInstance.prisma.examEnvironmentExam.deleteMany({});
}

export async function seedEnvExamAttempt() {
  await fastifyTestInstance.prisma.examEnvironmentExamAttempt.create({
    data: examAttempt
  });
}

export async function seedExamEnvExamAuthToken() {
  return fastifyTestInstance.prisma.examEnvironmentAuthorizationToken.create({
    data: { userId: defaultUserId, expireAt: new Date(Date.now() + 60000) }
  });
}
