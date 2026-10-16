import { describe, expect, test } from 'vitest';

import { isCodeAllyProjectCompleted } from './project-submit';

const challengeId = '5e601c775ac9d0ecd8b94aff';

describe('isCodeAllyProjectCompleted', () => {
  test('returns false when the project has not been completed', () => {
    expect(
      isCodeAllyProjectCompleted({
        challengeId,
        completedChallenges: [],
        partiallyCompletedChallenges: []
      })
    ).toBe(false);
  });

  test('returns true when the project is partially completed', () => {
    expect(
      isCodeAllyProjectCompleted({
        challengeId,
        completedChallenges: [],
        partiallyCompletedChallenges: [{ id: challengeId }]
      })
    ).toBe(true);
  });

  test('returns true when the project is completed', () => {
    expect(
      isCodeAllyProjectCompleted({
        challengeId,
        completedChallenges: [{ id: challengeId }],
        partiallyCompletedChallenges: []
      })
    ).toBe(true);
  });
});
