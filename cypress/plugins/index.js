const getChallenge = require('../../curriculum/getChallenges');
const env = require('../../config/env.json');
const assert = require('assert');

function createPaths(curriculum, superblock, block) {
  let challengeArr = curriculum[superblock]['blocks'][block]['challenges'];

  return challengeArr.map(
    challengePath =>
      `/learn/${superblock}/${block}/${challengePath['dashedName']}`
  );
}

module.exports = on => {
  on('task', {
    // return an object of the curriculum
    getCurriculum(lang = 'english') {
      let curriculum;

      if (!curriculum) {
        curriculum = getChallenge.getChallengesForLang(lang);
      }

      return curriculum;
    },

    scopeCurriculum({ curriculum, superblock, blocks, challenges }) {
      let challengePaths = [];

      assert(superblock, 'superblock must be supplied to scopeCurriculum');

      if (!blocks) {
        // Get blocks in superblock
        blocks = Object.keys(curriculum[superblock]['blocks']);
      }

      if (challenges) {
        assert(
          blocks.length === 1,
          'Individual challenges must come from one block\n' +
            "scopeCurriculum's arguments may be invalid"
        );
        challenges.forEach(challenge => {
          challengePaths.push(`/learn/${superblock}/${blocks[0]}/${challenge}`);
        });
      } else {
        blocks.forEach(block => {
          const upcomingChange =
            curriculum[superblock]['blocks'][block]['meta']['isUpcomingChange'];

          // Upcoming changes should not be tested by default.
          if (!upcomingChange || env.showUpcomingChanges) {
            challengePaths = challengePaths.concat(
              createPaths(curriculum, superblock, block)
            );
          }
        });
      }
      return challengePaths;
    }
  });
};
