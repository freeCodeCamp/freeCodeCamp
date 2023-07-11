// TODO: keeping curriculum in memory is handy if we want to field requests that
// need to 'query' the curriculum, but if we force the client to handle
// redirectToCurrentChallenge and, instead, only report the current challenge id
// via the user object, then we should *not* store this so it can be garbage
// collected.
import curriculum from '../../../config/curriculum.json';
import { SuperBlocks } from '../../../config/superblocks';

type Curriculum = { [keyValue in SuperBlocks]?: CurriculumProps };
type SuperBlockKeys = keyof Curriculum;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Block {
  challenges: {
    id: string;
    tests?: { id?: string }[];
    challengeType: number;
  }[];
}

interface CurriculumProps {
  blocks: Record<string, Block>;
}

export function getChallenges() {
  const superBlockKeys = Object.keys(SuperBlocks) as SuperBlockKeys[];
  const typedCurriculum: Curriculum = curriculum as Curriculum;

  return superBlockKeys
    .map(key => typedCurriculum[key]?.blocks)
    .reduce((accumulator: Block['challenges'], superBlock) => {
      const blockKeys = Object.keys(superBlock ?? {});
      const challengesForBlock = blockKeys.map(
        key => superBlock?.[key]?.challenges ?? []
      );
      return [...accumulator, ...challengesForBlock.flat()];
    }, []);
}
