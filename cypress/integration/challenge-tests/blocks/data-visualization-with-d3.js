/* global cy */
const superBlockPath = require('../../../fixtures/pathData/challenges/data-visualization.json');

const blocks = Object.entries(
  superBlockPath['blocks']['data-visualization-with-d3']
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
