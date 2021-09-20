const selectors = {
  instructions: '.challenge-instructions',
  instructionsPanel: '.instructions-panel',
  editorContainer: '.monaco-editor',
  console: '.output-text'
};

const links = {
  classic1:
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  classic2:
    '/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
  frontEnd1:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page',
  frontEnd2:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form',
  backEnd1:
    '/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice',
  backEnd2:
    'learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice',
  video1:
    '/learn/scientific-computing-with-python/python-for-everybody/introduction-why-program',
  video2:
    'learn/scientific-computing-with-python/python-for-everybody/introduction-hardware-architecture'
};

describe('The hotkeys should work correctly', () => {
  beforeEach(() => {
    cy.visit(links.classic1);
  });

  it('should be possible to navigate to the next challenge/projects and previous', () => {
    cy.focused().type('{esc}');
    cy.focused().type('n');
    cy.url().should('include', links.classic2);
    cy.focused().type('p');
    cy.url().should('include', links.classic1);
    cy.visit(links.frontEnd1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.frontEnd2);
    cy.focused().type('p');
    cy.url().should('include', links.frontEnd1);
  });

  it('should be possible to navigate to the next (and previous) video', () => {
    cy.visit(links.video1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.video2);
    cy.focused().type('p');
    cy.url().should('include', links.video1);
  });

  it('should be possible to navigate to the next (and previous) backend project', () => {
    cy.visit(links.backEnd1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.backEnd2);
    cy.focused().type('p');
    cy.url().should('include', links.backEnd1);
  });

  it('should be possible to focus on the editor with pressing "e"', () => {
    cy.get(selectors.editorContainer).click();
    cy.focused().as('editor').type('{esc}');
    cy.get(selectors.instructions).click().type('e');
    cy.get('@editor').should('have.focus');
  });

  it('should be possible to press ctrl enter to run the test', () => {
    cy.get(selectors.instructions).click().type('{ctrl}{enter}');
    cy.get(selectors.console).contains('// running tests');
  });

  it('should be possible to go to navigation view by pressing escape', () => {
    cy.get(selectors.editorContainer).click();
    cy.focused().as('editor').type('{esc}');
    cy.get('@editor').should('not.have.focus');
  });

  it('it should be possible to focus on the instructions by pressing r', () => {
    cy.get(selectors.editorContainer).type('{esc}');
    cy.get(selectors.console).click().type('r');
    cy.get(selectors.instructionsPanel).should('have.focus');
  });
});
