/* global cy */
const selectors = {
  heading: "[data-test-label='landing-header']",
  callToAction: "[data-test-label='landing-big-cta']",
  certifications: "[data-test-label='certifications']",
  testimonials: "[data-test-label='testimonial-cards']",
  landingPageImage: '.landing-page-image'
};

describe('Landing page', function() {
  it('renders', function() {
    cy.visit('/');
    cy.title().should('eq', 'Learn to code at home | freeCodeCamp.org');
    cy.contains(selectors.heading, 'Learn to code at home.');
    cy.contains(selectors.callToAction, "Get started (it's free)");
    cy.get(selectors.callToAction).should('have.length', 2);
  });

  it('has a visible large image on large viewports', function() {
    cy.viewport(1200, 660)
      .get(selectors.landingPageImage)
      .should('be.visible');

    cy.viewport(1199, 660)
      .get(selectors.landingPageImage)
      .should('not.be.visible');
  });

  it('has 10 certifications', function() {
    cy.get(selectors.certifications)
      .children()
      .its('length')
      .should('eq', 10);
  });
  it('has 3 testimonial cards', function() {
    cy.get(selectors.testimonials)
      .children()
      .its('length')
      .should('eq', 3);
  });
});
