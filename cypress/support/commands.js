/* global cy Cypress */

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

// This function can be used if a chunk needs to be loaded before checking in Cypress (prevents chunkload errors)
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

  // Check if Monaco editor exist
  cy.get('div').then($div => {
    if ($div.hasClass('react-monaco-editor-container')) {
      cy.log('Monaco editor exists');
    } else {
      cy.log('Monaco editor does not exist');
    }
  });
});
