/* global cy */

describe('A certification,', function() {
  describe('while viewing your own,', function() {
    before(() => {
      cy.visit('/');
      cy.contains("Get started (it's free)").click({ force: true });
      cy.contains('Update my account settings').click({ force: true });

      // set user settings to public to claim a cert
      cy.get('label:contains(Public)>input').each(el => {
        if (!/toggle-active/.test(el[0].parentElement.className)) {
          cy.wrap(el).click({ force: true });
          cy.wait(1000);
        }
      });

      // if honest policy not accepted
      cy.get('.honesty-policy button').then(btn => {
        if (btn[0].innerText === 'Agree') {
          btn[0].click({ force: true });
          cy.wait(1000);
        }
      });

      // fill in legacy front end form
      cy.get('#dynamic-legacy-front-end input').each(el => {
        cy.wrap(el)
          .clear({ force: true })
          .type('https://nhl.com', { force: true, delay: 0 });
      });

      // if "Save Progress" button exists
      cy.get('#dynamic-legacy-front-end').then(form => {
        if (form[0][10] && form[0][10].innerHTML === 'Save Progress') {
          form[0][10].click({ force: true });
          cy.wait(1000);
        }
      });

      // if "Claim Certification" button exists
      cy.get('#dynamic-legacy-front-end').then(form => {
        if (form[0][10] && form[0][10].innerHTML === 'Claim Certification') {
          form[0][10].click({ force: true });
          cy.wait(1000);
        }
      });

      cy.get('#button-legacy-front-end')
        .contains('Show Certification')
        .click({ force: true });
    });

    it('should render a LinkedIn button', function() {
      cy.contains('Add this certification to my LinkedIn profile')
        .should('have.attr', 'href')
        .and(
          'match',
          // eslint-disable-next-line max-len
          /https:\/\/www\.linkedin\.com\/profile\/add\?startTask=CERTIFICATION_NAME&name=Legacy Front End&organizationId=4831032&issueYear=\d\d\d\d&issueMonth=\d\d?&certUrl=https:\/\/freecodecamp\.org\/certification\/developmentuser\/legacy-front-end/
        );
    });

    it('should render a Twitter button', function() {
      cy.contains('Share this certification on Twitter').should(
        'have.attr',
        'href',
        'https://twitter.com/intent/tweet?text=I just earned the Legacy Front End certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/developmentuser/legacy-front-end'
      );
    });

    it("should be issued with today's date", () => {
      const date = new Date();
      const issued = `Issued\xa0${new Intl.DateTimeFormat('en-US', {
        month: 'long'
      }).format(date)} ${date.getDate()}, ${date.getFullYear()}`;
      cy.get('[data-cy=issue-date]').should('have.text', issued);
    });
  });

  describe("while viewing someone else's,", function() {
    before(() => {
      cy.go('back');
      cy.contains('Sign me out of freeCodeCamp').click({ force: true });
      cy.visit('/certification/developmentuser/legacy-front-end');
    });

    it('should not render a LinkedIn button', function() {
      cy.contains('Add this certification to my LinkedIn profile').should(
        'not.exist'
      );
    });

    it('should not render a Twitter button', function() {
      cy.contains('Share this certification on Twitter').should('not.exist');
    });
  });
});
