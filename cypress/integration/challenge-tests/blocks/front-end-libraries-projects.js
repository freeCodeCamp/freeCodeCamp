/* global cy */
const superBlockPath = require('../../../fixtures/pathData/projectsAndBackChallenges/front-end-libraries.json');

const blocks = Object.entries(
  superBlockPath['blocks']['front-end-libraries-projects']
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
