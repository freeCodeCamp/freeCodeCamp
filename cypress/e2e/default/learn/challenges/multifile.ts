import translations from '../../../../../client/i18n/locales/english/translations.json';
const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';
const selectors = {
  monacoTabs: '.monaco-editor-tabs',
  signInButton: '[data-cy=sign-in-button]',
  submitLowerJawButton: '[data-cy=submit-lowerJaw-button]',
  checkLowerJawButton: '[data-cy=check-lowerJaw-button]',
  resetCodeButton: '[data-cy=reset-code-button]',
  instructionContainer: '.action-row-container'
};

describe('Challenge with multifile editor', () => {
  beforeEach(() => {
    cy.visit(location);
  });

  it('prompts unauthenticated user to sign in to save progress', () => {
    cy.focused()
      .click()
      .type('{end}{enter}<meta charset="UTF-8" />')
      .type('{ctrl}{enter}', { release: false, delay: 100 });
    cy.get(selectors.signInButton).contains(translations.learn['sign-in-save']);
    cy.contains(translations.learn['congratulations']);
    cy.get(selectors.signInButton).click();
    cy.go('back');
    cy.get(selectors.signInButton).should('not.exist');
  });

  it(
    'brings back the check button after reset',
    { browser: '!chrome' }, // TODO: seems to be a bug in Chrome, try again when a new version is released
    () => {
      cy.focused().click().type('{end}{enter}<meta charset="UTF-8" />');
      cy.get(selectors.checkLowerJawButton).should('not.be.focused');
      cy.get(selectors.checkLowerJawButton).click();
      // Ready to submit (submit button replaces check button)
      cy.get(selectors.submitLowerJawButton).should('be.visible');
      cy.get(selectors.checkLowerJawButton).should('not.be.visible');
      // Reset
      cy.get(selectors.resetCodeButton).click();
      cy.get('[data-cy=reset-modal-confirm').click();
      // First we need to click on the description or Cypress will not be able
      // to scroll to the button
      cy.get('.editor-upper-jaw').click();
      cy.get(selectors.checkLowerJawButton).should('be.visible');
      cy.get(selectors.submitLowerJawButton).should('not.be.visible');
    }
  );

  it('checks hotkeys when instruction is focused', () => {
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />');
    cy.get(selectors.instructionContainer)
      .click('topRight')
      .trigger('keydown', { ctrlKey: true, keyCode: 13 }); // keyCode : 13 enter key
    cy.get(selectors.submitLowerJawButton).should('not.be.focused');
  });
});
