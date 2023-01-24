const outputSelectors = {
  defaultOutput: '.output-text',
  editor: 'div.monaco-editor',
  hotkeys: '.default-layout > div',
  runTestsButton: 'button:contains("Run the Tests")'
};

const outputLocations = {
  index:
    '/learn/responsive-web-design/basic-html-and-html5/' +
    'say-hello-to-html-elements',
  jQuery:
    '/learn/front-end-development-libraries/jquery/' +
    'target-html-elements-with-selectors-using-jquery',
  js:
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/' +
    'comment-your-javascript-code'
};

const defaultOutput = `
/**
* Your test output will go here
*/`;

const runningOutput = '// running tests';
const finishedOutput = '// tests completed';

describe('Classic challenge', function () {
  before(() => {
    cy.visit(outputLocations.index);
  });

  it('renders the default output text', () => {
    cy.title().should(
      'eq',
      'Basic HTML and HTML5: Say Hello to HTML Elements |' + ' freeCodeCamp.org'
    );
    cy.get(outputSelectors.defaultOutput).contains(defaultOutput);
  });

  it('shows test output when the tests are run', () => {
    // first wait for the editor to load
    cy.get(outputSelectors.editor, { timeout: 15000 });
    cy.get(outputSelectors.runTestsButton)
      .click()
      .then(() => {
        cy.get(outputSelectors.defaultOutput)
          .contains(runningOutput)
          .contains(finishedOutput);
      });
  });

  it('shows test output when the tests are triggered by the keyboard', () => {
    focusEditor()
      .type('{ctrl}{enter}')
      .then(() => {
        cy.get(outputSelectors.defaultOutput)
          .contains(runningOutput)
          .contains(finishedOutput);
      });
  });
});

describe('jQuery challenge', function () {
  before(() => {
    cy.visit(outputLocations.jQuery);
  });

  it('renders the default output text', () => {
    cy.title().should(
      'eq',
      'jQuery: Target HTML Elements with Selectors Using jQuery | freeCodeCamp.org'
    );
    cy.get(outputSelectors.defaultOutput).contains(defaultOutput);
  });

  it('should not show a reference error', () => {
    cy.wait(5000);
    cy.get(outputSelectors.defaultOutput).should(
      'not.contain',
      'ReferenceError: $ is not defined'
    );
  });
});

describe('Custom output for JavaScript objects', function () {
  beforeEach(() => {
    cy.visit(outputLocations.js);
    focusEditor().type('{ctrl}a').clear();
  });

  it('Set object', () => {
    focusEditor().type(
      'const set = new Set();{enter}set.add(1);{enter}set.add("set");{enter}set.add(10);{enter}console.log(set);'
    );
    cy.get(outputSelectors.defaultOutput).should(
      'contain',
      'Set(3) {1, set, 10}'
    );
  });

  it('Map object', () => {
    focusEditor().type(
      'const map = new Map();{enter}map.set("first", 1);{enter}map.set("second", 2);{enter}map.set("other", "map");{enter}console.log(map);'
    );
    cy.get(outputSelectors.defaultOutput).should(
      'contain',
      'Map(3) {first => 1, second => 2, other => map})'
    );
  });
});

function focusEditor() {
  return cy
    .get(outputSelectors.editor, {
      timeout: 15000 // first wait for the editor to load
    })
    .first()
    .click()
    .focused();
}
