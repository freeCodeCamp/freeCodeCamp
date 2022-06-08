const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';
const selectors = {
  testButton: '#test-button',
  monacoTabs: '.monaco-editor-tabs'
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
});
