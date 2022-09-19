// test if mobile search bar affect the test
describe('Default Navigation Menu', () => {
  it('should be possible to open the menu with the tab keybound.', () => {
    cy.visit('/learn');
    cy.get('toggle-button-nav')
      .focus()
      .type('{enter}{tab}{tab}')
      .should('a', 'focus');
  });
});
