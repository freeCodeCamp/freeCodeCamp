import {
  availableLangs,
  hiddenLangs,
  LangNames
} from '../../../../../config/i18n/all-langs';
import envData from '../../../../../config/env.json';

const { clientLocale } = envData;

const selectors = {
  'navigation-list': '.nav-list',
  'toggle-button': '.toggle-button-nav',
  'language-menu': '.nav-lang-menu',
  'sign-in-button': "[data-test-label='landing-small-cta']",
  'avatar-link': '.avatar-nav-link',
  'avatar-container': '.avatar-container'
};

const links = {
  'sign-in': '/signin',
  'sign-out': '/signout',
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
    cy.get(selectors['language-menu']).should('not.be.visible');
    cy.get(selectors['toggle-button']).should('be.visible').click();
    cy.get(selectors['navigation-list']).contains('Sign in to change theme.');
    testLink('Donate');
    testLink('Curriculum');
    testLink('Forum');
    testLink('News');
    testLink('Radio');
  });
});

describe('Language menu', () => {
  it('should render all used languages.', () => {
    cy.get(selectors['navigation-list']).contains('Change Language').click();
    testAllLanguages();
    cy.get(selectors['language-menu'])
      .should('be.visible')
      .contains('English')
      .should('have.attr', 'aria-current', 'true');
    cy.get(selectors['language-menu'])
      .should('be.visible')
      .contains(LangNames[clientLocale])
      .should('have.attr', 'aria-current', 'true');
  });
  it('should have default language selected', () => {
    cy.get(selectors['language-menu'])
      .should('be.visible')
      .contains(LangNames[clientLocale])
      .should('have.attr', 'aria-current', 'true');
  });
});

describe('Authenticated Navigation Menu', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('npm run seed');
    cy.login();
    cy.get(selectors['toggle-button']).should('be.visible').click();
  });
  it('should show default avatar.', () => {
    testLink('Settings');
    testLink('Sign out');
    cy.get(selectors['sign-in-button']).should('not.exist');
    cy.get(selectors['avatar-link'])
      .should('have.attr', 'href')
      .and('contain', links['avatar-link']);
    cy.get(selectors['avatar-container']).should(
      'have.class',
      'default-border'
    );
    cy.get(selectors['navigation-list']).contains('Night Mode').click();
    cy.get('body').should('have.class', 'dark-palette');
  });
});

describe('Donor Navigation Menu', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('npm run seed -- --donor');
    cy.login();
    cy.visit('/donate');
  });
  it('should show donor avatar border.', () => {
    cy.get(selectors['avatar-container']).should('have.class', 'gold-border');
  });
  it('should show thank you message.', () => {
    cy.get(selectors['navigation-list']).contains('Thanks for donating');
  });
});

const testAllLanguages = () => {
  const availableLangNames = availableLangs.client
    .filter(lang => !hiddenLangs.includes(lang))
    .map(lang => LangNames[lang]);
  availableLangNames.forEach(langName =>
    cy.get(selectors['language-menu']).contains(langName)
  );
};

const testLink = (item, selector = 'navigation-list', checkParent) => {
  if (checkParent) {
    return cy
      .get(selectors[selector])
      .should('contain.text', item)
      .should('have.attr', 'href')
      .and('contain', links[item.replaceAll(' ', '-').toLowerCase()]);
  }
  return cy
    .get(selectors[selector])
    .contains(item)
    .should('have.attr', 'href')
    .and('contain', links[item.replaceAll(' ', '-').toLowerCase()]);
};
