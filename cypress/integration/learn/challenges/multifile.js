const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';

describe('Challenge with multifile editor', () => {
  before(() => {
    cy.visit(location);
  });

  it('renders the file tab buttons', () => {
    cy.wait(5000);
    cy.get('.monaco-editor-tabs').should('exist');
    cy.get('.monaco-editor-tabs').contains('index.html');
    cy.get('.monaco-editor-tabs').contains('styles.css');
  });
});
