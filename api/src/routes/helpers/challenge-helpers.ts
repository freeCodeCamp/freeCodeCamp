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
