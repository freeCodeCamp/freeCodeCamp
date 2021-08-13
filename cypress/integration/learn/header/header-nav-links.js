describe('Navigation links', () => {
  it('should render the expected forum and news links.', () => {
    cy.visit('/learn');
    cy.get('.toggle-button-nav').should('be.visible');
    cy.get('.toggle-button-nav').click();
    cy.get('.nav-list')
      .contains('Forum')
      .should('have.attr', 'href', 'https://forum.freecodecamp.org/');
    cy.get('.nav-list')
      .contains('News')
      .should('have.attr', 'href', 'https://freecodecamp.org/news/');
  });
});
