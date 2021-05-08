/* global cy */
// Import commands.js using ES2015 syntax:
import './commands';

cy.on('uncaught:exception', (promise) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
