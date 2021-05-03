/* global cy */
const superblockPathData = require('../../../fixtures/pathData/javascript-algorithms-and-data-structures.json');

const challengePaths = superblockPathData['blocks']['es6'];

challengePaths.forEach(challenge => {
  let challengeName = challenge.split('/');

  it(
    'Challenge ' +
      challengeName[challengeName.length - 1] +
      ' should work correctly',
    () => {
      cy.testChallenges(challenge);
    }
  );
});
