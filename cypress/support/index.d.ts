/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    login(): Chainable<Element>;
    preserveSession(): Chainable<Element>;
    setPrivacyTogglesToPublic(): Chainable<Element>;
    goToSettings(): Chainable<Element>;
    typeUsername(username: string): Chainable<Element>;
    resetUsername(): Chainable<Element>;
  }
}
