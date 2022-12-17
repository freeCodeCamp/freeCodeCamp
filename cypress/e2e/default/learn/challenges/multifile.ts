import translations from '../../../../../client/i18n/locales/english/translations.json';
const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';
const selectors = {
  testButton: '[data-cy=run-tests-button]',
  monacoTabs: '.monaco-editor-tabs',
  signInButton: '#action-buttons-container a[href$="/signin"]',
  submitButton: '[data-cy=submit-button]',
  resetCodeButton: '[data-cy=reset-code-button]',
  instructionContainer: '.action-row-container'
};

describe('Challenge with multifile editor', () => {
  before(() => {
    cy.visit(location);
  });

  it('renders the file tab buttons', () => {
    cy.get(selectors.monacoTabs).contains('index.html');
    cy.get(selectors.monacoTabs).contains('styles.css');
  });

  it('checks for correct text at different widths', () => {
    cy.viewport(768, 660);
    cy.get(selectors.testButton).contains('Check Your Code (Ctrl + Enter)');

    cy.viewport(767, 660);
    cy.get(selectors.testButton)
      .should('not.contain.text', '(Ctrl + Enter)')
      .contains('Check Your Code');
  });

  it('resets the lower jaw when prompted', () => {
    cy.get('[data-cy=failing-test-feedback]').should('not.exist');

    cy.contains('Check Your Code').click();
    cy.get('[data-cy=failing-test-feedback]').should('be.visible');
    cy.get(selectors.resetCodeButton).click();
    cy.get('[data-cy=reset-modal-confirm').click();

    cy.get('[data-cy=failing-test-feedback]').should('not.exist');
  });

  // Page will change after this test. If your test requires page used in previous
  // tests make sure it is above this one
  it('prompts unauthenticated user to sign in to save progress', () => {
    cy.visit(location);
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />{ctrl+enter}');
    cy.get(selectors.signInButton).contains(translations.learn['sign-in-save']);
    cy.contains(translations.learn['congratulations']);
    cy.get(selectors.signInButton).click();
    cy.go('back');
    cy.get(selectors.signInButton).should('not.exist');
  });

  it('focuses the submit button after testing a valid solution', () => {
    cy.visit(location);
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />');
    cy.get(selectors.submitButton).should('not.be.focused');
    cy.get(selectors.testButton).click();
    cy.get(selectors.submitButton).should('be.focused');
  });

  it('checks hotkeys when instruction is focused', () => {
    cy.reload();
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />');
    cy.get(selectors.instructionContainer)
      .click('topRight')
      .trigger('keydown', { ctrlKey: true, keyCode: 13 }); // keyCode : 13 enter key
    cy.get(selectors.submitButton).should('be.focused');
  });
});
