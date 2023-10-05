import type { Prisma } from '@prisma/client';

import type { ProgressTimestamp } from '../../utils/progress';

/**
 * Confirm that a user can submit a CodeRoad project.
 *
 * @param id The id of the project.
 * @param param The challenges the user has completed.
 * @param param.partiallyCompletedChallenges The partially completed challenges.
 * @param param.completedChallenges The completed challenges.
 * @returns A boolean indicating if the user can submit the project.
 */
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

/**
 * Create the Prisma query to update a project.
 * @param id The id of the project.
 * @param newChallenge The challenge corresponding to the project.
 * @returns A Prisma query to update the project.
 */
export const updateProject = (
  id: string,
  newChallenge: Prisma.CompletedChallengeUpdateInput
) => ({
  completedChallenges: {
    updateMany: { where: { id }, data: newChallenge }
  },
  partiallyCompletedChallenges: { deleteMany: { where: { id } } }
});

/**
 * Create the Prisma query to create a project.
 * @param id The id of the project.
 * @param newChallenge The challenge corresponding to the project.
 * @param progressTimestamps The user's current progress timestamps.
 * @returns A Prisma query to update the project.
 */
export const createProject = (
  id: string,
  newChallenge: Prisma.CompletedChallengeCreateInput,
  progressTimestamps: ProgressTimestamp[]
) => ({
  completedChallenges: { push: newChallenge },
  partiallyCompletedChallenges: { deleteMany: { where: { id } } },
  progressTimestamps: [...progressTimestamps, newChallenge.completedDate]
});
