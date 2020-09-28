/* global cy */

const selectors = {
  heading: "[data-test-label='landing-header']",
  smallCallToAction: "[data-test-label='landing-small-cta']",
  firstNavigationLink: '.nav-list .nav-link:first-child',
  lastNavigationLink: '.nav-list .nav-link:last-child',
  avatarContainer: '.avatar-container',
  defaultAvatar: '.avatar-container svg'
};

describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render properly', () => {
    cy.get('#universal-nav').should('be.visible');
    cy.get('#universal-nav').should('have.class', 'universal-nav nav-padding');
  });

  it(
    'Should take user to learn page when clicked on ' + 'the freeCodeCamp logo',
    () => {
      cy.get('.universal-nav-middle').within(() => {
        cy.get('svg').click();
      });
      cy.url().should('include', '/learn');
    }
  );

  it('Should be able to search on navbar search field', () => {
    cy.get('.ais-SearchBox').within(() => {
      cy.get('input').type('Learn');
    });

    cy.get('.ais-Hits-list')
      .children()
      .should('to.have.length.of.at.least', 1);

    cy.get('.ais-SearchBox').within(() => {
      cy.get('input').clear();
    });

    cy.get('div.ais-Hits').should('not.be.visible');
  });

  it('Should have a Sign In button', () => {
    cy.contains("[data-test-label='landing-small-cta']", 'Sign In');
  });

  // have the curriculum and CTA on landing and /learn pages.
  it(
    'Should have `Curriculum` link on landing and learn pages' +
      'page when not signed in',
    () => {
      cy.get(selectors.firstNavigationLink)
        .contains('Curriculum')
        .click();
      cy.url().should('include', '/learn');
      cy.get(selectors.firstNavigationLink).contains('Curriculum');
    }
  );

  it(
    'Should have `Sign In` link on landing and learn pages' +
      'page when not signed in',
    () => {
      cy.contains(selectors.smallCallToAction, 'Sign In');
      cy.get(selectors.firstNavigationLink)
        .contains('Curriculum')
        .click();
      cy.contains(selectors.smallCallToAction, 'Sign In');
    }
  );

  it('Should have `Profile` link when user is signed in', () => {
    cy.login()
      .get(selectors.lastNavigationLink)
      .contains('Profile')
      .click();
    cy.url().should('include', '/developmentuser');
  });

  it('Should have a profile image with class `default-border`', () => {
    cy.login()
      .get(selectors.avatarContainer)
      .should('have.class', 'default-border');
    cy.get(selectors.defaultAvatar).should('exist');
  });
});
