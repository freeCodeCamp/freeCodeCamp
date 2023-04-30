const navigationItems: { [key: string]: string } = {
  'navigation-list': '.nav-list',
  'toggle-button': '#toggle-button-nav',
  'sign-in-button': "[data-test-label='landing-small-cta']",
  'avatar-link': '.avatar-nav-link',
  'avatar-container': '.avatar-container',
  'sign-out-button': "[data-value='sign-out-button']",
  signout: "[data-test-label='signout']",
  'cancel-signout': "[data-test-label='cancel-signout']"
};

const navigationLinks: { [key: string]: string } = {
  'sign-in': '/signin',
  donate: '/donate',
  curriculum: '/learn',
  forum: 'https://forum.freecodecamp.org/',
  news: 'https://freecodecamp.org/news/',
  radio: 'https://coderadio.freecodecamp.org',
  'avatar-link': '/developmentuser',
  settings: '/settings'
};

describe('Default Navigation Menu', () => {
  it('should render the expected nav items.', () => {
    cy.visit('/learn');
    testLink('Sign in', 'sign-in-button', true);
    cy.get(navigationItems['toggle-button']).should('be.visible').click();
    cy.get(navigationItems['navigation-list']).contains(
      'Sign in to change theme.'
    );
    testLink('Donate');
    testLink('Curriculum');
    testLink('Forum');
    testLink('News');
    testLink('Radio');
  });

  it('should close the menu and focus on the Menu button when the Esc key is pressed while the navigation menu is expanded and an item in the menu is focused', () => {
    cy.get(navigationItems['navigation-list']).contains('Curriculum').focus();
    cy.focused().type('{esc}');
    cy.get(navigationItems['navigation-list']).should('not.be.visible');
    cy.get(navigationItems['toggle-button']).should('be.focused');
  });
});

describe('Authenticated Navigation Menu', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('pnpm run seed');
    cy.login();
    cy.get(navigationItems['toggle-button']).should('be.visible').click();
  });
  it('should show default avatar.', () => {
    testLink('Settings');
    cy.get(navigationItems['sign-in-button']).should('not.exist');
    cy.get(navigationItems['avatar-link'])
      .should('have.attr', 'href')
      .and('contain', navigationLinks['avatar-link']);
    cy.get(navigationItems['avatar-container']).should(
      'have.class',
      'default-border'
    );
    cy.get(navigationItems['navigation-list']).contains('Night Mode').click();
    cy.get('body').should('have.class', 'dark-palette');
  });
});

describe('Authenticated User Sign Out', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('pnpm run seed');
  });
  beforeEach(() => {
    cy.login();
    cy.get(navigationItems['toggle-button']).should('be.visible').click();
  });
  it('should sign out user', () => {
    cy.get(navigationItems['sign-out-button']).click();
    cy.get(navigationItems['signout']).click();
    cy.get(navigationItems['sign-in-button']).should('be.visible');
    cy.get(navigationItems['sign-out-button']).should('not.exist');
    cy.get(navigationItems['avatar-link']).should('not.exist');
    cy.get(navigationItems['avatar-container']).should('not.exist');
  });
  it('should cancel the sign out', () => {
    cy.get(navigationItems['sign-out-button']).click();
    cy.get(navigationItems['cancel-signout']).click();
    cy.get(navigationItems['sign-in-button']).should('not.exist');
    cy.get(navigationItems['avatar-link']).should('be.visible');
    cy.get(navigationItems['avatar-container']).should('be.visible');
  });
});

describe('Donor Navigation Menu', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('pnpm run seed -- --donor');
    cy.login();
    cy.visit('/donate');
  });
  it('should show donor avatar border.', () => {
    cy.get(navigationItems['avatar-container']).should(
      'have.class',
      'gold-border'
    );
  });
  it('should show thank you message.', () => {
    cy.get(navigationItems['navigation-list']).contains('Thanks for donating');
  });
});

const testLink = (
  item: string,
  selector = 'navigation-list',
  checkParent = false
) => {
  if (checkParent) {
    return cy
      .get(navigationItems[selector])
      .should('contain.text', item)
      .should('have.attr', 'href')
      .and('contain', navigationLinks[item.replace(/\s+/g, '-').toLowerCase()]);
  }
  return cy
    .get(navigationItems[selector])
    .contains(item)
    .should('have.attr', 'href')
    .and('contain', navigationLinks[item.replace(/\s+/g, '-').toLowerCase()]);
};
