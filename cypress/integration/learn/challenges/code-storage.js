/* global cy */

const selectors = {
  defaultOutput: '.output-text',
  editor: '.monaco-editor'
};

const location =
  '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';

describe('Challenge with editor', function () {
  before(() => {
    cy.visit(location);
  });

  it('renders seed code without localStorage', () => {
    const editorContents = `<h1>Hello</h1>`;
    cy.get(selectors.editor)
      .contains(editorContents)
      .type(`<h1>Hello World</h1>`);
    cy.reload();
    cy.get(selectors.editor).contains(editorContents);
  });

  it('renders code from localStorage after "Ctrl + S"', () => {
    const editorContents = `<h1>Hello</h1>`;
    cy.get(selectors.editor)
      .contains(editorContents)
      .type(`<h1>Hello World</h1>{ctrl+s}`);
    cy.contains("Saved! Your code was saved to your browser's local storage.");
    cy.reload();
    cy.get(selectors.editor).contains('<h1>Hello World</h1>');
  });
});
