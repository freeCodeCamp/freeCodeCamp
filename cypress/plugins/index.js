const getChallenge = require('../../curriculum/getChallenges');
const env = require('../../config/env.json');

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
          const upcommingChange =
            curriculum[superblock]['blocks'][blocks]['meta'][
              'isUpcomingChange'
            ];

          // Check if block is upcoming change
          if (!upcommingChange && !env.showUpcomingChanges) {
            let superBlockPath = superblock;
            let blockPath =
              curriculum[superblock]['blocks'][blocks]['meta']['dashedName'];
            let challengeArr =
              curriculum[superblock]['blocks'][blocks]['challenges'];

            challengeArr.forEach(challengePath => {
              challengePaths.push(
                `/learn/${superBlockPath}/${blockPath}/${challengePath['dashedName']}`
              );
            });
          } else if (
            upcommingChange ||
            (!upcommingChange && env.showUpcomingChanges)
          ) {
            let superBlockPath = superblock;
            let blockPath =
              curriculum[superblock]['blocks'][blocks]['meta']['dashedName'];
            let challengeArr =
              curriculum[superblock]['blocks'][blocks]['challenges'];

            challengeArr.forEach(challengePath => {
              challengePaths.push(
                `/learn/${superBlockPath}/${blockPath}/${challengePath['dashedName']}`
              );
            });
          }
        });
      } else if (superblock && block !== null && challenge === null) {
        block.forEach(blockInArr => {
          const upcommingChange =
            curriculum[superblock]['blocks'][blockInArr]['meta'][
              'isUpcomingChange'
            ];

          if (!upcommingChange && !env.showUpcomingChanges) {
            let superBlockPath = superblock;
            let blockPath = blockInArr;
            let challengeArr =
              curriculum[superblock]['blocks'][blockInArr]['challenges'];

            challengeArr.forEach(challengePath => {
              challengePaths.push(
                `/learn/${superBlockPath}/${blockPath}/${challengePath['dashedName']}`
              );
            });
          } else if (
            upcommingChange ||
            (!upcommingChange && env.showUpcomingChanges)
          ) {
            let superBlockPath = superblock;
            let blockPath = blockInArr;
            let challengeArr =
              curriculum[superblock]['blocks'][blockInArr]['challenges'];

            challengeArr.forEach(challengePath => {
              challengePaths.push(
                `/learn/${superBlockPath}/${blockPath}/${challengePath['dashedName']}`
              );
            });
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
