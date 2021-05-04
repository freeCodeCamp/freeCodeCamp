/* global cy */
const superblockPathData = require('../../../fixtures/pathData/data-visualization.json');

const challengePaths =
  superblockPathData['blocks']['data-visualization-projects'];

challengePaths.forEach(challenge => {
  let challengeName = challenge.split('/');
  describe('loading challenge', () => {
    before(() => {
      cy.visit(challenge);
    });

    it(
      'Challenge ' +
        challengeName[challengeName.length - 1] +
        ' should work correctly',
      () => {
        cy.testChallenges(challenge);
      }
    );
  });
});
