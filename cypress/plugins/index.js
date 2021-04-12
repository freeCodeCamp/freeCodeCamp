const fs = require('fs');
const path = require('path');
const env = require('../../config/env.json');

module.exports = on => {
  on('task', {
    // return an array of all challenge paths
    getAllChallengePaths(targetBlock) {
      let blockMeta = [];
      let challengePaths = [];

      // Get blocks in current superblock

      targetBlock.forEach(superblock => {
        let blockArr = fs.readdirSync(
          path.resolve(`./curriculum/challenges/english/${superblock}`)
        );

        blockArr.forEach(block => {
          blockMeta.push(
            JSON.parse(
              fs.readFileSync(
                path.resolve(`./curriculum/challenges/_meta/${block}/meta.json`)
              )
            )
          );
        });

        blockMeta.forEach(block => {
          if (!env.showUpcomingChanges && !block.isUpcomingChange) {
            // If upcoming changes is false push released challenges
            block.challengeOrder.forEach(challengeTitle => {
              // Parse challenge names and remove any explicit characters

              challengeTitle[1] = challengeTitle[1].toLowerCase();
              challengeTitle[1] = challengeTitle[1].replace(/\s+/g, '-');
              challengeTitle[1] = challengeTitle[1].replace(/[@$'&?]/g, '');

              challengePaths.push(
                `/learn/${targetBlock[0].slice(3)}/${block.dashedName}/${
                  challengeTitle[1]
                }`
              );
            });
            // If upcoming changes is true also push upcomming changes
          } else if (
            (env.showUpcomingChanges && block.isUpcomingChange) ||
            !block.isUpcomingChange
          ) {
            block.challengeOrder.forEach(challengeTitle => {
              challengeTitle[1] = challengeTitle[1].toLowerCase();
              challengeTitle[1] = challengeTitle[1].replace(/\s+/g, '-');
              challengeTitle[1] = challengeTitle[1].replace(/[@$'&?]/g, '');

              challengePaths.push(
                `/learn/${targetBlock[0].slice(3)}/${block.dashedName}/${
                  challengeTitle[1]
                }`
              );
            });
          }
        });
      });

      return challengePaths;
    }
  });
};
