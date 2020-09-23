/* global cy */

describe('The `View my Portfolio` button works properly', function() {
  beforeEach(() => {
    cy.visit('/');

    cy.contains("Get started (it's free)").click();
  });

  it('Button gets rendered', function() {
    cy.contains('View my Portfolio').should(
      'have.class',
      'btn btn-lg btn-primary btn-block'
    );

    cy.contains('View my Portfolio').should('be.visible');
  });

  it('Button takes user to their portfolio when clicked', function() {
    cy.contains('View my Portfolio').click();
    cy.url().should('include', '/developmentuser');
  });
});
