const outputLocation = {
  catApp:
    '/learn/2022/responsive-web-design/' +
    'learn-html-by-building-a-cat-photo-app/step-2'
};

describe('lower jaw', () => {
  before(() => {
    cy.visit(outputLocation.catApp);
  });

  it(
    'Should show the quote when the code passes',
    { browser: ['electron', 'chrome', 'chromium', 'firefox', 'edge'] },
    () => {
      cy.visit(
        '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
      );
      cy.get(`${'.react-monaco-editor-container'} textarea`, { timeout: 16000 })
        .click()
        .focused()
        .type('{downArrow}')
        .clear()
        .type('<h2>Cat Photos</h2>');
      cy.contains('Check Your Code (Ctrl + Enter)').click();
      cy.contains(
        'Congratulations, your code passes. Submit your code to continue.'
      );
      cy.get('.hint-description p').should('not.be.empty');
    }
  );
});
