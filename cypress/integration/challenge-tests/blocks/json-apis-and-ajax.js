/* global cy */
const superBlockPath = require('../../../fixtures/pathData/challenges/data-visualization.json');

const blocks = Object.entries(superBlockPath['blocks']['json-apis-and-ajax']);

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
