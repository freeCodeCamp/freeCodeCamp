const rwdCert = '/certification/certifieduser/responsive-web-design';

const elements = {
  fccLogo: "[data-cy='freeCodeCamp-logo']",
  msLogo: "[data-cy='microsoft-logo']",
  issueDate: "[data-cy='issue-date']",
  quincySignature: "[data-cy='quincy-signature']",
  msSignature: "[data-cy='microsoft-signature']",
  solutionWidget: "[data-cy='solution-widget']"
};

describe('A certification,', function () {
  before(() => {
    cy.task('seed', ['certified-user']);
  });

  describe("while viewing someone else's Responsive Web Design Certification,", function () {
    it('should only render public components', () => {
      cy.visit(rwdCert);

      cy.get('.donation-section').should('not.exist');
      cy.contains('successfully completed');
      cy.contains('Responsive Web Design');
      cy.contains('Add this certification to my LinkedIn profile').should(
        'not.exist'
      );
      cy.contains('Share this certification on Twitter').should('not.exist');
      cy.get(elements.solutionWidget).should('be.visible');
    });
  });
});
