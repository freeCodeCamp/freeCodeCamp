import type {
  CompletedChallenge,
  PartiallyCompletedChallenge
} from '@prisma/client';

export const canSubmitCodeRoadCertProject = (
  id: string | undefined,
  {
    partiallyCompletedChallenges,
    completedChallenges
  }: {
    partiallyCompletedChallenges: PartiallyCompletedChallenge[];
    completedChallenges: CompletedChallenge[];
  }
) => {
  if (partiallyCompletedChallenges.some(c => c.id === id)) return true;
  if (completedChallenges.some(c => c.id === id)) return true;
  return false;
};
