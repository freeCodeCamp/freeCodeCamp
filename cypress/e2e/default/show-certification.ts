const rwdCert = '/certification/certifieduser/responsive-web-design';
const cSharpCert =
  '/certification/certifieduser/foundational-c-sharp-with-microsoft';

const elements = {
  fccLogo: "[data-cy='freeCodeCamp-logo']",
  msLogo: "[data-cy='microsoft-logo']",
  issueDate: "[data-cy='issue-date']",
  quincySignature: "[data-cy='quincy-signature']",
  msSignature: "[data-cy='microsoft-signature']",
  solutionWidget: "[data-cy='solution-widget']"
};

const responsiveWebDesignUrl =
  'https://freecodecamp.org/certification/certifieduser/responsive-web-design';
const cSharpUrl =
  'https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft';

describe('A certification,', function () {
  before(() => {
    cy.task('seed', ['certified-user']);
  });

  describe('while viewing your Responsive Web Design Certification,', function () {
    it('should render the expected components', () => {
      cy.login('certified-user');
      cy.visit(rwdCert);
      cy.get('.donation-section').should('be.visible');
      cy.get(elements.fccLogo).should('be.visible');
      cy.get(elements.msLogo).should('not.exist');

      // This is intended to work in UTC. If running locally, this may fail due
      // to timezone differences.
      const issued = `Developer Certification on August 3, 2018`;
      cy.get(elements.issueDate).should('include.text', issued);
      cy.get('.information-container').should('include.text', '300 hours');
      cy.get('.qr-code').should('be.visible');
      cy.get(elements.quincySignature).should('be.visible');
      cy.get(elements.msSignature).should('not.exist');
      cy.get('.ribbon').should('be.visible');
      cy.get('.verify').should('include.text', responsiveWebDesignUrl);
      cy.contains('Add this certification to my LinkedIn profile')
        .should('have.attr', 'href')
        .and(
          'match',
          // eslint-disable-next-line max-len
          /https:\/\/www\.linkedin\.com\/profile\/add\?startTask=CERTIFICATION_NAME&name=Responsive%20Web%20Design&organizationId=4831032&issueYear=\d\d\d\d&issueMonth=\d\d?&certUrl=https:\/\/freecodecamp\.org\/certification\/certifieduser\/responsive-web-design/
        );
      cy.contains('Share this certification on Twitter').should(
        'have.attr',
        'href',
        'https://twitter.com/intent/tweet?text=I just earned the Responsive%20Web%20Design certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/responsive-web-design'
      );
      cy.get(elements.solutionWidget).should('be.visible');
    });
  });

  describe('while viewing your Foundational C# with Microsoft Certification,', function () {
    it('should render the expected components', () => {
      cy.login();
      cy.visit(cSharpCert);

      cy.get('.donation-section').should('be.visible');
      cy.get(elements.fccLogo).should('exist');
      cy.get(elements.msLogo).should('exist');

      // This is intended to work in UTC. If running locally, this may fail due
      // to timezone differences.
      const issued = `Developer Certification on September 18, 2023`;
      cy.get(elements.issueDate).should('include.text', issued);

      // MS certification do not include hours to complete
      cy.get('.information-container').should('not.include.text', 'hours');
      cy.get('.qr-code').should('not.exist');
      cy.get(elements.quincySignature).should('be.visible');
      cy.get(elements.msSignature).should('exist');
      cy.get('.ribbon').should('not.exist');
      cy.get('.verify').should('include.text', cSharpUrl);

      cy.contains('Add this certification to my LinkedIn profile')
        .should('have.attr', 'href')
        .and(
          'match',
          // eslint-disable-next-line max-len
          /https:\/\/www\.linkedin\.com\/profile\/add\?startTask=CERTIFICATION_NAME&name=Foundational%20C%23%20with%20Microsoft&organizationId=4831032&issueYear=\d\d\d\d&issueMonth=\d\d?&certUrl=https:\/\/freecodecamp\.org\/certification\/certifieduser\/foundational-c-sharp-with-microsoft/
        );

      cy.contains('Share this certification on Twitter').should(
        'have.attr',
        'href',
        'https://twitter.com/intent/tweet?text=I just earned the Foundational%20C%23%20with%20Microsoft certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
      );

      cy.get(elements.solutionWidget).should('be.visible');
    });
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
