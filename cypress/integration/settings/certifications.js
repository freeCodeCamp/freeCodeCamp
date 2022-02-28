import '@testing-library/cypress/add-commands';

describe('Settings certifications area', () => {
  describe('initially', () => {
    before(() => {
      cy.exec('npm run seed');
      cy.login();
    });

    it('Should render the default settings page', () => {
      cy.visit('/settings/');
      cy.findAllByText('Claim Certification').should($btns => {
        expect($btns).to.have.length(16);
      });
      cy.findByText('Show Certification').should('not.exist');
      cy.contains('Agree');
      cy.contains('Claim Certification').click();
      cy.contains(
        'To claim a certification, you must first accept our academic honesty policy'
      );
    });
  });

  describe('after isHonest', () => {
    before(() => {
      cy.exec('npm run seed');
      cy.login();
    });

    it('Should update the user as they try to claim their certifications', () => {
      cy.visit('/settings');
      cy.contains('Agree').click();
      cy.contains('You have accepted our Academic Honesty Policy.');
      cy.contains('Claim Certification').click();
      cy.contains(
        'It looks like you have not completed the necessary steps. Please complete the required projects to claim the Responsive Web Design Certification'
      );
    });
  });
});
