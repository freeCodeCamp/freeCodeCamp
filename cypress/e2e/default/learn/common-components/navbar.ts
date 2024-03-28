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
  it('should have the sign in button on landing and /learn', () => {
    cy.visit('/');

    cy.contains(navBarselectors.smallCallToAction, 'Sign in');

    cy.visit('/learn');
    cy.contains(navBarselectors.smallCallToAction, 'Sign in');
  });
});

describe('Navbar Logged in', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
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

  it('Should have a profile image with dimensions that are <= 26px', () => {
    cy.get(navBarselectors.avatarImage).invoke('width').should('lte', 26);
    cy.get(navBarselectors.avatarImage).invoke('height').should('lte', 26);
  });
});
