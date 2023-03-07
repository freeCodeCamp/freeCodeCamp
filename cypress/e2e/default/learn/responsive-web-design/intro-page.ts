const introPageSelectors = {
  firstBlock: '[data-cy="learn-html-by-building-a-cat-photo-app"]'
};

describe('Certification intro page', () => {
  before(() => {
    cy.exec('pnpm run seed');
    cy.login();
  });

  beforeEach(() => {
    cy.preserveSession();
  });

  it('Should render and toggle correctly', () => {
    cy.visit('/learn/2022/responsive-web-design');
    cy.title().should(
      'eq',
      '(New) Responsive Web Design Certification | freeCodeCamp.org'
    );
    cy.contains(
      "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages"
    ).should('be.visible');

    // First block should be expanded
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('be.visible');

    // Second block should be closed
    cy.contains(
      'CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.'
    ).should('not.exist');

    // Block should handle toggle clicks correctly
    cy.get(introPageSelectors.firstBlock).click();
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('not.exist');
    cy.get(introPageSelectors.firstBlock).click();
    cy.contains(
      'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.'
    ).should('be.visible');
  });
});
