const cSharpLocations = {
  challenge:
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code',
  trophy:
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
};

describe('C Sharp', () => {
  before(() => {
    cy.task('seed');
  });
  describe('Challenges', () => {
    before(() => {
      cy.visit(cSharpLocations.challenge);
    });

    it('renders the correct buttons', () => {
      cy.contains('Check your answer').should('be.visible');
      cy.contains('Ask for Help').should('be.visible');
    });
  });

  describe('Trophy Challenges', () => {
    before(() => {
      cy.login();
      cy.visit(cSharpLocations.trophy);
    });

    it('renders the correct buttons', () => {
      cy.contains('Link Account').should('be.visible');
      cy.contains('Verify Trophy').should('be.visible');
      cy.contains('Ask for Help').should('be.visible');
    });
  });
});
