import {
  EnvConfig,
  EnvExam,
  EnvExamAttempt,
  EnvGeneratedExam,
  EnvQuestionSet,
  EnvQuestionType
} from '@prisma/client';
import { ObjectId } from 'mongodb';

const oid = () => new ObjectId().toString();

export const examId = oid();

export const config: EnvConfig = {
  totalTimeInMS: 1234567890,
  tags: [],
  name: 'Test Exam',
  note: 'Some exam note...',
  questionSets: [
    {
      type: EnvQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    },
    {
      type: EnvQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 2,
      numberOfIncorrectAnswers: 1
    },
    {
      type: EnvQuestionType.Dialogue,
      numberOfSet: 1,
      numberOfQuestions: 2,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    }
  ]
};

export const questionSets: EnvQuestionSet[] = [
  {
    id: oid(),
    type: EnvQuestionType.MultipleChoice,
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
    type: EnvQuestionType.MultipleChoice,
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
    type: EnvQuestionType.Dialogue,
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
          startTimeInMS: 0,
          endTimeInMS: null,
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

export const generatedExam: EnvGeneratedExam = {
  examId,
  id: oid(),
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
  ]
};

export const examAttempt: EnvExamAttempt = {
  examId,
  generatedExamId: generatedExam.id,
  id: oid(),
  needsRetake: false,
  questionSets: [
    {
      id: generatedExam.questionSets[0]!.id,
      questions: [
        {
          id: generatedExam.questionSets[0]!.questions[0]!.id,
          answers: [generatedExam.questionSets[0]!.questions[0]!.answers[0]!],
          submissionTimeInMS: Date.now()
        }
      ]
    },
    {
      id: generatedExam.questionSets[1]!.id,
      questions: [
        {
          id: generatedExam.questionSets[1]!.questions[0]!.id,
          answers: [generatedExam.questionSets[1]!.questions[0]!.answers[1]!],
          submissionTimeInMS: Date.now()
        }
      ]
    },
    {
      id: generatedExam.questionSets[2]!.id,
      questions: [
        {
          id: generatedExam.questionSets[2]!.questions[0]!.id,
          answers: [generatedExam.questionSets[2]!.questions[0]!.answers[1]!],
          submissionTimeInMS: Date.now()
        },
        {
          id: generatedExam.questionSets[2]!.questions[1]!.id,
          answers: [generatedExam.questionSets[2]!.questions[1]!.answers[0]!],
          submissionTimeInMS: Date.now()
        }
      ]
    }
  ],
  startTimeInMS: Date.now(),
  userId: oid(),
  submissionTimeInMS: null
};

export const exam: EnvExam = {
  id: examId,
  config,
  questionSets
};
