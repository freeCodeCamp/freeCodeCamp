// This script contains Cypress test commands for testing a web application

// Custom login command
Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('API_LOCATION')}/signin`);
  cy.contains('Welcome back');
});

// Custom command to preserve session cookies
Cypress.Commands.add('preserveSession', () => {
  Cypress.Cookies.preserveOnce(
    'jwt_access_token',
    'csrf_token',
    '_csrf',
    'connect.sid'
  );
});

// Custom command to set privacy toggles to public
Cypress.Commands.add('setPrivacyTogglesToPublic', () => {
  cy.get('#privacy-settings')
    .find('[type=radio][value=2]')
    .each(element => {
      cy.wrap(element).parent().click();
      cy.wrap(element).should('be.checked');
    });
  cy.get('[data-cy=save-privacy-settings]').click();
  cy.get('#honesty-policy').find('button').click();
  cy.contains('You have agreed to our Academic Honesty Policy');
});

// Custom command to navigate to settings page and set aliases
Cypress.Commands.add('goToSettings', () => {
  cy.visit('/settings');
  cy.get('[data-cy=username-input]').as('usernameInput');
  cy.get('[data-cy=username-form]').as('usernameForm');
});

// Custom command to type a username in the settings page
Cypress.Commands.add('typeUsername', (username) => {
  cy.get('@usernameInput')
    .clear({ force: true })
    .type(username, { force: true });
});

// Custom command to reset the username
Cypress.Commands.add('resetUsername', () => {
  cy.goToSettings();
  cy.typeUsername('developmentuser');
  cy.contains('Username is available');
  cy.get('@usernameInput').type('{enter}', { force: true, release: false });
  cy.contains('Account Settings for developmentuser').should('be.visible');
});

// Extend Cypress namespace with custom commands
declare namespace Cypress {
  interface Chainable {
    login: () => void;
    preserveSession: () => void;
    setPrivacyTogglesToPublic: () => void;
    goToSettings: () => void;
    typeUsername: (username: string) => Chainable<JQuery<HTMLElement>>;
    resetUsername: () => void;
  }
    }
                     
