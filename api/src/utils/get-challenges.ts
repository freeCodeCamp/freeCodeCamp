import { getGeneratedCurriculum } from '@freecodecamp/curriculum/file-handler';

// Curriculum is read using fs, because it is too large for VSCode's LSP to handle type inference which causes annoying behavior.
const curriculum = (await getGeneratedCurriculum()) as Curriculum;

interface Challenge {
  id: string;
  tests?: { id?: string }[];
  challengeType: number;
  url?: string;
  msTrophyId?: string;
  saveSubmissionToDB?: boolean;
  isExam?: boolean;
}

interface Block {
  challenges: Challenge[];
}

type SuperBlock = {
  blocks: Record<string, Block>;
};

type Curriculum = Record<string, SuperBlock>;

/**
 * Get all challenges including all certifications as "challenges" (ids and tests).
 * @returns The whole curricula reduced to an array.
 */
export function getChallenges(): Challenge[] {
  const curricula = Object.values(curriculum);

  return curricula
    .map(v => v.blocks)
    .reduce((acc: Challenge[], superBlock) => {
      const blockKeys = Object.keys(superBlock);
      const challengesForBlock = blockKeys.map(k => {
        const block = superBlock[k];
        if (!block) {
          return [];
        }
        return block.challenges;
      });
      return [...acc, ...challengesForBlock.flat()];
    }, []);
}

export const challenges = getChallenges();

export const savableChallenges = challenges.reduce((acc, curr) => {
  if (curr.saveSubmissionToDB) {
    acc.add(curr.id);
  }

  return acc;
}, new Set<string>());

const examChallenges = challenges.reduce((acc, curr) => {
  if (curr.isExam) {
    acc.add(curr.id);
  }

  return acc;
}, new Set<string>());

/**
 *  Checks if a challenge id is an exam challenge.
 *
 * @param id The challenge id to check.
 * @returns A boolean indicating if the challenge id is an exam challenge.
 */
export const isExamId = (id: string): boolean => examChallenges.has(id);
