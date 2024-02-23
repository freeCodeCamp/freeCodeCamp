const login = (user?: string) => {
  cy.session(
    user ?? 'new-user',
    () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      cy.visit(`${Cypress.env('API_LOCATION')}/signin`);
      cy.url().should('include', '/learn');
      cy.contains('Welcome back');
    },
    {
      validate() {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        cy.request(`${Cypress.env('API_LOCATION')}/user/get-session-user`)
          .its('status')
          .should('eq', 200);
      }
    }
  );
};

const setPrivacyTogglesToPublic = () => {
  cy.get('#privacy-settings')
    .find('[type=radio][value=2]')
    .each(element => {
      cy.wrap(element).parent().click();
      cy.wrap(element).should('be.checked');
    });
  cy.get('[data-cy=save-privacy-settings]').click();
  cy.get('#honesty-policy').find('button').click();
  cy.contains('You have agreed to our Academic Honesty Policy');
};

const goToSettings = () => {
  cy.visit('/settings');

  // Setting aliases here
  cy.get('[data-cy=username-input]').as('usernameInput');
  cy.get('[data-cy=username-form]').as('usernameForm');
};

const typeUsername = (username: string) => {
  cy.get('@usernameInput')
    .clear({ force: true })
    .type(username, { force: true });
};

const resetUsername = () => {
  cy.goToSettings();

  cy.typeUsername('developmentuser');

  cy.contains('Username is available');

  cy.get('@usernameInput').type('{enter}', { force: true, release: false });

  cy.contains('Account Settings for developmentuser').should('be.visible');
};

Cypress.Commands.add('login', login);

Cypress.Commands.add('setPrivacyTogglesToPublic', setPrivacyTogglesToPublic);

Cypress.Commands.add('goToSettings', goToSettings);

Cypress.Commands.add('typeUsername', typeUsername);

Cypress.Commands.add('resetUsername', resetUsername);

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    login: typeof login;
    setPrivacyTogglesToPublic: typeof setPrivacyTogglesToPublic;
    goToSettings: typeof goToSettings;
    typeUsername(username: string): Chainable<JQuery<HTMLElement>>;
    resetUsername: typeof resetUsername;
  }
}
