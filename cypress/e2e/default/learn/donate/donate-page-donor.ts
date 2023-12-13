describe('Donate page', () => {
  beforeEach(() => {
    cy.task('seed', ['--donor']);
    cy.login();
  });

  it('Donor CTA should be visible for donor', () => {
    cy.visit('/donate');
    cy.get('[data-cy="donate.thank-you"]').should(
      'have.text',
      'Thank you for being a supporter.'
    );
    cy.get('[data-cy="donate.crucial-contribution"]').should(
      'have.text',
      'Your contribution will be crucial in creating resources that empower millions of people to learn new skills and support their families.'
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
    cy.get('[data-cy="donate.make-another-monthly"]').should(
      'have.text',
      'If you want to make another monthly donation, please proceed with selecting your monthly donation amount.'
    );
  });
});
