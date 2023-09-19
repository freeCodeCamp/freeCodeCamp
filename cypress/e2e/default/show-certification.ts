const rwdCert = '/certification/certifieduser/responsive-web-design';
const cSharpCert =
  '/certification/certifieduser/foundational-c-sharp-with-microsoft';

const elements = {
  fccLogo: "[data-cy='freeCodeCamp-logo']",
  msLogo: "[data-cy='microsoft-logo']",
  issueDate: "[data-cy='issue-date']",
  quincySign: "[data-cy='quincy-signature']",
  msSign: "[data-cy='microsoft-signature']",
  solutionWidget: "[data-cy='solution-widget']"
};

const verifyRwdUrl =
  'https://freecodecamp.org/certification/certifieduser/responsive-web-design';
const verifyCSharpUrl =
  'https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft';

describe('A certification,', function () {
  before(() => {
    cy.task('seed', ['certified-user']);
  });

  describe('while viewing your Responsive Web Design Certification,', function () {
    before(() => {
      cy.login();
      cy.visit(rwdCert);
    });

    it('should render a donate section', () => {
      cy.get('.donation-section').should('exist');
    });

    it('should have a freeCodeCamp logo', () => {
      cy.get(elements.fccLogo).should('exist');
    });

    it('should not have a Microsoft logo', () => {
      cy.get(elements.msLogo).should('not.exist');
    });

    it('should be issued with the submission date', () => {
      const issued = `Developer Certification on August 3, 2018`;
      cy.get(elements.issueDate).should('include.text', issued);
    });

    it('should be issued with the number of hours undertaken', () => {
      const hours = '300 hours';
      cy.get('.information-container').should('include.text', hours);
    });

    it('should have a QR code', () => {
      cy.get('.qr-code').should('exist');
    });

    it("should have Quincy's signature", () => {
      cy.get(elements.quincySign).should('exist');
    });

    it('should not have a Microsoft signature', () => {
      cy.get(elements.msSign).should('not.exist');
    });

    it('should have the freeCodeCamp ribbon', () => {
      cy.get('.ribbon').should('exist');
    });

    it('should have a link to the certification', () => {
      cy.get('.verify').should('include.text', verifyRwdUrl);
    });

    it('should render a LinkedIn button', function () {
      cy.contains('Add this certification to my LinkedIn profile')
        .should('have.attr', 'href')
        .and(
          'match',
          // eslint-disable-next-line max-len
          /https:\/\/www\.linkedin\.com\/profile\/add\?startTask=CERTIFICATION_NAME&name=Responsive%20Web%20Design&organizationId=4831032&issueYear=\d\d\d\d&issueMonth=\d\d?&certUrl=https:\/\/freecodecamp\.org\/certification\/certifieduser\/responsive-web-design/
        );
    });

    it('should render a Twitter button', function () {
      cy.contains('Share this certification on Twitter').should(
        'have.attr',
        'href',
        'https://twitter.com/intent/tweet?text=I just earned the Responsive%20Web%20Design certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/responsive-web-design'
      );
    });

    it('should render the solution widget', () => {
      cy.get(elements.solutionWidget).should('exist');
    });
  });

  describe('while viewing your Foundational C# with Microsoft Certification,', function () {
    before(() => {
      cy.login();
      cy.visit(cSharpCert);
    });

    it('should render a donate section', () => {
      cy.get('.donation-section').should('exist');
    });

    it('should have a freeCodeCamp logo', () => {
      cy.get(elements.fccLogo).should('exist');
    });

    it('should have a Microsoft logo', () => {
      cy.get(elements.msLogo).should('exist');
    });

    it('should be issued with the submission date', () => {
      const issued = `Developer Certification on September 18, 2023`;
      cy.get(elements.issueDate).should('include.text', issued);
    });

    it('should not show the number of hours undertaken', () => {
      cy.get('.information-container').should('not.include.text', 'hours');
    });

    it('should not have a QR code', () => {
      cy.get('.qr-code').should('not.exist');
    });

    it("should have Quincy's signature", () => {
      cy.get(elements.quincySign).should('exist');
    });

    it('should have a Microsoft signature', () => {
      cy.get(elements.msSign).should('exist');
    });

    it('should not have the freeCodeCamp ribbon', () => {
      cy.get('.ribbon').should('not.exist');
    });

    it('should have a link to the certification', () => {
      cy.get('.verify').should('include.text', verifyCSharpUrl);
    });

    it('should render a LinkedIn button', function () {
      cy.contains('Add this certification to my LinkedIn profile')
        .should('have.attr', 'href')
        .and(
          'match',
          // eslint-disable-next-line max-len
          /https:\/\/www\.linkedin\.com\/profile\/add\?startTask=CERTIFICATION_NAME&name=Foundational%20C%23%20with%20Microsoft&organizationId=4831032&issueYear=\d\d\d\d&issueMonth=\d\d?&certUrl=https:\/\/freecodecamp\.org\/certification\/certifieduser\/foundational-c-sharp-with-microsoft/
        );
    });

    it('should render a Twitter button', function () {
      cy.contains('Share this certification on Twitter').should(
        'have.attr',
        'href',
        'https://twitter.com/intent/tweet?text=I just earned the Foundational%20C%23%20with%20Microsoft certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
      );
    });

    it('should render the solution widget', () => {
      cy.get(elements.solutionWidget).should('exist');
    });
  });

  describe("while viewing someone else's Responsive Web Design Certification,", function () {
    before(() => {
      cy.visit(rwdCert);
    });

    it('should not render a donate section', () => {
      cy.get('.donation-section').should('not.exist');
    });

    it('should display certificate', function () {
      cy.contains('successfully completed').should('exist');
      cy.contains('Responsive Web Design').should('exist');
    });

    it('should not render a LinkedIn button', function () {
      cy.contains('Add this certification to my LinkedIn profile').should(
        'not.exist'
      );
    });

    it('should not render a Twitter button', function () {
      cy.contains('Share this certification on Twitter').should('not.exist');
    });

    it('should render the solution widget', () => {
      cy.get(elements.solutionWidget).should('exist');
    });
  });
});
