const save1text = 'save 1';
const save2text = 'save 2';

const editorElements = {
  container: '.vertical .reflex-container',
  editor: '.react-monaco-editor-container',
  saveCodeBtn: '[data-cy="save-code-to-database-btn"]'
};

describe('multifileCertProjects', function () {
  before(() => {
    cy.task('seed');
  });

  beforeEach(() => {
    cy.login();
    cy.visit(
      'learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
  });

  it('should save and reload user code', function () {
    // save to database (savedChallenges) when clicking save code button
    cy.get(editorElements.container).find(editorElements.editor).click();
    // Firefox somehow can lose focus after the .clear()
    cy.focused().clear().click().type(save1text);
    cy.get(editorElements.editor).contains(save1text);
    cy.get(editorElements.saveCodeBtn).click();
    cy.contains('Your code was saved to the database.');
    // load saved code on a hard refresh
    cy.reload();
    cy.get(editorElements.container)
      .find(editorElements.editor)
      .contains(save1text);
  });

  it('should save using ctrl+s hotkey and persist through navigation', function () {
    // since rapid clicks will cause the save requests to be ignored, we have to
    // purge the db:
    cy.task('seed');
    cy.get(editorElements.container).find(editorElements.editor).click();
    cy.focused().clear().click().type(`${save2text}{ctrl+s}`);
    cy.get(editorElements.editor).contains(save2text);
    cy.contains('Your code was saved to the database.');
    // close flash message
    cy.get('button:contains("Close")').click();
    // load saved code when navigating site (no hard refresh)'
    cy.contains('Tribute Page').click();
    cy.get(editorElements.container)
      .find(editorElements.editor)
      .contains(save2text);
    // trigger the warning about saving too quickly
    cy.reload();
    cy.get(editorElements.container)
      .find(editorElements.editor)
      .click()
      .focused()
      .type(`{ctrl+s}`)
      // wait a few ms or it's too fast
      .wait(500)
      .type(`{ctrl+s}`);
    cy.contains('Your code was not saved.');
  });
});
