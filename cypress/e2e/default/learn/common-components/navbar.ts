const navBarselectors = {
  heading: "[data-test-label='landing-header']",
  smallCallToAction: "[data-test-label='landing-small-cta']",
  navigationLinks: '.nav-list',
  avatarContainer: '.avatar-container',
  defaultAvatar: '.avatar-container',
  menuButton: '#toggle-button-nav',
  avatarImage: '.avatar-container .avatar'
};

describe('Navbar when logged out', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1200, 660);
    cy.contains('Learn to code — for free.').should('exist');
  });

  it('Should have a "Sign in" button', () => {
    cy.contains("[data-test-label='landing-small-cta']", 'Sign in');
  });

  it(
    'Should have `Sign in` link on landing and learn pages' +
      ' when not signed in',
    () => {
      cy.contains(navBarselectors.smallCallToAction, 'Sign in');
      cy.get(navBarselectors.menuButton).click();
      cy.get(navBarselectors.navigationLinks).contains('Curriculum').click();
      cy.contains(navBarselectors.smallCallToAction, 'Sign in');
    }
  );
});

describe('Navbar Logged in', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1200, 660);
    cy.contains('Learn to code — for free.')
      .should('exist')
      .then(() => cy.login());
  });

  it('Should render properly', () => {
    cy.get('#universal-nav').should('be.visible');
    cy.get('#universal-nav').should('have.class', 'universal-nav');
  });

  it(
    'Should take user to learn page when clicked on ' + 'the freeCodeCamp logo',
    () => {
      cy.get('#universal-nav-logo').within(() => {
        cy.get('svg').click();
      });
      cy.url().should('include', '/learn');
    }
  );

  // have the curriculum and CTA on landing and /learn pages.
  it(
    'Should have `Radio`, `Forum`, and `Curriculum` links on landing and learn pages' +
      'page when not signed in',
    () => {
      cy.get(navBarselectors.menuButton).click();
      cy.get(navBarselectors.navigationLinks).contains('Forum');
      cy.get(navBarselectors.navigationLinks).contains('Curriculum').click();
      cy.url().should('include', '/learn');
      cy.get(navBarselectors.navigationLinks).contains('Curriculum');
      cy.get(navBarselectors.navigationLinks).contains('Forum');
      cy.get(navBarselectors.navigationLinks).contains('Radio');
    }
  );

  it('Should have `Profile` link when user is signed in', () => {
    cy.get(navBarselectors.menuButton).click();
    cy.get(navBarselectors.navigationLinks).contains('Profile').click();
    cy.url().should('include', '/developmentuser');
  });

  it('Should have a profile image with class `default-border`', () => {
    cy.get(navBarselectors.avatarContainer).should(
      'have.class',
      'default-border'
    );
    cy.get(navBarselectors.defaultAvatar).should('exist');
  });

  it('Should have a profile image with dimensions that are <= 31px', () => {
    cy.get(navBarselectors.avatarImage).invoke('width').should('lte', 31);
    cy.get(navBarselectors.avatarImage).invoke('height').should('lte', 31);
  });
});
