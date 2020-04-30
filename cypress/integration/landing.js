/* global cy */
const selectors = {
  heading: "[data-test-label='landing-header']",
  callToAction: "[data-test-label='landing-big-cta']"
};

describe('Landing page', function() {
  it('renders', function() {
    cy.visit('/');

    cy.title().should('eq', 'Learn to code at home | freeCodeCamp.org');

    cy.contains(selectors.heading, 'Welcome to freeCodeCamp.org');
    cy.contains(selectors.callToAction, "Get started (it's free)");
  });
});
