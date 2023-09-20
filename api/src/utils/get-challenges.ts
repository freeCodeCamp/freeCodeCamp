// TODO: keeping curriculum in memory is handy if we want to field requests that
// need to 'query' the curriculum, but if we force the client to handle
// redirectToCurrentChallenge and, instead, only report the current challenge id
// via the user object, then we should *not* store this so it can be garbage
// collected.
import curriculum from '../../../shared/config/curriculum.json';

interface Block {
  challenges: {
    id: string;
    tests?: { id?: string }[];
    challengeType: number;
    url?: string;
  }[];
}

// It seems `curriculum.json` is too big for TS to type. So, without duplicating the types to define them, this should work.
// Safety: Seeing as this runs during build (startup), an error will be thrown if anything is amiss.
/* eslint-disable @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
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
        const key: keyof typeof superBlock = k;
        return superBlock[key].challenges;
      });
      return [...acc, ...challengesForBlock.flat()];
    }, []);
}
/* eslint-enable @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
