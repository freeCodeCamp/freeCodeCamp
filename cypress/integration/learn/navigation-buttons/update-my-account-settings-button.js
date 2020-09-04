/* global cy */

describe('The `Update my account settings` button works properly', function() {
  beforeEach(() => {
    cy.visit('/');

    cy.contains("Get started (it's free)").click({ force: true });
  });

  it('Should get rendered', function() {
    cy.contains('View my Portfolio').should(
      'have.class',
      'btn btn-lg btn-primary btn-block'
    );

    cy.contains('View my Portfolio').should('be.visible');
  });

  it('Should take user to their account settings when clicked', function() {
    cy.contains('Update my account settings').click({ force: true });
    cy.url().should('include', '/settings');
  });
});
