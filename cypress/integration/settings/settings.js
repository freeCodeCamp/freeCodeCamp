/* global cy expect */

describe('Settings', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains("Get started (it's free)").click({ force: true });
    cy.visit('/settings');
  });

  describe('The `Sign me out of freeCodeCamp` button works properly', () => {
    it('Should get rendered properly', () => {
      cy.contains('Sign me out of freeCodeCamp')
        .should('be.visible')
        // We are checking for classes here to check for proper styling
        // This will be replaces with Percy in the future
        .should('have.class', 'btn-invert btn btn-lg btn-primary btn-block');
    });

    it('Should take to the landing page when clicked', () => {
      cy.contains('Sign me out of freeCodeCamp').click({ force: true });
      cy.location().should(loc => {
        expect(loc.pathname).to.eq('/');
      });
    });
  });
});
