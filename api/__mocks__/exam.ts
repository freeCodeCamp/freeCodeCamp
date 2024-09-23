export const examChallengeId = '647e22d18acb466c97ccbef8';

export const examJson = {
  id: examChallengeId,
  title: 'Exam Certification',
  numberOfQuestionsInExam: 3,
  passingPercent: 10,
  prerequisites: [
    {
      id: '647f85d407d29547b3bee1bb',
      title: 'challenge-title'
    }
  ],
  questions: [
    {
      id: '3bbl2mx2mq',
      question: 'Question 1?',
      wrongAnswers: [
        { id: 'ex7hii9zup', answer: 'Q1: Wrong Answer 1' },
        { id: 'lmr1ew7m67', answer: 'Q1: Wrong Answer 2' },
        { id: 'qh5sz9qdiq', answer: 'Q1: Wrong Answer 3' },
        { id: 'g489kbwn6a', answer: 'Q1: Wrong Answer 4' },
        { id: '7vu84wl4lc', answer: 'Q1: Wrong Answer 5' },
        { id: 'em59kw6avu', answer: 'Q1: Wrong Answer 6' }
      ],
      correctAnswers: [
        { id: 'dzlokqdc73', answer: 'Q1: Correct Answer 1' },
        { id: 'f5gk39ske9', answer: 'Q1: Correct Answer 2' }
      ]
    },
    {
      id: 'oqis5gzs0h',
      question: 'Question 2?',
      wrongAnswers: [
        { id: 'ojhnoxh5r5', answer: 'Q2: Wrong Answer 1' },
        { id: 'onx06if0uh', answer: 'Q2: Wrong Answer 2' },
        { id: 'zbxnsko712', answer: 'Q2: Wrong Answer 3' },
        { id: 'bqv5y68jyp', answer: 'Q2: Wrong Answer 4' },
        { id: 'i5xipitiss', answer: 'Q2: Wrong Answer 5' },
        { id: 'wycrnloajd', answer: 'Q2: Wrong Answer 6' }
      ],
      correctAnswers: [
        { id: 't9ezcsupdl', answer: 'Q2: Correct Answer 1' },
        { id: 'agert35dk0', answer: 'Q2: Correct Answer 2' }
      ]
    },
    {
      id: 'oqis5gzs0a',
      question: 'Question 3?',
      wrongAnswers: [
        { id: 'ojhnoxh5ra', answer: 'Q3: Wrong Answer 1' },
        { id: 'onx06if0ub', answer: 'Q3: Wrong Answer 2' },
        { id: 'zbxnsko71c', answer: 'Q3: Wrong Answer 3' },
        { id: 'bqv5y68jyd', answer: 'Q3: Wrong Answer 4' },
        { id: 'i5xipitise', answer: 'Q3: Wrong Answer 5' },
        { id: 'wycrnloajf', answer: 'Q3: Wrong Answer 6' }
      ],
      correctAnswers: [
        { id: 't9ezcsupda', answer: 'Q3: Correct Answer 1' },
        { id: 'agert35dkb', answer: 'Q3: Correct Answer 2' }
      ]
    }
  ]
};

export const completedTrophyChallenges = [
  {
    id: '647f85d407d29547b3bee1bb',
    solution: 'challenge-solution',
    completedDate: 1695064765244,
    files: []
  }
];

export type ExamSubmission = {
  userExamQuestions: {
    id: string;
    question: string;
    answer: {
      id: string;
      answer: string;
    };
  }[];
  examTimeInSeconds: number;
};

// failed: 0 correct
export const examWithZeroCorrect: ExamSubmission = {
  userExamQuestions: [
    {
      id: '3bbl2mx2mq',
      question: 'Question 1?',
      answer: { id: 'g489kbwn6a', answer: 'Q1: Wrong Answer 4' }
    },
    {
      id: 'oqis5gzs0h',
      question: 'Question 2?',
      answer: { id: 'i5xipitiss', answer: 'Q2: Wrong Answer 5' }
    },
    {
      id: 'oqis5gzs0a',
      question: 'Question 3?',
      answer: { id: 'ojhnoxh5ra', answer: 'Q3: Wrong Answer 1' }
    }
  ],
  examTimeInSeconds: 20
};

// passed: 1 correct
export const examWithOneCorrect: ExamSubmission = {
  userExamQuestions: [
    {
      id: '3bbl2mx2mq',
      question: 'Question 1?',
      answer: { id: 'dzlokqdc73', answer: 'Q1: Correct Answer 1' }
    },
    {
      id: 'oqis5gzs0h',
      question: 'Question 2?',
      answer: { id: 'i5xipitiss', answer: 'Q2: Wrong Answer 5' }
    },
    {
      id: 'oqis5gzs0a',
      question: 'Question 3?',
      answer: { id: 'ojhnoxh5ra', answer: 'Q3: Wrong Answer 1' }
    }
  ],
  examTimeInSeconds: 20
};

// passed: 2 correct
export const examWithTwoCorrect: ExamSubmission = {
  userExamQuestions: [
    {
      id: '3bbl2mx2mq',
      question: 'Question 1?',
      answer: { id: 'dzlokqdc73', answer: 'Q1: Correct Answer 1' }
    },
    {
      id: 'oqis5gzs0h',
      question: 'Question 2?',
      answer: { id: 't9ezcsupdl', answer: 'Q2: Correct Answer 1' }
    },
    {
      id: 'oqis5gzs0a',
      question: 'Question 3?',
      answer: { id: 'ojhnoxh5ra', answer: 'Q3: Wrong Answer 1' }
    }
  ],
  examTimeInSeconds: 20
};

// passed: 3 correct
export const examWithAllCorrect: ExamSubmission = {
  userExamQuestions: [
    {
      id: '3bbl2mx2mq',
      question: 'Question 1?',
      answer: { id: 'dzlokqdc73', answer: 'Q1: Correct Answer 1' }
    },
    {
      id: 'oqis5gzs0h',
      question: 'Question 2?',
      answer: { id: 't9ezcsupdl', answer: 'Q2: Correct Answer 1' }
    },
    {
      id: 'oqis5gzs0a',
      question: 'Question 3?',
      answer: { id: 'agert35dkb', answer: 'Q3: Correct Answer 2' }
    }
  ],
  examTimeInSeconds: 20
};

export const mockResultsZeroCorrect = {
  numberOfCorrectAnswers: 0,
  numberOfQuestionsInExam: 3,
  percentCorrect: 0,
  passingPercent: 10,
  passed: false,
  examTimeInSeconds: 20
};

export const mockResultsOneCorrect = {
  numberOfCorrectAnswers: 1,
  numberOfQuestionsInExam: 3,
  percentCorrect: 33.3,
  passingPercent: 10,
  passed: true,
  examTimeInSeconds: 20
};

export const mockResultsTwoCorrect = {
  numberOfCorrectAnswers: 2,
  numberOfQuestionsInExam: 3,
  percentCorrect: 66.7,
  passingPercent: 10,
  passed: true,
  examTimeInSeconds: 20
};

export const mockResultsAllCorrect = {
  numberOfCorrectAnswers: 3,
  numberOfQuestionsInExam: 3,
  percentCorrect: 100,
  passingPercent: 10,
  passed: true,
  examTimeInSeconds: 20
};

const completedExamChallenge = {
  id: examChallengeId,
  challengeType: 17,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  completedDate: expect.any(Number)
};

export const completedExamChallengeOneCorrect = {
  ...completedExamChallenge,
  examResults: mockResultsOneCorrect
};

export const completedExamChallengeTwoCorrect = {
  ...completedExamChallenge,
  examResults: mockResultsTwoCorrect
};

export const completedExamChallengeAllCorrect = {
  ...completedExamChallenge,
  examResults: mockResultsAllCorrect
};
