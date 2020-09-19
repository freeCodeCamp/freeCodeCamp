/* global cy */

describe('Settings', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains("Get started (it's free)").click({ force: true });
    cy.visit('/settings');
  });

  describe('The `Show me my public portfolio` button works properly', () => {
    it('Should get rendered properly', () => {
      cy.contains('Show me my public portfolio')
        .should('be.visible')
        .should('have.class', 'btn-invert btn btn-lg btn-primary btn-block');
    });

    it('Should take user to their public portfolio when clicked', () => {
      cy.contains('Show me my public portfolio').click({ force: true });
      cy.url().should('include', '/developmentuser');
    });
  });

  describe('The `Sign me out of freeCodeCamp` button works properly', () => {
    it('Should get rendered properly', () => {
      cy.contains('Sign me out of freeCodeCamp')
        .should('be.visible')
        .should('have.class', 'btn-invert btn btn-lg btn-primary btn-block');
    });

    it('Should take user to their public portfolio when clicked', () => {
      cy.contains('Sign me out of freeCodeCamp').click({ force: true });
      cy.url().should('include', '/');
    });
  });
});
