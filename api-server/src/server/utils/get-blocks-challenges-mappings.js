// eslint-disable-next-line import/no-unresolved
import curriculum from '../../../../shared/config/curriculum.json';

export function getChallengeMapByBlock() {
  const challengeMap = {};

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
  console.log('Getting challenge IDs for block:', dashedName);
  const challengeIds = [];

  Object.values(curriculum).forEach(superBlock => {
    const block = superBlock.blocks[dashedName];
    if (block?.challenges) {
      challengeIds.push(...block.challenges.map(challenge => challenge.id));
    }
  });

  if (challengeIds.length === 0) {
    throw new Error(`No block found with the name: ${dashedName}`);
  }

  return challengeIds;
}
