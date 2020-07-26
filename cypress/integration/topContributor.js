/* global cy */
const selectors = {
  signIn: '[data-test-label=landing-big-cta]'
};

describe('Top Contributor', function() {
  it('renders if top contributor', function() {
    cy.visit('/');
    cy.get(selectors.signIn).click({ force: true });

    cy.contains('View my Portfolio').click({ force: true });

    cy.contains('Preview custom 404 page').click({ force: true });

    cy.contains('Top Contributor');
  });
});
