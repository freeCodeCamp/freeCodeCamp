import { selectors } from '../../../../support/selectors';

const location =
  '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';

describe('Challenge with editor', function () {
  it('the shortcut "Ctrl + S" saves the code', () => {
    cy.visit(location);

    // reloading without saving
    const editorContents = `<h1>Hello</h1>`;
    cy.get(selectors.class.reactMonacoEditor, { timeout: 10000 })
      .as('editor')
      .contains(editorContents);
    cy.get('@editor').click().focused().type(`{movetoend}<h1>Hello World</h1>`);
    cy.reload();
    cy.get('@editor').contains(editorContents);

    // reloading after saving
    cy.get('@editor')
      .click()
      .focused()
      .type(`{movetoend}<h1>Hello World</h1>{ctrl+s}`);
    cy.contains("Saved! Your code was saved to your browser's local storage.");
    cy.reload();
    cy.get('@editor').contains('<h1>Hello</h1><h1>Hello World</h1>');
  });
});
