/* global cy */
const superBlockPath = require('../../../fixtures/pathData/projectsAndBackChallenges/responsive-web-design.json');

const blocks = Object.entries(
  superBlockPath['blocks']['responsive-web-design-projects']
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
