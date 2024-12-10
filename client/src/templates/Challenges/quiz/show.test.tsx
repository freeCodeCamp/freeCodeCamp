import { getAvailableQuizzes } from './show';

describe('getAvailableQuizzes', () => {
  it('should return the original quizzes array if the array contains only one item', () => {
    const originalQuizzes = [
      {
        questions: [
          {
            text: 'Minima totam deserunt rem repellat.',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      }
    ];

    const quizzes = getAvailableQuizzes({
      quizzes: originalQuizzes,
      attemptedQuiz: {
        challengeId: '66df3b712c41c499e9d31e5b',
        quizId: '0',
        timestamp: 1733523541773
      }
    });

    expect(quizzes).toEqual(originalQuizzes);
  });

  it('should return the original quizzes array if there is no previous attempt', () => {
    const originalQuizzes = [
      {
        questions: [
          {
            text: 'Minima totam deserunt rem repellat.',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      }
    ];

    const quizzes = getAvailableQuizzes({
      quizzes: originalQuizzes,
      attemptedQuiz: undefined
    });

    expect(quizzes).toEqual(originalQuizzes);
  });

  it('should return the a new quizzes array with the quiz used in the previous attempt removed', () => {
    const originalQuizzes = [
      {
        questions: [
          {
            text: 'Minima totam deserunt rem repellat.',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      },
      {
        questions: [
          {
            text: 'Voluptas aut cumque laudantium nostrum',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      },
      {
        questions: [
          {
            text: 'Consequatur expedita accusantium sint ',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      }
    ];

    const quizzes = getAvailableQuizzes({
      quizzes: originalQuizzes,
      attemptedQuiz: {
        challengeId: '66df3b712c41c499e9d31e5b',
        quizId: '1',
        timestamp: 1733523541773
      }
    });

    expect(quizzes).toEqual([
      {
        questions: [
          {
            text: 'Minima totam deserunt rem repellat.',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      },
      {
        questions: [
          {
            text: 'Consequatur expedita accusantium sint ',
            answer: 'answer',
            distractors: ['distractor 1', 'distractor 2', 'distractor 3']
          }
        ]
      }
    ]);
  });
});
