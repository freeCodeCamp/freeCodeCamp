/* global cy */
const superBlockPath = require('../../../fixtures/pathData/projectsAndBackChallenges/data-visualization.json');

const blocks = Object.entries(
  superBlockPath['blocks']['data-visualization-projects']
);

for (const [challengeName, challengePath] of blocks) {
  describe('loading challenge', () => {
    before(() => {
      cy.visit(challengePath);
    });

    it('Challenge' + challengeName + ' should work correctly', () => {
      cy.checkProjectsAndBackend(challengePath);
    });
  });
}
