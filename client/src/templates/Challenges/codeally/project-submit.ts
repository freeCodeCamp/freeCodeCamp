type ChallengeWithId = {
  id: string;
};

export function isCodeAllyProjectCompleted({
  challengeId,
  completedChallenges,
  partiallyCompletedChallenges
}: {
  challengeId: string;
  completedChallenges: ChallengeWithId[];
  partiallyCompletedChallenges: ChallengeWithId[];
}): boolean {
  return [...partiallyCompletedChallenges, ...completedChallenges].some(
    challenge => challenge.id === challengeId
  );
}
