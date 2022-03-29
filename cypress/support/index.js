// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more theyre:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', err => {
  // Rapidly cy.visiting pages seems to cause an uncaught exception. This seems
  // to be a testing artifact, since users can't click fast enough to cause this
  // (to our knowledge).
  if (err.name === 'ChunkLoadError') {
    return false;
  }
  // We are still interested in other errors.
  return true;
});
