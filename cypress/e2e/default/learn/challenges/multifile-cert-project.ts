const save1text = 'save 1';
const save2text = 'save 2';

const editorElements = {
  editor: '.react-monaco-editor-container',
  saveCodeBtn: '[data-cy="save-code-to-database-btn"]',
  closeFlash: '.close'
};

describe('multifileCertProjects', function () {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit(
      'learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page'
    );
  });

  beforeEach(() => {
    cy.preserveSession();
  });

  it('should save and reload user code', function () {
    // save to database (savedChallenges) when clicking save code button
    cy.get(editorElements.editor).click().focused().clear().type(save1text);
    cy.get(editorElements.saveCodeBtn).click();
    cy.contains('Your code was saved to the database.');
    // load saved code on a hard refresh
    cy.reload();
    cy.contains(save1text);
  });

  it('should save using ctrl+s hotkey and persist through navigation', function () {
    // since rapid clicks will cause the save requests to be ignored, we have to
    // purge the db:
    cy.exec('npm run seed');
    // and the redux store:
    cy.reload();
    cy.get(editorElements.editor)
      .click()
      .focused()
      .clear()
      .type(`${save2text}{ctrl+s}`);
    cy.contains('Your code was saved to the database.');
    cy.get(editorElements.closeFlash).click();
    // load saved code when navigating site (no hard refresh)'
    cy.contains('Responsive Web Design Projects').click();
    cy.contains('In this Responsive Web Design Certification');
    cy.contains('Build a Tribute Page').click();
    cy.contains(save2text);
    // trigger the warning about saving too quickly
    cy.reload();
    cy.get(editorElements.editor)
      .click()
      .focused()
      .type(`{ctrl+s}`)
      // wait a few ms or it's too fast
      .wait(500)
      .type(`{ctrl+s}`);
    cy.contains('Your code was not saved.');
  });
});
