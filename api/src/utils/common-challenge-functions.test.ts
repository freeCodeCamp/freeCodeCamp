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
    const update = vi.fn();
    const findUniqueOrThrow = vi.fn().mockResolvedValue(secondUser);
    const transaction = vi.fn(
      (
        callback: (transaction: {
          user: {
            updateMany: typeof updateMany;
            update: typeof update;
          };
        }) => Promise<{ count: number }>
      ) => {
        return callback({
          user: {
            updateMany,
            update
          }
        });
      }
    );

    const fastify = {
      prisma: {
        $transaction: transaction,
        user: {
          updateMany,
          update,
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
      data: { updateCount: { increment: 1 } }
    });

    expect(updateMany).toHaveBeenNthCalledWith(2, {
      where: { id: 'user-1', updateCount: 1 },
      data: { updateCount: { increment: 1 } }
    });

    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith({
      where: { id: 'user-1' },
      data: {
        completedChallenges: expect.arrayContaining([
          expect.objectContaining({
            id: 'challenge-1',
            completedDate: 1713225600000
          })
        ]),
        needsModeration: undefined,
        savedChallenges: [],
        progressTimestamps: [],
        partiallyCompletedChallenges: []
      }
    });

    // Called twice: once after first lock miss to fetch fresh state, once after successful lock to get updated saved challenges
    expect(findUniqueOrThrow).toHaveBeenCalledTimes(2);
  });
});
