/* global cy */
const superblockPathData = require('../../../fixtures/pathData/javascript-algorithms-and-data-structures.json');

const challengePaths =
  superblockPathData['blocks']['object-oriented-programming'];

challengePaths.forEach(challenge => {
  let challengeName = challenge.split('/');
  describe('loading challenge', () => {
    before(() => {
      cy.visit(challenge);
      cy.waitForResource('7717-13094a7bc5e246e66492.js', 'script');
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
