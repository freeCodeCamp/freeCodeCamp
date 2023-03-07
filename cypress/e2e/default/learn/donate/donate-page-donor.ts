describe('Donate page', () => {
  beforeEach(() => {
    cy.exec('pnpm run seed -- --donor');
    cy.login();
  });

  it('Donor alert should be visible for donor', () => {
    cy.visit('/donate');

    cy.get('[data-cy="donate-alert"]').should('be.visible');

    cy.get('[data-cy="donate.thank-you"]').should(
      'have.text',
      'Thank you for being a supporter.'
    );
    cy.get('[data-cy="donate.bigger-donation"]').should(
      'have.text',
      "Want to make a bigger one-time donation, mail us a check, or give in other ways? Here are many other ways you can support our charity's mission."
    );
    cy.get('[data-cy="donate-link"]').should(
      'contain.attr',
      'href',
      'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'
    );
  });
});
