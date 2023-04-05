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

const visit = (darkAppearance: boolean) =>
  cy.visit(
    'learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-23',
    {
      onLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: darkAppearance,
            addListener: {}
          })
          .withArgs('(display-mode: standalone)')
          .returns({
            matches: true,
            addListener: {}
          })
          .withArgs('(forced-colors: active)')
          .returns({
            matches: false,
            addListener: {}
          });
      }
    }
  );

/*
describe('Editor displays light theme', () => {
  beforeEach(() => {
    visit(false);
  });

  it('Displays when signed out', () => {
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .should(
      'have.class',
        'vs'
    );
  });

  it('Displays when signed in', () => {
    cy.login();
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .should('have.class', 'vs');
  });
});
*/

describe('Editor displays dark theme', () => {
  beforeEach(() => {
    visit(true);
  });

  it('When signed out', () => {
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .should('have.class', 'vs-dark');
  });

  it('When signed in', () => {
    cy.login();
    cy.get(editorElement.editor, { timeout: 15000 })
      .first()
      .click()
      .focused()
      .should('have.class', 'vs-dark');
  });
});
