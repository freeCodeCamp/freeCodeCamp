import { describe, expect, it, vi } from 'vitest';

import { updateUserChallengeData } from './common-challenge-functions.js';

describe('updateUserChallengeData', () => {
  it('retries after a stale write and keeps a single completion entry', async () => {
    const completedChallenge = {
      id: 'challenge-1',
      completedDate: 1713225600000
    };

    const firstUser = {
      id: 'user-1',
      completedChallenges: [],
      needsModeration: false,
      savedChallenges: [],
      progressTimestamps: [],
      partiallyCompletedChallenges: [],
      updateCount: 0
    };

    const secondUser = {
      ...firstUser,
      completedChallenges: [completedChallenge],
      updateCount: 1
    };

    const updateMany = vi
      .fn()
      .mockResolvedValueOnce({ count: 0 })
      .mockResolvedValueOnce({ count: 1 });
    const findUniqueOrThrow = vi.fn().mockResolvedValue(secondUser);

    const fastify = {
      prisma: {
        user: {
          updateMany,
          findUniqueOrThrow
        }
      }
    } as const;

    const result = await updateUserChallengeData(
      fastify as never,
      firstUser,
      completedChallenge.id,
      completedChallenge
    );

    expect(result).toEqual({
      alreadyCompleted: true,
      completedDate: completedChallenge.completedDate,
      userSavedChallenges: []
    });

    expect(updateMany).toHaveBeenCalledTimes(2);
    expect(updateMany).toHaveBeenNthCalledWith(1, {
      where: { id: 'user-1', updateCount: 0 },
      data: {
        completedChallenges: [
          {
            completedDate: 1713225600000,
            id: 'challenge-1'
          }
        ],
        needsModeration: undefined,
        partiallyCompletedChallenges: [],
        progressTimestamps: [1713225600000],
        savedChallenges: []
      }
    });

    expect(updateMany).toHaveBeenNthCalledWith(2, {
      where: { id: 'user-1', updateCount: 1 },
      data: {
        completedChallenges: [
          {
            completedDate: 1713225600000,
            id: 'challenge-1'
          }
        ],
        needsModeration: undefined,
        partiallyCompletedChallenges: [],
        progressTimestamps: [],
        savedChallenges: []
      }
    });

    // Called twice: once after first lock miss to fetch fresh state, once after successful lock to get updated saved challenges
    expect(findUniqueOrThrow).toHaveBeenCalledTimes(2);
  });

  it('returns latest persisted state when all OCC retries are exhausted', async () => {
    const completedChallenge = {
      id: 'challenge-1',
      completedDate: 1713225600000
    };

    const user = {
      id: 'user-1',
      completedChallenges: [],
      needsModeration: false,
      savedChallenges: [],
      progressTimestamps: [],
      partiallyCompletedChallenges: [],
      updateCount: 0
    };

    const persistedUser = {
      ...user,
      completedChallenges: [completedChallenge]
    };

    const updateMany = vi.fn().mockResolvedValue({ count: 0 });
    const findUniqueOrThrow = vi.fn().mockResolvedValue(persistedUser);

    const fastify = {
      prisma: {
        user: {
          updateMany,
          findUniqueOrThrow
        }
      }
    } as const;

    const result = await updateUserChallengeData(
      fastify as never,
      user,
      completedChallenge.id,
      completedChallenge
    );

    expect(result).toEqual({
      alreadyCompleted: true,
      completedDate: completedChallenge.completedDate,
      userSavedChallenges: []
    });
    expect(updateMany).toHaveBeenCalledTimes(10);
  });

  it('does not throw when existing completions contain legacy date shapes', async () => {
    const legacyChallenge = {
      id: 'legacy-challenge',
      completedDate: { $date: { $numberLong: '1713225600000' } }
    };

    const completedChallenge = {
      id: 'challenge-1',
      completedDate: 1713225600000
    };

    const user = {
      id: 'user-1',
      completedChallenges: [legacyChallenge],
      needsModeration: false,
      savedChallenges: [],
      progressTimestamps: [],
      partiallyCompletedChallenges: [],
      updateCount: 0
    };

    const updateMany = vi.fn().mockResolvedValue({ count: 1 });
    const findUniqueOrThrow = vi
      .fn()
      .mockResolvedValue({ savedChallenges: [] });

    const fastify = {
      prisma: {
        user: {
          updateMany,
          findUniqueOrThrow
        }
      }
    } as const;

    await expect(
      updateUserChallengeData(
        fastify as never,
        user as never,
        completedChallenge.id,
        completedChallenge
      )
    ).resolves.toMatchObject({
      alreadyCompleted: false,
      userSavedChallenges: []
    });

    expect(updateMany).toHaveBeenCalledWith({
      where: { id: 'user-1', updateCount: 0 },
      data: {
        completedChallenges: [legacyChallenge, completedChallenge],
        needsModeration: undefined,
        partiallyCompletedChallenges: [],
        progressTimestamps: [1713225600000],
        savedChallenges: []
      }
    });
  });
});
