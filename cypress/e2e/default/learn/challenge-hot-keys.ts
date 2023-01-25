const hotKeySelectors = {
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
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine',
  frontEnd2:
    '/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer',
  backEnd1:
    '/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice',
  backEnd2:
    'learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice',
  video1:
    '/learn/scientific-computing-with-python/python-for-everybody/introduction-why-program',
  video2:
    'learn/scientific-computing-with-python/python-for-everybody/introduction-hardware-architecture'
};

// It's possible for the location to change before the new page has loaded, so
// we wait for these titles to be present:
const titles = {
  classic2: 'Headline with the h2 Element',
  frontEnd2: 'Build a Markdown Previewer',
  backEnd2: 'Request Header Parser Microservice',
  video2: 'Introduction: Hardware Architecture'
};

describe('The hotkeys should work correctly', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/settings');
    // enable shortcuts
    cy.get('form[data-testid="fcc-enable-shortcuts-setting"]').within(() => {
      cy.contains('On').click();
    });
  });
  it('should be possible to navigate to the next challenge/projects and previous', () => {
    cy.visit(links.classic1);
    cy.focused().type('{esc}');
    cy.focused().type('n');
    cy.url().should('include', links.classic2);
    cy.contains(titles.classic2);
    cy.focused().type('p');
    cy.url().should('include', links.classic1);
    cy.visit(links.frontEnd1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.frontEnd2);
    cy.contains(titles.frontEnd2);
    cy.focused().type('p');
    cy.url().should('include', links.frontEnd1);
  });

  it('should be possible to navigate to the next (and previous) video', () => {
    cy.visit(links.video1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.video2);
    cy.contains(titles.video2);
    cy.focused().type('p');
    cy.url().should('include', links.video1);
  });

  it('should be possible to navigate to the next (and previous) backend project', () => {
    cy.visit(links.backEnd1);
    cy.focused().type('{esc}').type('n');
    cy.url().should('include', links.backEnd2);
    cy.contains(titles.backEnd2);
    cy.focused().type('p');
    cy.url().should('include', links.backEnd1);
  });

  it('should be possible to focus on the editor with pressing "e"', () => {
    cy.visit(links.classic1);
    cy.get(hotKeySelectors.editorContainer).click();
    cy.focused().as('editor').type('{esc}');
    cy.get(hotKeySelectors.instructions).click().type('e');
    cy.get('@editor').should('have.focus');
  });

  it('should be possible to press ctrl enter to run the test', () => {
    cy.visit(links.classic1);
    cy.get(hotKeySelectors.instructions).click().type('{ctrl}{enter}');
    cy.get(hotKeySelectors.console).contains('// running tests');
  });

  it('should be possible to go to navigation view by pressing escape', () => {
    cy.visit(links.classic1);
    cy.get(hotKeySelectors.editorContainer).click();
    cy.focused().as('editor').type('{esc}');
    cy.get('@editor').should('not.have.focus');
  });

  it('it should be possible to focus on the instructions by pressing r', () => {
    cy.visit(links.classic1);
    cy.get(hotKeySelectors.editorContainer).type('{esc}');
    cy.get(hotKeySelectors.console).click().type('r');
    cy.get(hotKeySelectors.instructionsPanel).should('have.focus');
  });
});
