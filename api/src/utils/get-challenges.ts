// TODO: keeping curriculum in memory is handy if we want to field requests that
// need to 'query' the curriculum, but if we force the client to handle
// redirectToCurrentChallenge and, instead, only report the current challenge id
// via the user object, then we should *not* store this so it can be garbage
// collected.
import { readFileSync } from 'fs';
import { join } from 'path';

const CURRICULUM_PATH = '../shared/config/curriculum.json';

// Curriculum is read using fs, because it is too large for VSCode's LSP to handle type inference which causes anoying behaviour.
const curriculum = JSON.parse(
  readFileSync(join(process.cwd(), CURRICULUM_PATH), 'utf-8')
) as Curriculum;

interface Block {
  challenges: {
    id: string;
    tests?: { id?: string }[];
    challengeType: number;
    url?: string;
    msTrophyId?: string;
  }[];
}

type SuperBlock = {
  blocks: Record<string, Block>;
};

type Curriculum = Record<string, SuperBlock>;

/**
 * Get all challenges including all certifications as "challenges" (ids and tests).
 * @returns The whole curricula reduced to an array.
 */
export function getChallenges(): Block['challenges'] {
  const curricula = Object.values(curriculum);

  return curricula
    .map(v => v.blocks)
    .reduce((acc: Block['challenges'], superBlock) => {
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
