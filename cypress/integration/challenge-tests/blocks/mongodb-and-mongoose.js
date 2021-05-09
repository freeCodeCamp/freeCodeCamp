/* global cy */
const superBlockPath = require('../../../fixtures/pathData/projectsAndBackChallenges/apis-and-microservices.json');

const blocks = Object.entries(superBlockPath['blocks']['mongodb-and-mongoose']);

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
