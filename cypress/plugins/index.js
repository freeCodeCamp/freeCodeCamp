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

  pathDataFiles.forEach(file => {
    let superblock = JSON.parse(
      readFileSync(`.\\cypress\\fixtures\\pathData\\${file}`, 'utf-8')
    );
    let blocks = Object.keys(superblock['blocks']);

    blocks.forEach(block => {
      writeFileSync(
        `.\\cypress\\integration\\challenge-tests\\blocks\\${block}.js`,
        `
        /* global cy */
       const superblockPathData = require('../../../fixtures/pathData/${file}');
       const challengePaths = superblockPathData['blocks']['${block}']

       challengePaths.forEach(challenge => {
        let challengeName = challenge.split('/');
      
        it('Challenge ' + challengeName[challengeName.length - 1] + ' should work correctly', () => {
          cy.testChallenges(challenge)
        })
      
      });
      
      `
      );
    });
  });

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

    scopeCurriculum({ curriculum, superblock, blocks }) {
      let challengePaths = [];

      assert(superblock, 'superblock must be supplied to scopeCurriculum');

      if (!blocks) {
        // Get blocks in superblock
        blocks = Object.keys(curriculum[superblock]['blocks']);
        challengePaths = createPaths(curriculum, superblock, blocks);
      }

      return challengePaths;
    },

    updateSpecFiles() {
      return createSpecFiles();
    }
  });
};
