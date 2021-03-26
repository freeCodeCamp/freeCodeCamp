const fs = require('fs');
const path = require('path');

module.exports = on => {
  on('task', {
    // return all superblocks
    getSuperblock(superBlock = null) {
      if (superBlock !== null) {
        return [superBlock];
      }

      return fs.readdirSync(path.resolve(`./curriculum/challenges/english`));
    },

    // return an array of all challenge paths
    getAllChallengePaths(superBlock) {
      let challengeArr = [];

      superBlock.forEach(superblock => {
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

      return challengeArr;
    }
  });
};
