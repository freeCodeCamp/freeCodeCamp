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
  cy.visit('/');
  cy.contains("Get started (it's free)").click();
  cy.location().should(loc => {
    // I'm not 100% sure why logins get redirected to /learn/ via 301 in
    // development, but not in production, but they do. Hence to make it easier
    // work on tests, we'll just allow for both.
    expect(loc.pathname).to.match(/^\/learn\/?$/);
  });
  cy.contains('Welcome back');
});

Cypress.Commands.add(
  'togglePrivacySettingsToPublicAndAcceptHonestyPolicy',
  () => {
    cy.get('#privacy-settings').find('[data-cy=isLocked-Public]').click();
    // check that the other settings are visible before starting to toggle them
    cy.contains('My Display Name');
    cy.get('#privacy-settings')
      .find('[data-cy$=-Public]')
      .filter('.toggle-not-active')
      .each(element => {
        return new Cypress.Promise(resolve => {
          cy.wrap(element).click().should('have.class', 'toggle-active');
          resolve();
        });
      });
    cy.get('#honesty-policy').find('button').click().wait(300);
  }
);

Cypress.Commands.add('resetUsername', () => {
  cy.login();
  cy.visit('/settings');

  cy.get('@usernameInput')
    .clear({ force: true })
    .type('developmentuser', { force: true });

  cy.contains('Username is available');

  cy.get('@usernameInput').type('{enter}', { force: true, release: false });

  cy.contains('Account Settings for developmentuser').should('be.visible');
});

Cypress.Commands.add('submitResponsiveWebDesignProjects', () => {
  const superBlock = 'responsive-web-design';
  const block = 'responsive-web-design-projects';
  const challenges = [
    {
      slug: 'build-a-tribute-page',
      solution: 'https://codepen.io/moT01/pen/ZpJpKp'
    },
    {
      slug: 'build-a-survey-form',
      solution: 'https://codepen.io/moT01/pen/LrrjGz?editors=1010'
    },
    {
      slug: 'build-a-product-landing-page',
      solution: 'https://codepen.io/moT01/full/qKyKYL/'
    },
    {
      slug: 'build-a-technical-documentation-page',
      solution: 'https://codepen.io/moT01/full/JBvzNL/'
    },
    {
      slug: 'build-a-personal-portfolio-webpage',
      solution: 'https://codepen.io/moT01/pen/vgOaoJ'
    }
  ];

  cy.visit(`/learn/${superBlock}/${block}/${challenges[0].slug}`);
  challenges.forEach(({ solution, slug }) => {
    cy.location('pathname').should(
      'eq',
      `/learn/${superBlock}/${block}/${slug}`
    );
    cy.contains("I've completed this challenge")
      .as('completedButton')
      .should('be.disabled');
    cy.get('#dynamic-front-end-form')
      .get('#solution')
      .type(solution, { delay: 0 });
    cy.get('@completedButton').click();
    cy.intercept('http://localhost:3000/project-completed').as(
      'challengeCompleted'
    );
    cy.contains('Submit and go to next challenge').click();
    cy.wait('@challengeCompleted').its('response.statusCode').should('eq', 200);
  });
});
