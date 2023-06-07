describe('Certification intro page', () => {
  it('Should render', () => {
    cy.visit('/learn/coding-interview-prep');
    cy.contains(
      "If you're looking for free coding exercises to prepare for your next job interview, we've got you covered."
    ).should('be.visible');

    cy.title().should('eq', 'Coding Interview Prep | freeCodeCamp.org');
  });
});
