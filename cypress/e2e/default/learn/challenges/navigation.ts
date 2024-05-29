// middle of block
const challenge1 = {
  url: '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator',
  nextUrl:
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock'
};

// last in superblock
const challenge2 = {
  url: '/learn/college-algebra-with-python/build-a-data-graph-explorer-project/build-a-data-graph-explorer',
  nextUrl:
    '/learn/college-algebra-with-python/#build-a-data-graph-explorer-project'
};

const rwdChallenge = {
  url: '/learn/2022/responsive-web-design/build-a-personal-portfolio-webpage-project/build-a-personal-portfolio-webpage',
  nextUrl:
    '/learn/2022/responsive-web-design/#build-a-personal-portfolio-webpage-project'
};

const rwdChallengeSolution = `<head>
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

describe('submitting a challenge', () => {
  before(() => {
    cy.task('seed');
  });

  beforeEach(() => {
    cy.login();
  });

  it('in the middle of a block should take you to the next challenge', () => {
    cy.visit(challenge1.url);
    cy.get('#solution').type('https://example.com').type('{enter}');
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', challenge1.nextUrl);
  });

  it('at the end of a superblock should take you to the superblock page with the current block hash', () => {
    cy.visit(challenge2.url);
    cy.get('#solution').type('https://example.com').type('{enter}');
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', challenge2.nextUrl);
  });

  it('should take you to the superblock page with the current hash after completing a multifile cert project', () => {
    cy.visit(rwdChallenge.url);
    cy.get('[data-cy=editor-container-indexhtml]')
      .click()
      .type(rwdChallengeSolution)
      .type('{ctrl}{enter}', { release: false, delay: 100 });
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', rwdChallenge.nextUrl);
  });
});
