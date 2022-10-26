import {
  availableLangs,
  hiddenLangs,
  LangNames
} from '../../../../../config/i18n';
import envData from '../../../../../config/env.json';

const { clientLocale } = envData;

const selectors = {
  'navigation-list': '.nav-list',
  'toggle-button': '.toggle-button-nav',
  'language-menu': '.nav-lang-menu',
  'exit-lang-menu': "[data-value='exit-lang-menu']",
  'lang-menu-option': 'button.nav-lang-menu-option',
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

  it('should close the menu and focus on the Menu button when the Esc key is pressed while the navigation menu is expanded and an item in the menu is focused', () => {
    cy.get(selectors['navigation-list']).contains('Curriculum').focus();
    cy.focused().type('{esc}');
    cy.get(selectors['navigation-list']).should('not.be.visible');
    cy.get(selectors['toggle-button']).should('be.focused');
  });
});

describe('Language menu', () => {
  it('should render all used languages.', () => {
    cy.get(selectors['toggle-button']).should('be.visible').click();
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

describe('Language menu keyboard accessibility', () => {
  before(() => {
    cy.get(selectors['exit-lang-menu']).click();
    cy.get(selectors['navigation-list']).contains('Change Language').blur();
  });

  const langMenuOptionSelector =
    selectors['language-menu'] + ' ' + selectors['lang-menu-option'];

  it('should open the language menu with the ENTER key', () => {
    cy.get(selectors['navigation-list'])
      .contains('Change Language')
      .type('{enter}');
    cy.get(selectors['language-menu']).should('be.visible');
  });

  it('should open the language menu with the Up arrow key and place focus on the last item in the menu', () => {
    cy.get(selectors['exit-lang-menu']).click();
    cy.focused().type('{upArrow}');
    cy.get(selectors['language-menu']).should('be.visible');
    cy.get(langMenuOptionSelector).last().should('be.focused');
  });

  it('should open the language menu with the Down arrow key and place focus on the first item in the menu', () => {
    cy.get(selectors['exit-lang-menu']).click();
    cy.focused().type('{downArrow}');
    cy.get(selectors['language-menu']).should('be.visible');
    cy.get(langMenuOptionSelector).first().should('be.focused');
  });

  it('should be possible to move keyboard focus with the Up and Down arrow keys when the language menu is open', () => {
    navigateLanguagesWithKey('downArrow');
    navigateLanguagesWithKey('upArrow');
  });

  it('should move focus to the last menu item when the first menu item is focused and the Up arrow key is pressed', () => {
    cy.get(langMenuOptionSelector).first().focus();
    cy.focused().type('{upArrow}');
    cy.get(langMenuOptionSelector).last().should('be.focused');
  });

  it('should move focus to the first menu item when the last menu item is focused and the Down arrow key is pressed', () => {
    cy.get(langMenuOptionSelector).last().focus();
    cy.focused().type('{downArrow}');
    cy.get(langMenuOptionSelector).first().should('be.focused');
  });

  it('should close the language menu and focus on the Change Language button when focus is on a language menu item and the Esc key is pressed', () => {
    cy.focused().type('{esc}');
    cy.get(selectors['language-menu']).should('not.be.visible');
    cy.get(selectors['navigation-list'])
      .contains('Change Language')
      .should('be.focused');
  });

  it('should close the language options menu and put focus on the item above the Choose Language button when focus is on a language menu item and the Shift + Tab keys are pressed', () => {
    cy.focused().click();
    // cy.tab() doesn't accept tabindex="-1" elements as focusable
    // https://github.com/kuceb/cypress-plugin-tab/issues/18
    // It is better to use .tab() on focused language option
    // cy.focused().tab({ shift: true }); // uncomment this line when the issue is fixed
    cy.get('body').tab({ shift: true }); // remove this line when the above issue is fixed

    cy.get(selectors['language-menu']).should('not.be.visible');
    cy.get(selectors['navigation-list'])
      .contains('Sign in to change theme.')
      .should('be.focused');
  });

  // cy.tab() doesn't accept tabindex="-1" elements as focusable
  // https://github.com/kuceb/cypress-plugin-tab/issues/18
  // Also, doing .tab() from element other than language option doesn't yield the expected result
  it.skip('should focus on the next tabbable element when focus is on a language menu item and the Tab key is pressed', () => {
    cy.get(selectors['navigation-list']).contains('Change Language').click();
    cy.focused().tab();
    cy.get(selectors['language-menu']).should('not.be.visible');
    cy.get(selectors['sign-in-button']).should('be.focused');
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

const navigateLanguagesWithKey = direction => {
  const directions = ['downArrow', 'upArrow'];
  if (!directions.includes(direction)) {
    throw new Error(
      'Invalid direction: ' + direction + '\nMust be one of: ' + directions
    );
  }
  const availableLangNames = availableLangs.client
    .filter(lang => !hiddenLangs.includes(lang))
    .map(lang => LangNames[lang]);

  if (direction === 'upArrow') {
    availableLangNames.reverse();
    // remove the first element, as it will be the focused language
    availableLangNames.shift();
  }

  availableLangNames.forEach(langName => {
    cy.focused().type(`{${direction}}`);
    cy.focused().contains(langName);
  });
};
