import { selectors } from '../../../../support/selectors';

describe('JavaScript challenges', function () {
  const location =
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code';

  before(() => {
    cy.visit(location);
  });

  it('locks and unlocks code checks when a user makes and fixes an error', () => {
    const workingOutput = 'Your test output will go here';
    // We're using this as a proxy for the lock, since we don't currently
    // disable the button when there's a syntax error (the checks will just not
    // be triggered)
    const brokenOutput = 'SyntaxError: unknown: Unexpected token';
    // Unlocked
    cy.get(selectors.dataCy.outputText).as('output').contains(workingOutput);
    // Lock with a syntax error
    cy.get(selectors.class.reactMonacoEditor)
      .as('editor')
      .click()
      .focused()
      .type(`{movetoend}var`);
    cy.get('@output').contains(brokenOutput);

    // Unlock by fixing the error.
    cy.get('@editor').click().focused().type(`{movetoend} x = 1;`);
    cy.get('@output').contains(workingOutput);
  });
});
