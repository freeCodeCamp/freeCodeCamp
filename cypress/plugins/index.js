const assert = require('assert');
const { writeFileSync } = require('fs');
const getChallenge = require('../../curriculum/getChallenges');

function createPaths(curriculum, superblock, blocks) {
  let challengeObj = { blocks: {} };
  let challengeObj2 = { blocks: {} };

  let challengePaths;

  // Specifies which challenge type has an editor
  let typeHasEditor = [0, 1, 5, 6];

  blocks.forEach(block => {
    let challengeArr = curriculum[superblock]['blocks'][block]['challenges'];

    challengePaths = challengeArr.map(challengePath => [
      `/learn/${superblock}/${block}/${challengePath['dashedName']}`,
      challengePath['challengeType']
    ]);

    // Make variables defined before accessing them when checking for challenge type

    challengeObj['blocks'][block] = {};
    challengeObj2['blocks'][block] = {};

    challengePaths.forEach(challengePath => {
      let challengeName = challengePath[0].split('/');

      if (typeHasEditor.includes(challengePath[1])) {
        challengeObj['blocks'][block][challengeName[challengeName.length - 1]] =
          challengePath[0];
      } else {
        challengeObj2['blocks'][block][
          challengeName[challengeName.length - 1]
        ] = challengePath[0];
      }
    });
  });

  // Remove the objects if they are empty
  function cleanEmptyObjects(obj) {
    Object.size = function (obj) {
      let size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };

    for (let block in obj['blocks']) {
      if (Object.size(obj['blocks'][block]) === 0) {
        delete obj['blocks'][block];
      }
    }

    return JSON.stringify(obj, null, 4);
  }

  writeFileSync(
    `.\\cypress\\fixtures\\pathData\\challenges\\${superblock}.json`,
    cleanEmptyObjects(challengeObj)
  );
  writeFileSync(
    `.\\cypress\\fixtures\\pathData\\projectsAndBackChallenges\\${superblock}.json`,
    cleanEmptyObjects(challengeObj2)
  );

  return null;
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

    scopeCurriculum({ curriculum, superblock }) {
      let challengePaths = [];

      assert(superblock, 'superblock must be supplied to scopeCurriculum');

      let blocks = Object.keys(curriculum[superblock]['blocks']);
      challengePaths = createPaths(curriculum, superblock, blocks);

      return challengePaths;
    }
  });
};
