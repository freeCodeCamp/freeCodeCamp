import translations from '../../../../client/i18n/locales/english/translations.json';
const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';
const selectors = {
  testButton: '#test-button',
  monacoTabs: '.monaco-editor-tabs',
  signInButton: '#action-buttons-container a[href$="/signin"]'
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

  // Page will change after this test. If your test requires page used in previous
  // tests make sure it is above this one
  it('prompts unauthenticated user to sign in to save progress', () => {
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />{cmd+enter}');
    cy.get(selectors.signInButton).contains(translations.learn['sign-in-save']);
    cy.get(selectors.signInButton).click();
    cy.go('back');
    cy.get(selectors.signInButton).should('not.exist');
  });
});
