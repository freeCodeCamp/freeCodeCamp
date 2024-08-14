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

type MSProfileError = {
  type: 'error';
  message: 'flash.ms.profile.err';
  variables: { msUsername: string };
};

type MSProfileSuccess = {
  type: 'success';
  userId: string;
};

async function getMSProfile(msUsername: string) {
  const error: MSProfileError = {
    type: 'error',
    message: 'flash.ms.profile.err',
    variables: {
      msUsername
    }
  };

  const msProfileApi = `https://learn.microsoft.com/api/profiles/${msUsername}`;
  const msProfileApiRes = await fetch(msProfileApi);

  if (!msProfileApiRes.ok) return error;

  const { userId } = (await msProfileApiRes.json()) as {
    userId: string;
  };

  const success: MSProfileSuccess = {
    type: 'success',
    userId
  };

  return userId ? success : error;
}

type AchievementsError = {
  type: 'error';
  message: 'flash.ms.trophy.err-3';
};

type NoAchievementsError = {
  type: 'error';
  message: 'flash.ms.trophy.err-6';
};

type NoTrophyError = {
  type: 'error';
  message: 'flash.ms.trophy.err-4';
  variables: { msUsername: string };
};

type Validated = {
  type: 'success';
  msUserAchievementsApiUrl: string;
};

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

  const msUserAchievementsApiUrl = `https://learn.microsoft.com/api/achievements/user/${msProfile.userId}`;
  const msUserAchievementsApiRes = await fetch(msUserAchievementsApiUrl);

  if (!msUserAchievementsApiRes.ok) {
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-3'
    } as AchievementsError;
  }

  const { achievements } = (await msUserAchievementsApiRes.json()) as {
    achievements?: { typeId: string }[];
  };

  if (!achievements?.length)
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-6'
    } as NoAchievementsError;

  // TODO: handle the case where there are achievements, but the `typeId` is not
  // a property of the achievements. This suggests that Microsoft has changed
  // their API and, to aid debugging, we should report a different error
  // message.
  const earnedTrophy = achievements?.some(a => a.typeId === msTrophyId);

  if (earnedTrophy) {
    return {
      type: 'success',
      msUserAchievementsApiUrl
    } as Validated;
  } else {
    return {
      type: 'error',
      message: 'flash.ms.trophy.err-4',
      variables: {
        msUsername
      }
    } as NoTrophyError;
  }
}
