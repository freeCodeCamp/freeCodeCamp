const save1text = 'save 1';
const save2text = 'save 2';

const editorElements = {
  container: '.vertical .reflex-container',
  editor: '.react-monaco-editor-container',
  saveCodeBtn: '[data-cy="save-code-to-database-btn"]',
  closeFlash: '.close'
};

const portfolioChallenge = {
  url: '/learn/2022/responsive-web-design/build-a-personal-portfolio-webpage-project/build-a-personal-portfolio-webpage'
};

const portfolioChallengeSolution = `<head>
<style>
@media (max-width: 500px){
nav{
display: none;
}
}
</style>
</head>
<body>
<nav id="navbar">
<a href="#projects">text</a> |
</nav>
<main>
<section id="welcome-section">
<h1>text</h1>
</section><hr>
<section id="projects">
<h1>Projects</h1>
<h2 class="project-tile"><a id="profile-link" target="_blank" href="https://freecodecamp.org">text</a></h2>
</section><hr>
</body>
</html>`;

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
    // and the redux store:
    cy.reload();
    cy.get(editorElements.container).find(editorElements.editor).click();
    cy.focused().clear().click().type(`${save2text}{ctrl+s}`);
    cy.get(editorElements.editor).contains(save2text);
    cy.contains('Your code was saved to the database.');
    cy.get(editorElements.closeFlash).click();
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

  it('Should show the confetti when a cert challenge is completed', () => {
    cy.visit(portfolioChallenge.url);
    cy.get('[data-cy=editor-container-indexhtml]')
      .click()
      .type(portfolioChallengeSolution)
      .type('{ctrl}{enter}', { release: false, delay: 100 });
    cy.get('canvas').then(canvases => {
      const currentCanvasCount = canvases.length;
      cy.contains('Run the Tests (Ctrl + Enter)').click();
      cy.get('canvas').should('have.length', currentCanvasCount + 1);
    });
  });
});
