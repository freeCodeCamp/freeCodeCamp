/* global cy */
const superblockPathData = require('../../../fixtures/pathData/apis-and-microservices.json');

const challengePaths =
  superblockPathData['blocks']['managing-packages-with-npm'];

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
