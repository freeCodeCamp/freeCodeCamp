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
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import 'cypress-plugin-stripe-elements';
import 'cypress-plugin-tab';

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', err => {
  console.log('Cypress detected uncaught exception', err.name);
  // Rapidly cy.visiting pages seems to cause uncaught exceptions. It remains
  // unclear why this is happening, but we need to ignore them in testing so
  // that we can test other behavior.
  if (
    err.name === 'NS_ERROR_UNEXPECTED' ||
    err.name === 'ChunkLoadError' ||
    // paypal sdk error
    (err.name === 'TypeError' &&
      err.message.includes('removeEventListener is not a function'))
  ) {
    return false;
  }
  // We are still interested in other errors.
  return true;
});
