const editorElement = {
  editor: '.monaco-editor'
};

describe('Editor Shortcuts', () => {
  beforeEach(() => {
    cy.visit(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
  });

  it('Editor and body should have the same theme', () => {
    cy.login();
    cy.get('body').should('have.class', 'light-palette');
    // I don't know how to create these tests 🤷‍♀️
    cy.get('');
  });

  it('Should handle Alt+Enter', () => {
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .type('{alt}{enter}')
      .should('have.value', '<h1>Hello</h1>\n');
  });

  it('Should ignore Ctrl+Enter', () => {
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .type('{ctrl}{enter}')
      .should('have.value', '<h1>Hello</h1>');
  });
});
