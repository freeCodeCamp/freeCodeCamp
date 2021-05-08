/* global cy */
import './commands';

/* eslint-disable no-undef */
cy.on('uncaught:exception', () => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// require('./commands')
