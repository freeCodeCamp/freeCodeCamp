/* global cy expect */

import '@testing-library/cypress/add-commands';

describe('Settings certifications area', () => {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit('/settings');
  });

  describe('initially', () => {
    it('Should render 11 "Claim Certification" buttons', () => {
      cy.findAllByText('Claim Certification').should($btns => {
        expect($btns).to.have.length(11);
      });
    });

    it('Should render zero "Show Certification" buttons', () => {
      cy.contains('Show Certification').should('not.exist');
    });

    it('Should render one "Agree" button', () => {
      cy.contains('Agree').should('exist');
    });

    describe('before isHonest', () => {
      it('Should show "must agree" message when trying to claim a cert', () => {
        cy.contains('Claim Certification').click();
        cy.contains(
          'To claim a certification, you must first accept our academic honesty policy'
        ).should('exist');
      });
    });

    describe('after isHonest', () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.visit('/settings');
      });

      it('Should render "You have accepted our Academic Honesty Policy." button after clicking "Agree"', () => {
        cy.contains('Agree').click({ force: true });
        cy.contains('You have accepted our Academic Honesty Policy.').should(
          'exist'
        );
      });

      it('Should show "incompleted projects" message when clicking "Claim Certification"', () => {
        cy.contains('Claim Certification').click({ force: true });

        cy.contains(
          'It looks like you have not completed the necessary steps. Please complete the required projects to claim the Responsive Web Design Certification'
        ).should('exist');
      });

      it('Should show "Your projects have been updated." message after submitting projects', () => {
        cy.get(
          '#dynamic-information-security-and-quality-assurance input'
        ).each(el => {
          cy.wrap(el)
            .clear({ force: true })
            .type('https://nhl.com', { force: true, delay: 0 });
        });

        cy.get('#dynamic-information-security-and-quality-assurance').then(
          form => {
            if (form[0][5] && form[0][5].innerHTML === 'Save Progress') {
              form[0][5].click({ force: true });
              cy.wait(1000);
            }
          }
        );

        cy.contains('Your projects have been updated.').should('exist');
      });

      it('Should render 12 "Claim Certification" buttons after submitting legacy projects', () => {
        cy.findAllByText('Claim Certification').should($btns => {
          expect($btns).to.have.length(12);
        });
      });

      it('Should show "congrats" message after claiming a cert', () => {
        cy.get(
          '#dynamic-information-security-and-quality-assurance button'
        ).click();

        cy.contains(
          '@developmentuser, you have successfully claimed the Legacy Information Security and Quality Assurance Certification! Congratulations on behalf of the freeCodeCamp.org team!'
        ).should('exist');
      });

      it('Should render a "Show Certification" button after submitting enough projects', () => {
        cy.findAllByText('Show Certification').should($btns => {
          expect($btns).to.have.length(1);
        });
      });
    });
  });
});
