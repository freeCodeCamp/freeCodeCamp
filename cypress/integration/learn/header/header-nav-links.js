/* global cy */

describe('Navigation links', () => {
  it('should render menu button', () => {
    cy.visit('/learn');
    cy.get('.toggle-button-nav').should('be.visible');
  });

  it('should have forum link', () => {
    cy.visit('/learn');
    cy.get('.toggle-button-nav').click();
    cy.get('.nav-list')
      .contains('Forum')
      .should('have.attr', 'href', 'https://forum.freecodecamp.org/');
  });

  it('should have news link', () => {
    cy.visit('/learn');
    cy.get('.toggle-button-nav').click();
    cy.get('.nav-list')
      .contains('News')
      .should('have.attr', 'href', 'https://freecodecamp.org/news/');
  });
});
