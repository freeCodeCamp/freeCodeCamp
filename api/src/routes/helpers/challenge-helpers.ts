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

async function getMSProfile(msUsername: string) {
  const profileError = {
    type: 'error',
    message: 'flash.ms.profile.err',
    variables: {
      msUsername
    }
  } as const;

  const msProfileApi = `https://learn.microsoft.com/api/profiles/${msUsername}`;
  const msProfileApiRes = await fetch(msProfileApi);

  if (!msProfileApiRes.ok) return profileError;

  const { userId } = (await msProfileApiRes.json()) as {
    userId: string;
  };

  return userId ? ({ type: 'success', userId } as const) : profileError;
}

/**
 * Handles all communication with the Microsoft Learn APIs.
 *
 * @param requestData The data needed by the Microsoft Learn APIs.
 * @param requestData.msUsername The Microsoft username used to get the profile.
 * @param requestData.msTrophyId The Microsoft trophy ID to verify.
 * @returns An object with 'type' of success|error and information about the success or failure.
 */
export async function verifyTrophyWithMicrosoft({
  msUsername,
  msTrophyId
}: {
  msUsername: string;
  msTrophyId: string;
}) {
  const msProfile = await getMSProfile(msUsername);

  if (msProfile.type === 'error') return msProfile;

  const msGameStatusApiUrl = `https://learn.microsoft.com/api/gamestatus/${msProfile.userId}`;
  const msGameStatusApiRes = await fetch(msGameStatusApiUrl);

  if (!msGameStatusApiRes.ok) {
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-3'
    } as const;
  }

  const { achievements } = (await msGameStatusApiRes.json()) as {
    achievements?: { awardUid: string }[];
  };

  if (!achievements?.length)
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-6'
    } as const;

  const earnedTrophy = achievements?.some(a => a.awardUid === msTrophyId);

  if (earnedTrophy) {
    return {
      type: 'success',
      msGameStatusApiUrl
    } as const;
  } else {
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-4',
      variables: {
        msUsername
      }
    } as const;
  }
}
