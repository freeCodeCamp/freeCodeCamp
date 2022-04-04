const save1text = 'save 1';
const save2text = 'save 2';

const selectors = {
  editor: '.react-monaco-editor-container',
  saveCodeBtn: '[data-cy="save-code-to-database-btn"]'
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

  it('should show a save code button', function () {
    cy.get('[data-cy="save-code-to-database"]');
  });

  it('should save to database (savedChallenges) when clicking save code button', function () {
    cy.get(selectors.editor).click().focused().clear().type(save1text);
    cy.get(selectors.saveCodeBtn).click();
    cy.contains('Your code was saved to the database.');
  });

  it('should not allow you to save twice in a row too fast', function () {
    cy.get(selectors.saveCodeBtn).click().click();
    cy.contains('Your code was not saved.');
  });

  it('should load saved code on a hard refresh', function () {
    cy.reload();
    cy.contains(save1text);
  });

  it('should save to database (savedChallenges) when using ctrl+s hotkey', function () {
    cy.get(selectors.editor)
      .click()
      .focused()
      .clear()
      .type(`${save2text}{ctrl+s}`);
    cy.contains('Your code was saved to the database.');
  });

  it('should load saved code when navigating site (no hard refresh)', function () {
    cy.contains('Responsive Web Design Projects').click();
    cy.contains('Build a Tribute Page').click();
    cy.contains(save2text);
  });
});
