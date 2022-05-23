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
  // cy.get('input[name="isLocked"]').click();
  // cy.get('input[name="name"]').click();
  cy.get('#privacy-settings')
    .find('.toggle-not-active')
    .each(element => {
      cy.wrap(element).click().should('have.class', 'toggle-active');
    });
  new Cypress.Promise(resolve => {
    cy.get('[data-cy=save-privacy-settings]').click();
    resolve();
  });
  cy.get('#honesty-policy').find('button').click().wait(300);
});

Cypress.Commands.add('goToSettings', () => {
  cy.visit('/settings');

  // Setting aliases here
  cy.get('input[name=username-settings]').as('usernameInput');
  cy.get('form#usernameSettings').as('usernameForm');
});

Cypress.Commands.add('typeUsername', username => {
  cy.get('@usernameInput')
    .clear({ force: true })
    .type(username, { force: true });
});

Cypress.Commands.add('resetUsername', () => {
  cy.visit('/settings');

  cy.typeUsername('developmentuser');

  cy.contains('Username is available');

  // temporary fix until https://github.com/cypress-io/cypress/issues/20562 is fixed
  cy.contains(`Save`).click();

  // revert to this when it is
  // cy.get('@usernameInput').type('{enter}', { force: true, release: false });

  cy.contains('Account Settings for developmentuser').should('be.visible');
});
