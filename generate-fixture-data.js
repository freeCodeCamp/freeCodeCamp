const { writeFileSync, mkdirSync } = require('fs');
const getChallenge = require('./curriculum/getChallenges');
const path = require('path');

function getCurriculum() {
  return getChallenge.getChallengesForLang('english');
}

function initCurriculum() {
  const superblocks = [
    'apis-and-microservices',
    'data-visualization',
    'front-end-libraries',
    'javascript-algorithms-and-data-structures',
    'responsive-web-design'
  ];

  const init = getCurriculum();

  init.then(curriculum => {
    superblocks.forEach(superblock => {
      console.log(`creating pathdata for ${superblock} now`);

      let blocks = Object.keys(curriculum[superblock]['blocks']);

      createPaths(curriculum, superblock, blocks);
    });
  });
}

function createDirs() {
  mkdirSync(path.join(__dirname, '/cypress/fixtures/pathData'));
  mkdirSync(path.join(__dirname, '/cypress/fixtures/pathData/challenges'));
  mkdirSync(
    path.join(__dirname, '/cypress/fixtures/pathData/projectsAndBackChallenges')
  );
}

createDirs();
initCurriculum();

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
    path.join(
      __dirname,
      `/cypress/fixtures/pathData/challenges/${superblock}.json`
    ),
    cleanEmptyObjects(challengeObj)
  );

  writeFileSync(
    path.join(
      __dirname,
      `/cypress/fixtures/pathData/projectsAndBackChallenges/${superblock}.json`
    ),
    cleanEmptyObjects(challengeObj2)
  );
}
