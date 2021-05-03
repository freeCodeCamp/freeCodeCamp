/* global cy */
const superblockPathData = require('../../../fixtures/pathData/data-visualization.json');

const challengePaths =
  superblockPathData['blocks']['data-visualization-with-d3'];

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
