import { describe, expect, it } from 'vitest';

import { getNextUncompletedChallenge } from './get-next-uncompleted-challenge';

describe('getNextUncompletedChallenge', () => {
  const earlierLesson = { id: 'earlier-lesson' };
  const review = { id: 'loops-review' };
  const quiz = { id: 'loops-quiz' };
  const nextLesson = { id: 'string-object', slug: '/learn/string-object' };
  const challenges = [earlierLesson, review, quiz, nextLesson];

  it('returns undefined when the course has no challenges', () => {
    expect(getNextUncompletedChallenge([], [])).toBeUndefined();
  });

  it('returns the first challenge when the course has no progress', () => {
    expect(getNextUncompletedChallenge(challenges, [])).toEqual(earlierLesson);
  });

  it('continues after the most recent completion regardless of history order', () => {
    const completedChallenges = [
      { id: quiz.id, completedDate: 200 },
      { id: review.id, completedDate: 100 }
    ];

    expect(
      getNextUncompletedChallenge(challenges, completedChallenges)
    ).toEqual(nextLesson);
  });

  it('skips a quiz completed before its review', () => {
    const completedChallenges = [
      { id: review.id, completedDate: 200 },
      { id: quiz.id, completedDate: 100 }
    ];

    expect(
      getNextUncompletedChallenge(
        [review, quiz, nextLesson],
        completedChallenges
      )
    ).toEqual(nextLesson);
  });

  it('skips completed successors before returning to an earlier gap', () => {
    const completedChallenges = [
      { id: review.id, completedDate: 300 },
      { id: quiz.id, completedDate: 100 }
    ];
    const laterLesson = { id: 'later-lesson' };

    expect(
      getNextUncompletedChallenge(
        [...challenges, laterLesson],
        [...completedChallenges, { id: nextLesson.id, completedDate: 200 }]
      )
    ).toEqual(laterLesson);
  });

  it('returns to the first earlier gap when nothing incomplete remains ahead', () => {
    const completedChallenges = [
      { id: quiz.id, completedDate: 100 },
      { id: nextLesson.id, completedDate: 200 }
    ];

    expect(
      getNextUncompletedChallenge(challenges, completedChallenges)
    ).toEqual(earlierLesson);
  });

  it('returns undefined when all challenges were completed out of order', () => {
    const completedChallenges = [
      { id: earlierLesson.id, completedDate: 100 },
      { id: review.id, completedDate: 400 },
      { id: quiz.id, completedDate: 200 },
      { id: nextLesson.id, completedDate: 300 }
    ];

    expect(
      getNextUncompletedChallenge(challenges, completedChallenges)
    ).toBeUndefined();
  });

  it('skips completed challenges with tied dates in either history order', () => {
    const completedChallenges = [
      { id: review.id, completedDate: 100 },
      { id: quiz.id, completedDate: 100 }
    ];

    expect(
      getNextUncompletedChallenge(challenges, completedChallenges)
    ).toEqual(nextLesson);
    expect(
      getNextUncompletedChallenge(
        challenges,
        [...completedChallenges].reverse()
      )
    ).toEqual(nextLesson);
  });

  it('skips completed challenges even when their dates are missing or zero', () => {
    const completedChallenges = [
      { id: earlierLesson.id, completedDate: 0 },
      { id: review.id },
      { id: quiz.id, completedDate: 0 }
    ];

    expect(
      getNextUncompletedChallenge(challenges, completedChallenges)
    ).toEqual(nextLesson);
  });

  it('keeps the same destination when a resubmitted quiz restores its original date', () => {
    const reviewCompletion = { id: review.id, completedDate: 200 };

    expect(
      getNextUncompletedChallenge(challenges, [
        reviewCompletion,
        { id: quiz.id, completedDate: 300 }
      ])
    ).toEqual(nextLesson);
    expect(
      getNextUncompletedChallenge(challenges, [
        reviewCompletion,
        { id: quiz.id, completedDate: 100 }
      ])
    ).toEqual(nextLesson);
  });
});
