const getChallenge = require('../../curriculum/getChallenges');
// const env = require('../../config/env.json');
const assert = require('assert');
const { writeFileSync, readdirSync, readFileSync } = require('fs');

function createPaths(curriculum, superblock, blocks) {
  let challengeObj = { blocks: {} };

  blocks.forEach(block => {
    let challengeArr = curriculum[superblock]['blocks'][block]['challenges'];

    const challengePath = challengeArr.map(
      challengePath =>
        `/learn/${superblock}/${block}/${challengePath['dashedName']}`
    );

    challengeObj['blocks'][block] = challengePath;
  });

  let challengePathData = JSON.stringify(challengeObj, null, 4);

  writeFileSync(
    `.\\cypress\\fixtures\\pathData\\${superblock}.json`,
    challengePathData
  );

  return challengePathData;
}

function createSpecFiles() {
  const pathDataFiles = readdirSync('.\\cypress\\fixtures\\pathData');

  // Get the existing block in the directory

  let blockExist = readdirSync(
    `.\\cypress\\integration\\challenge-tests\\blocks`
  );

  // Split the extensions

  let blockInDir = [];
  blockExist.forEach(block => {
    blockInDir.push(block.split('.')[0]);
  });

  // Search for block through every pathdata file

  pathDataFiles.forEach(file => {
    let superblock = JSON.parse(
      readFileSync(`.\\cypress\\fixtures\\pathData\\${file}`, 'utf-8')
    );

    // Get the blocks in pathData file

    let blocks = Object.keys(superblock['blocks']);

    // Only apply if file does not exist

    blocks.forEach(block => {
      if (!blockInDir.includes(block)) {
        writeFileSync(
          `.\\cypress\\integration\\challenge-tests\\blocks\\${block}.js`,
          `/* global cy */
          const superblockPathData = require('../../../fixtures/pathData/${file}');
          
          const challengePaths = superblockPathData['blocks']['${block}'];
          
          challengePaths.forEach(challenge => {
            let challengeName = challenge.split('/');
            describe('loading challenge', () => {
          
              before(() => {
                cy.visit(challenge)
              })
          
              it(
                'Challenge ' +
                  challengeName[challengeName.length - 1] +
                  ' should work correctly',
                () => {
                  cy.testChallenges(challenge);
                }
              );
            })
          });`
        );
      }
    });
  });

  return blockInDir;
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
    },

    updateSpecFiles() {
      return createSpecFiles();
    }
  });
};
