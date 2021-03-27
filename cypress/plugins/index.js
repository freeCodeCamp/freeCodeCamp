const fs = require('fs');
const path = require('path');

module.exports = on => {
  on('task', {
    // return all superblocks
    provideTarget(targetBlock) {
      // checks if specific block is provided in superblock
      if (targetBlock.length === 2) {
        return [targetBlock[0], targetBlock[1]];
      } else if (targetBlock.length === 1) {
        return [targetBlock[0]];
      }

      return fs.readdirSync(path.resolve(`./curriculum/challenges/english`));
    },

    // return an array of all challenge paths
    getAllChallengePaths(targetBlock) {
      let challengeArr = [];

      if (targetBlock.length === 1) {
        targetBlock.forEach(superblock => {
          // read block in superblock
          var blockInSuperBlock = fs.readdirSync(
            path.resolve('./curriculum/challenges/english/' + superblock)
          );

          // read every challenge in block
          blockInSuperBlock.forEach(block => {
            var challengeInBlock = fs.readdirSync(
              path.resolve(
                './curriculum/challenges/english/' + superblock + '/' + block
              )
            );

            challengeInBlock.forEach(challenge => {
              // remove file extension
              challenge = challenge.split('.').slice(0, -1).join('.');
              challengeArr.push(
                '/learn/' + superblock.slice(3) + '/' + block + '/' + challenge
              );
            });
          });
        });
      } else {
        targetBlock[1].forEach(block => {
          var challengeInBlock = fs.readdirSync(
            path.resolve(
              './curriculum/challenges/english/' + targetBlock[0] + '/' + block
            )
          );

          challengeInBlock.forEach(challenge => {
            // remove file extension
            challenge = challenge.split('.').slice(0, -1).join('.');
            challengeArr.push(
              '/learn/' +
                targetBlock[0].slice(3) +
                '/' +
                block +
                '/' +
                challenge
            );
          });
        });
      }
      return challengeArr;
    }
  });
};
