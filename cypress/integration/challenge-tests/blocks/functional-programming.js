/* global cy */
const superBlockPath = require('../../../fixtures/pathData/challenges/javascript-algorithms-and-data-structures.json');

const blocks = Object.entries(
  superBlockPath['blocks']['functional-programming']
);

for (const [challengeName, challengePath] of blocks) {
  describe('loading challenge', () => {
    before(() => {
      cy.visit(challengePath);
    });

    it('Challenge' + challengeName + ' should work correctly', () => {
      cy.testChallenges(challengePath);
    });
  });
}
