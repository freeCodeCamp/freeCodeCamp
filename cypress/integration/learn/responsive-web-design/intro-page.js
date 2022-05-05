const selectors = {
  firstBlock: '.block-ui > .block:nth-child(1) > .map-title'
};

describe('Certification intro page', () => {
  before(() => {
    cy.exec('npm run seed');
    cy.clearCookies();
    cy.login();
    cy.visit('/learn/2022/responsive-web-design');
  });

  it('Should render', () => {
    cy.title().should(
      'eq',
      'Responsive Web Design Certification | freeCodeCamp.org'
    );
  });

  it('Should have certification intro text', () => {
    cy.contains(
      "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages"
    ).should('be.visible');
  });

  it('First block should be expanded', () => {
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('be.visible');
  });

  it('Second block should be closed', () => {
    cy.contains(
      'CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.'
    ).should('not.exist');
  });

  it('Block should handle toggle clicks correctly', () => {
    cy.get(selectors.firstBlock).click();
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('not.exist');
    cy.get(selectors.firstBlock).click();
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('be.visible');
  });
});
