const fs = require('fs');
const path = require('path');
const env = require('../../config/env.json');

module.exports = on => {
  on('task', {
    // return an array of all challenge paths
    getAllChallengePaths(targetBlock) {
      let blockMeta = [];
      let challengePaths = [];

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
            block.challengeOrder.forEach(challengeTitle => {
              challengeTitle[1] = challengeTitle[1].toLowerCase();
              challengeTitle[1] = challengeTitle[1].replace(/\s+/g, '-');
              challengeTitle[1] = challengeTitle[1].replace("'", '');

              challengePaths.push(
                `/learn/${targetBlock[0].slice(3)}/${block.dashedName}/${
                  challengeTitle[1]
                }`
              );
            });
          } else if (env.showUpcomingChanges && block.isUpcomingChange) {
            block.challengeOrder.forEach(challengeTitle => {
              challengeTitle[1] = challengeTitle[1].toLowerCase();
              challengeTitle[1] = challengeTitle[1].replace(/\s+/g, '-');
              challengeTitle[1] = challengeTitle[1].replace("'", '');

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
