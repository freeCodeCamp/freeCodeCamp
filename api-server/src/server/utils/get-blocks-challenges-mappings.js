// eslint-disable-next-line import/no-unresolved
import curriculum from '../../../../shared/config/curriculum.json';

let challengeMap = null;

export function getChallengeMapByBlock() {
  if (challengeMap) {
    return challengeMap;
  }

  challengeMap = {};

  Object.values(curriculum).forEach(superBlock => {
    if (superBlock.blocks) {
      Object.entries(superBlock.blocks).forEach(([dashedName, block]) => {
        if (block.challenges) {
          challengeMap[dashedName] = block.challenges.map(
            challenge => challenge.id
          );
        }
      });
    }
  });

  return challengeMap;
}

export function getChallengeIdsForBlock(dashedName) {
  const localChallengeMap = getChallengeMapByBlock();

  const challengeIds = localChallengeMap[dashedName] || [];

  if (challengeIds.length === 0) {
    throw new Error(`No block found with the name: ${dashedName}`);
  }

  return challengeIds;
}
