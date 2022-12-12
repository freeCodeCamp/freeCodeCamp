import { selectors } from '../../../../support/selectors';

const location =
  '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';

describe('Challenge with editor', function () {
  before(() => {
    cy.visit(location);
  });

  it('renders seed code without localStorage', () => {
    const editorContents = `<h1>Hello</h1>`;
    cy.get(selectors.class.reactMonacoEditor)
      .as('editor')
      .contains(editorContents);
    cy.get('@editor').click().focused().type(`{movetoend}<h1>Hello World</h1>`);
    cy.reload();
    cy.get('@editor', { timeout: 10000 }).contains(editorContents);
  });

  it('renders code from localStorage after "Ctrl + S"', () => {
    const editorContents = `<h1>Hello</h1>`;
    cy.get(selectors.class.reactMonacoEditor)
      .as('editor')
      .contains(editorContents);
    cy.get('@editor')
      .click()
      .focused()
      .type(`{movetoend}<h1>Hello World</h1>{ctrl+s}`);
    cy.contains("Saved! Your code was saved to your browser's local storage.");
    cy.reload();
    cy.get('@editor', { timeout: 10000 }).contains(
      '<h1>Hello</h1><h1>Hello World</h1>'
    );
  });
});
