describe('progress bar', () => {
  beforeEach(() => {
    cy.exec('pnpm run seed');
    cy.login();
  });

  it(
    'Should show the progress bar showing the completed percent',
    { browser: 'electron' },
    () => {
      cy.visit(
        '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables'
      );
      cy.get(`${'.react-monaco-editor-container'} textarea`, { timeout: 16000 })
        .click()
        .focused()
        .type('{ctrl}a')
        .clear()
        .type('var myName;');
      cy.contains('Run the Tests (Ctrl + Enter)').click({ force: true });
      cy.contains('Submit and go to next challenge');
      cy.get('.progress-bar-container').contains('1% complete');
    }
  );
});
