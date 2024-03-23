// eslint-disable-next-line import/no-unresolved
const curriculum = require('../../../../shared/config/curriculum.json');

const blocksToChallengesService = (() => {
  let blocksToChallengesMap = null;

  function buildBlocksToChallengesMap() {
    const map = {};
    Object.values(curriculum).forEach(superBlock => {
      if (superBlock.blocks) {
        Object.entries(superBlock.blocks).forEach(([dashedName, block]) => {
          if (block.challenges) {
            map[dashedName] = block.challenges.map(challenge => challenge.id);
          }
        });
      }
    });
    return map;
  }

  return {
    getBlocksToChallengesMap() {
      if (!blocksToChallengesMap) {
        blocksToChallengesMap = buildBlocksToChallengesMap();
      }
      return blocksToChallengesMap;
    },
    getChallengeIdsForBlock(dashedName) {
      const map = this.getBlocksToChallengesMap();
      const challengeIds = map[dashedName] || [];
      if (challengeIds.length === 0) {
        throw new Error(`No challenges found for the block: ${dashedName}`);
      }
      return challengeIds;
    }
  };
})();

module.exports = blocksToChallengesService;
