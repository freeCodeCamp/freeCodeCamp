// middle of block
const challenge1 = {
  url: '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator',
  nextUrl:
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock'
};

// last in block
const challenge2 = {
  url: '/learn/project-euler/project-euler-problems-301-to-400/problem-400-fibonacci-tree-game',
  nextUrl: '/learn/project-euler/#project-euler-problems-301-to-400'
};

// last in superblock
const challenge3 = {
  url: '/learn/college-algebra-with-python/build-a-data-graph-explorer-project/build-a-data-graph-explorer',
  nextUrl:
    '/learn/college-algebra-with-python/#build-a-data-graph-explorer-project'
};

describe('submitting a challenge', () => {
  before(() => {
    cy.exec('pnpm run seed');
    cy.login();
  });

  beforeEach(() => {
    cy.preserveSession();
  });

  it('in the middle of a block should take you to the next challenge', () => {
    cy.visit(challenge1.url);
    cy.get('#solution').type('https://example.com').type('{enter}');
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', challenge1.nextUrl);
  });

  it('at the end of a block should take you to the superblock page with the current block hash', () => {
    const solution =
      'function fibonacciTreeGame() {{}return 438505383468410600{}}';
    cy.visit(challenge2.url);
    const selectAllKeys = Cypress.platform == 'darwin' ? '{cmd}a' : '{ctrl}a';
    cy.get(`${'.react-monaco-editor-container'} textarea:first`, {
      timeout: 16000
    }).as('editor');

    cy.get('@editor')
      .type(selectAllKeys)
      .type('{backspace}')
      .type(solution)
      .type('{ctrl}{enter}');
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', challenge2.nextUrl);
  });

  it('at the end of a superblock should take you to the superblock page with the current block hash', () => {
    cy.visit(challenge3.url);
    cy.get('#solution').type('https://example.com').type('{enter}');
    cy.contains('Submit and go to next challenge').click();
    cy.url().should('include', challenge3.nextUrl);
  });
});
