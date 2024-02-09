describe('Donate page', () => {
  it('Donation ', () => {
    cy.task('seed', ['certified-user']);
    cy.login('certified-user');
    cy.visit('/donate');
    cy.get("[data-cy='donation-tier-selection-button']").click();

    cy.get('.donation-elements', { timeout: 10000 }).within(() => {
      cy.fillElementsInput('cardNumber', '4242424242424242');
      cy.fillElementsInput('cardExpiry', '1025');
    });
    cy.get("[data-cy='donation-confirmation-button']").click();
    cy.contains('We are processing your donation.').should('be.visible');
    cy.contains('Thank You for Being a Supporter', { timeout: 10000 }).should(
      'be.visible'
    );
  });
});
