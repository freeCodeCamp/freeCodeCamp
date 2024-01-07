describe('progress bar', () => {
  beforeEach(() => {
    cy.task('seed');
    cy.login();
  });

  it(
    'Should show the progress bar showing the completed percent on legacy challenges',
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

  it(
    'Should show the progress bar showing the completed percent on modern challenges',
    { browser: 'electron' },
    () => {
      cy.visit(
        '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
      );
      cy.get(`${'.react-monaco-editor-container'} textarea`, { timeout: 16000 })
        .click()
        .focused()
        .type('{ctrl}a')
        .clear()
        .type(`<h1>CatPhotoApp</h1>\n<h2>Cat Photos</h2>`);
      cy.contains('Check Your Code (Ctrl + Enter)').click({ force: true });
      cy.contains('Submit and go to next challenge');
      cy.get('.progress-bar-container').contains('1% complete');
    }
  );

  it(
    'Should show the progress bar showing the completed percent on modern challenges',
    { browser: 'electron' },
    () => {
      cy.visit(
        '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3'
      );
      cy.get(`${'.react-monaco-editor-container'} textarea`, { timeout: 16000 })
        .click()
        .focused()
        .type('{ctrl}a')
        .clear()
        .type(
          `<h2>Cat Photos</h2>\n<p>See more cat photos in our gallery.</p>`
        );
      cy.contains('Check Your Code (Ctrl + Enter)').click({ force: true });
      cy.contains('Submit and go to next challenge');
      cy.get('.progress-bar-container').contains('1% complete');
    }
  );
  it(
    'Should show the progress bar showing the completed percent on modern challenges',
    { browser: 'electron' },
    () => {
      cy.visit(
        '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-4'
      );
      cy.get(`${'.react-monaco-editor-container'} textarea`, { timeout: 16000 })
        .click()
        .focused()
        .type('{ctrl}a')
        .clear()
        .type(
          `<!-- TODO: Add link to cat photos -->\n<p>See more cat photos in our gallery.</p>`
        );
      cy.contains('Check Your Code (Ctrl + Enter)').click({ force: true });
      cy.contains('Submit and go to next challenge');
      cy.get('.progress-bar-container').contains('3% complete');
    }
  );
});
