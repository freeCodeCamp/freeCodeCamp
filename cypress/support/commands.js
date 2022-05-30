// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {});
//
//
// -- This is a child command --
// Cypress.Commands.add(
//   'drag',
//   { prevSubject: 'element' },
//   (subject, options) => {}
// );
//
//
// -- This is a dual command --
// Cypress.Commands.add(
//   'dismiss',
//   { prevSubject: 'optional' },
//   (subject, options) => {}
// );
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {});

Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('API_LOCATION')}/signin`);
  cy.contains('Welcome back');
});

Cypress.Commands.add('preserveSession', () => {
  Cypress.Cookies.preserveOnce(
    'jwt_access_token',
    'csrf_token',
    '_csrf',
    'connect.sid'
  );
});

Cypress.Commands.add('toggleAll', () => {
  cy.visit('/settings');
  cy.get('#privacy-settings')
    .find('.toggle-not-active')
    .each(element => {
      cy.wrap(element).click().should('have.class', 'toggle-active');
    });
  cy.get('[data-cy=save-privacy-settings]').click();
  cy.get('#honesty-policy').find('button').click();
  cy.contains('You have accepted our Academic Honesty Policy');
});

Cypress.Commands.add('goToSettings', () => {
  cy.visit('/settings');

  // Setting aliases here
  cy.get('[data-cy=username-input]').as('usernameInput');
  cy.get('[data-cy=username-form]').as('usernameForm');
});

Cypress.Commands.add('typeUsername', username => {
  cy.get('@usernameInput')
    .clear({ force: true })
    .type(username, { force: true });
});

Cypress.Commands.add('resetUsername', () => {
  cy.goToSettings();

  cy.typeUsername('developmentuser');

  cy.contains('Username is available');

  cy.get('@usernameInput').type('{enter}', { force: true, release: false });

  cy.contains('Account Settings for developmentuser').should('be.visible');
});
