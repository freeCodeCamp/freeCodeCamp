describe('Donate page', () => {
  it('Should render correctly', () => {
    cy.visit('/donate');
    cy.title().should('eq', 'Support our charity | freeCodeCamp.org');

    cy.contains('Confirm your donation of $5 / month:').should('be.visible');

    cy.contains('Frequently asked questions');
    cy.contains('How can I get help with my donations?');
    cy.contains('How transparent is freeCodeCamp.org?');
    cy.contains('How efficient is freeCodeCamp?');
    cy.contains('How can I make a one-time donation?');
    cy.contains(
      'Does freeCodeCamp accept donations in Bitcoin or other cryptocurrencies?'
    );
    cy.contains('Can I mail a physical check?');
    cy.contains(
      'How can I set up matching gifts from my employer, or payroll deductions?'
    );
    cy.contains('How can I set up an Endowment Gift to freeCodeCamp.org?');
    cy.contains('How can I set up a Legacy gift to freeCodeCamp.org?').should(
      'be.visible'
    );
    cy.contains('How can I donate stock to freeCodeCamp.org?').should(
      'be.visible'
    );
    cy.contains(
      'I set up a monthly donation, but I need to update or pause the monthly recurrence. How can I do this?'
    );
    cy.contains(
      'Is there anything else I can learn about donating to freeCodeCamp.org?'
    );
  });
});
