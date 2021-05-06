/* global cy Cypress*/
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
  cy.contains("Get started (it's free)").click({ force: true });
});

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

Cypress.Commands.add('updatePaths', (superblock, lang = 'english') => {
  cy.task('getCurriculum', lang).then(curriculum => {
    cy.task('scopeCurriculum', {
      curriculum,
      superblock: superblock
    });
  });
});

function waitForResourceToLoad(fileName, type) {
  const resourceCheckInterval = 40;

  return new Cypress.Promise(resolve => {
    const checkResourceLoad = () => {
      const resource = cy
        .state('window')
        .performance.getEntriesByType('resource')
        .filter(entry => !type || entry.initiatorType === type)
        .find(entry => entry.name.includes(fileName));

      if (resource) {
        resolve();
        return;
      }

      setTimeout(checkResourceLoad, resourceCheckInterval);
    };

    checkResourceLoad();
  });
}

Cypress.Commands.add('waitForResource', waitForResourceToLoad);

Cypress.Commands.add('createSpecFiles', () => {
  cy.task('updateSpecFiles');
});

Cypress.Commands.add('testChallenges', () => {
  // Test Meta tags
  cy.get('head meta[charset=utf-8]');
  cy.get('head meta[name=description]').should('have.attr', 'content');

  // Test breadcrumbs
  cy.get('.breadcrumb-right').should('have.attr', 'href');
  cy.get('.ellipsis').should('be.visible');
  cy.get('.breadcrumb-left').should('have.attr', 'href');
  cy.get('.breadcrumb-left').should('be.visible', 'href');

  cy.get('body').should('be.visible');

  // Challenge content
  cy.get('.challenge-title').should('be.visible');
  cy.get('#description').should('be.visible');
});
