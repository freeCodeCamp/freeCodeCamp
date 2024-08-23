import {
  EnvConfig,
  EnvExam,
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
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 2
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
          startTime: 0,
          endTime: null,
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

export const exam: EnvExam = {
  id: examId,
  config,
  questionSets
};
