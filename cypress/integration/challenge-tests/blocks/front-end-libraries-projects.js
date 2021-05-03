/* global cy */
const superblockPathData = require('../../../fixtures/pathData/front-end-libraries.json');

const challengePaths =
  superblockPathData['blocks']['front-end-libraries-projects'];

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
