const location =
  '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2/c94c45d9-2970-441b-b10a-f0aa1adfd036';

describe('Challenge with multifile editor', () => {
  before(() => {
    cy.visit(location);
  });

  it('renders the file tab buttons', () => {
    cy.get('.monaco-editor-tabs').should('exist');
    cy.get('.monaco-editor-tabs').contains('index.html');
    cy.get('.monaco-editor-tabs').contains('styles.css');
  });
});
