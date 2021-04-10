/* global cy */

let structure = {
  challenge: []
};

describe('Test breadcrumbs', () => {
  it('should have the correct link', () => {
    cy.task('getAllChallengePaths', ['01-responsive-web-design']).then(res => {
      let { challenge } = structure;
      challenge = res;

      challenge.forEach(challenge => {
        cy.visit(challenge);
        cy.get('.breadcrumb-right').should('have.attr', 'href');
      });
    });
  });
});
