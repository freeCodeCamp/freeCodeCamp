/* global cy */
const superBlockPath = require('../../../fixtures/pathData/challenges/front-end-libraries.json');

const blocks = Object.entries(superBlockPath['blocks']['redux']);

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
