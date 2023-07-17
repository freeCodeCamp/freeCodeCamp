import type { Prisma } from '@prisma/client';
import type { ProgressTimestamp } from '../../utils/progress';

export const canSubmitCodeRoadCertProject = (
  id: string | undefined,
  {
    partiallyCompletedChallenges,
    completedChallenges
  }: {
    partiallyCompletedChallenges: { id: string }[];
    completedChallenges: { id: string }[];
  }
) => {
  if (partiallyCompletedChallenges.some(c => c.id === id)) return true;
  if (completedChallenges.some(c => c.id === id)) return true;
  return false;
};

export const updateProject = (
  id: string,
  newChallenge: Prisma.CompletedChallengeUpdateInput
) => ({
  completedChallenges: {
    updateMany: { where: { id }, data: newChallenge }
  },
  partiallyCompletedChallenges: { deleteMany: { where: { id } } }
});

export const createProject = (
  id: string,
  newChallenge: Prisma.CompletedChallengeCreateInput,
  progressTimestamps: ProgressTimestamp[]
) => ({
  completedChallenges: { push: newChallenge },
  partiallyCompletedChallenges: { deleteMany: { where: { id } } },
  progressTimestamps: [...progressTimestamps, newChallenge.completedDate]
});
