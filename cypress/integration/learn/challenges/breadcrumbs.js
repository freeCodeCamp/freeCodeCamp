/* global cy */

let structure = {
  superBlock: [],
  challenge: []
};

describe('Test breadcrumbs', () => {
  it('should have the correct link', () => {
    let { superBlock, challenge } = structure;
    cy.task('getSuperblock', '01-responsive-web-design').then(res => {
      superBlock = res;

      cy.task('getAllChallengePaths', superBlock).then(res => {
        challenge = res;

        challenge.forEach(challenge => {
          cy.visit(challenge);
          cy.get('.breadcrumb-right').should('have.attr', 'href');
        });
      });
    });
  });
});
