interface ResumeChallengeNode {
  challenge: {
    id: string;
    superBlock: string;
    fields: { slug: string };
  };
}

interface CompletedChallenge {
  id: string;
}

export interface ResumeData {
  progress: number;
  superBlock: string;
}

const normalizePath = (value: string): string | null => {
  try {
    const path = new URL(value, 'https://www.freecodecamp.org').pathname;
    return path.length > 1 ? path.replace(/\/$/, '') : path;
  } catch {
    return null;
  }
};

export function getResumeData(
  resumeUrl: string,
  challengeNodes: ResumeChallengeNode[],
  completedChallenges: CompletedChallenge[]
): ResumeData | null {
  const resumePath = normalizePath(resumeUrl);
  if (!resumePath) return null;

  const currentChallenge = challengeNodes.find(
    ({ challenge }) => normalizePath(challenge.fields.slug) === resumePath
  )?.challenge;

  if (!currentChallenge) return null;

  const courseChallengeIds = new Set(
    challengeNodes
      .filter(
        ({ challenge }) => challenge.superBlock === currentChallenge.superBlock
      )
      .map(({ challenge }) => challenge.id)
  );
  const completedIds = new Set(
    completedChallenges
      .map(({ id }) => id)
      .filter(id => courseChallengeIds.has(id))
  );
  const progress = courseChallengeIds.size
    ? Math.round((completedIds.size / courseChallengeIds.size) * 100)
    : 0;

  return {
    progress,
    superBlock: currentChallenge.superBlock
  };
}
