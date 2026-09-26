interface CompletedChallenge {
  id: string;
  completedDate?: number;
}

// Challenges are in curriculum order; completions belong to the same course.
export function getNextUncompletedChallenge<Challenge extends { id: string }>(
  challenges: readonly Challenge[],
  completedChallenges: readonly CompletedChallenge[]
): Challenge | undefined {
  const latestCompletedChallenge = completedChallenges.reduce<
    CompletedChallenge | undefined
  >((latest, challenge) => {
    if (!challenge.completedDate) return latest;
    if (
      !latest?.completedDate ||
      challenge.completedDate > latest.completedDate
    ) {
      return challenge;
    }
    return latest;
  }, undefined);

  const completedChallengeIds = new Set(completedChallenges.map(c => c.id));
  const latestCompletedIndex = challenges.findIndex(
    ({ id }) => id === latestCompletedChallenge?.id
  );

  // Continue forward before returning to any earlier gaps in the course.
  return (
    challenges.find(
      ({ id }, index) =>
        index > latestCompletedIndex && !completedChallengeIds.has(id)
    ) ?? challenges.find(({ id }) => !completedChallengeIds.has(id))
  );
}
