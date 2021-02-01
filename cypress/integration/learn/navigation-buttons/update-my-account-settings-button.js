/* global cy */

describe('The `Update my account settings` button works properly', function() {
  beforeEach(() => {
    cy.login();
  });

  it('Should take user to their account settings when clicked', function() {
    cy.contains('Update my account settings').click();
    cy.url().should('include', '/settings');
  });
});
