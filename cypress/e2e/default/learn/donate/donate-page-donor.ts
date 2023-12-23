describe('Donate page', () => {
  beforeEach(() => {
    cy.task('seed', ['--donor']);
    cy.login();
  });

  it('Donor CTA should be visible for donor', () => {
    cy.visit('/donate');
    cy.get('[data-cy="donate.thank-you"]').should(
      'have.text',
      'Thank You for Being a Supporter'
    );
    cy.get('[data-cy="donate.crucial-contribution"]').should(
      'have.text',
      'Your contribution will be crucial in creating resources that empower millions of people to learn new skills and support their families.'
    );
    cy.get('[data-cy="donate.if-support-further"]').should(
      'have.text',
      'If you want to support our charity further, please consider making a one-time donation, sending us a check, or learning about other ways you could support our charity.'
    );
    cy.get('[data-cy="donate-link"]').should(
      'contain.attr',
      'href',
      'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'
    );
  });
});
