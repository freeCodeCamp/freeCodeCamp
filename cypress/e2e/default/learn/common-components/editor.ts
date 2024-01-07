const editorElement = {
  editor: '.monaco-editor'
};

describe('Editor Shortcuts', () => {
  it('Should handle Alt+Enter', () => {
    cy.visit(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .type('{alt}{enter}')
      .should('have.value', '<h1>Hello</h1>\n');
  });

  it('Should ignore Ctrl+Enter', () => {
    cy.visit(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .type('{ctrl}{enter}')
      .should('have.value', '<h1>Hello</h1>');
  });
});
