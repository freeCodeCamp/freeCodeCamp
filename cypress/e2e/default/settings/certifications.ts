import '@testing-library/cypress/add-commands';

describe('Settings certifications area', () => {
  describe('initially', () => {
    before(() => {
      cy.exec('pnpm run seed');
      cy.login();
    });

    it('Should render the default settings page', () => {
      cy.visit('/settings/');
      cy.findAllByText('Claim Certification').should($btns => {
        expect($btns).to.have.length(16);
      });
      cy.findByText('Show Certification').should('not.exist');
      cy.contains(`I agree to freeCodeCamp's Academic Honesty Policy.`);
      cy.contains('Claim Certification').click();
      cy.contains(
        'To claim a certification, you must first agree to our academic honesty policy'
      );
    });
  });

  describe('after isHonest', () => {
    before(() => {
      cy.exec('pnpm run seed');
      cy.login();
    });

    it('Should update the user as they try to claim their certifications', () => {
      cy.visit('/settings');
      cy.contains(`I agree to freeCodeCamp's Academic Honesty Policy.`).click();
      cy.contains('You have agreed to our Academic Honesty Policy.');
      cy.contains('Claim Certification').click();
      cy.contains(
        'It looks like you have not completed the necessary steps. Please complete the required projects to claim the Responsive Web Design Certification'
      );
    });
  });
});
