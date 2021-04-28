/* global cy */
describe('Settings', () => {
  it('should be possible to visit the settings page', () => {
    cy.visit('/');
    cy.contains("Get started (it's free)").click({ force: true });
    cy.visit('/settings');
  });
});
