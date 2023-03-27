describe('Donate page', () => {
  it('Donation ', () => {
    cy.exec('pnpm run seed');
    cy.login();
    cy.visit('/donate');
    cy.get('.donation-elements', { timeout: 10000 }).within(() => {
      cy.fillElementsInput('cardNumber', '4242424242424242');
      cy.fillElementsInput('cardExpiry', '1025');
    });
    cy.get('.confirm-donation-btn').click();
    cy.contains('We are processing your donation.').should('be.visible');
    cy.contains('Thank you for being a supporter.', { timeout: 10000 }).should(
      'be.visible'
    );
  });
});
