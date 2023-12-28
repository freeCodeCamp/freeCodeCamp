const landingPageElements = {
  heading: "[data-test-label='landing-header']",
  callToAction: "[data-test-label='landing-big-cta']",
  certifications: "[data-test-label='certifications']",
  curriculumBtns: "[data-test-label='curriculum-map-button']",
  testimonials: "[data-test-label='testimonial-cards']",
  landingPageImage: "[data-test-label='landing-page-figure']",
  faq: "[data-test-label='landing-page-faq']"
} as const;

type LandingPageTypes<T> = T[keyof T];

type LandingPageLogs = LandingPageTypes<typeof landingPageElements>;

const superBlocks = [
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'Front End Development Libraries',
  'Data Visualization',
  'Relational Database',
  'Back End Development and APIs',
  'Quality Assurance',
  'Scientific Computing with Python',
  'Data Analysis with Python',
  'Information Security',
  'Machine Learning with Python',
  'College Algebra with Python',
  '(New) Foundational C# with Microsoft',
  'Coding Interview Prep',
  'Project Euler'
];

describe('Landing page', () => {
  it.skip('Should render', () => {
    cy.visit('/');
    cy.title().should(
      'eq',
      'Learn to Code — For Free — Coding Courses for Busy People'
    );
    cy.contains(landingPageElements.callToAction, "Get started (it's free)");
    cy.get(landingPageElements.callToAction).should('have.length', 4);

    // it has header and sub-header'
    cy.contains(landingPageElements.heading, 'Learn to code — for free.');
    cy.contains('Build projects.').should('be.visible');
    cy.contains('Earn certifications.').should('be.visible');
    cy.contains(
      'Since 2014, more than 40,000 freeCodeCamp.org ' +
        'graduates have gotten jobs at tech companies including:'
    ).should('be.visible');

    // it has 5 brand logos
    cy.get('.logo-row').children().its('length').should('eq', 5);

    // it has logos of news publications
    cy.get('.big-heading').contains('As seen in').siblings().get('svg');

    // it has only current certifications
    cy.get(landingPageElements.curriculumBtns).its('length').should('eq', 15);
    cy.wrap(superBlocks).each((cert: LandingPageLogs) => {
      cy.get(landingPageElements.curriculumBtns).contains(cert);
    });

    // it has testimonials
    cy.get(landingPageElements.testimonials)
      .children()
      .its('length')
      .should('eq', 3);

    // it has FAQ section
    cy.get(landingPageElements.faq).its('length').should('eq', 9);
  });

  it('Has a visible large image on large viewports', function () {
    cy.visit('/');
    cy.viewport(1200, 660)
      .get(landingPageElements.landingPageImage)
      .should('be.visible');

    cy.viewport(1199, 660)
      .get(landingPageElements.landingPageImage)
      .should('not.exist');
  });
});
