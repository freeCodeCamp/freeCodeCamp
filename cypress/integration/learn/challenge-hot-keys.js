const selectors = {
  instructions: '.challenge-instructions',
  instructionsPanel: '.instructions-panel',
  editorContainer: '.monaco-editor',
  console: '.output-text'
};

const links = {
  link1:
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  link2:
    '/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
  link3:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page',
  link4:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form',
  videoLink1:
    '/learn/scientific-computing-with-python/python-for-everybody/introduction-why-program',
  videoLink2:
    'learn/scientific-computing-with-python/python-for-everybody/introduction-hardware-architecture'
};

describe('The hotkeys should work correctly', () => {
  beforeEach(() => {
    cy.visit(links.link1);
  });

  it('should be possible to navigate to the next challenge/projects and previous', () => {
    cy.focused().type('{esc}');
    cy.focused().type('n');
    cy.url().should('include', links.link2);
    cy.focused().type('{esc}');
    cy.focused().type('p');
    cy.url().should('include', links.link1);
    cy.visit(links.link3);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.link4);
    cy.focused().type('{esc}').type('p');
    cy.url().should('include', links.link3);
  });

  it('should be possible to navigate to the next video and previous', () => {
    cy.visit(links.videoLink1);
    cy.get(selectors.instructions).click().type('{esc}').type('n');
    cy.url().should('include', links.videoLink2);
    cy.get(selectors.instructions).click().type('{esc}').type('p');
    cy.url().should('include', links.videoLink1);
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
    cy.get(selectors.instructionsPanel).click().type('r');
    cy.get(selectors.instructionsPanel).should('have.focus');
  });
});
