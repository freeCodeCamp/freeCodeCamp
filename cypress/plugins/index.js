const getChallenge = require('../../curriculum/getChallenges');
const env = require('../../config/env.json');

function createPath(curriculum, superblock, block) {
  let challengePaths = [];

  let superBlockPath = superblock;
  let blockPath = block;
  let challengeArr = curriculum[superblock]['blocks'][block]['challenges'];

  challengeArr.forEach(challengePath => {
    challengePaths.push(
      `/learn/${superBlockPath}/${blockPath}/${challengePath['dashedName']}`
    );
  });

  return challengePaths;
}

module.exports = on => {
  on('task', {
    // return an array of all challenge paths
    //  superBlock, block,  this are unused variables in the condition Husky doesn't like that
    getCurriculum({ lang }) {
      let curriculum;

      if (!curriculum) {
        curriculum = getChallenge.getChallengesForLang(lang);
      }

      return curriculum;
    },

    scopeCurriculum({ curriculum, superblock, block, challenge }) {
      let challengePaths = [];

      if (superblock && block === null) {
        // Get blocks in superblock
        block = Object.keys(curriculum[superblock]['blocks']);

        // Get challenges in block

        block.forEach(blocks => {
          const upcomingChange =
            curriculum[superblock]['blocks'][blocks]['meta'][
              'isUpcomingChange'
            ];

          // Check if block is upcoming change
          if (!upcomingChange || env.showUpcomingChanges) {
            challengePaths = createPath(curriculum, superblock, blocks);
          }
        });
      } else if (superblock && block !== null && challenge === null) {
        block.forEach(blockInArr => {
          const upcomingChange =
            curriculum[superblock]['blocks'][blockInArr]['meta'][
              'isUpcomingChange'
            ];

          if (!upcomingChange || env.showUpcomingChanges) {
            challengePaths = createPath(curriculum, superblock, blockInArr);
          }
        });
      } else if (superblock && block !== null && challenge !== null) {
        challenge.forEach(challengeInArr => {
          let superBlockPath = superblock;
          let blockPath = block;

          challengePaths.push(
            `/learn/${superBlockPath}/${blockPath}/${challengeInArr}`
          );
        });
      }
      return challengePaths;
    }
  });
};
