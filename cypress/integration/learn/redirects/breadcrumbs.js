const challengeUrl =
  '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';

const superBlockUrl = '/learn/responsive-web-design';
const courseUrl = '/learn/responsive-web-design/#basic-html-and-html5';

describe('The breadcumbs should work corectly', () => {
  it('It should have a superblock and a course', () => {
    cy.visit(challengeUrl);
    cy.get('.ellipsis').contains('Responsive Web Design').and('be.visible');
    cy.get('.breadcrumb-left > a')
      .should('have.attr', 'href')
      .and('include', superBlockUrl);
    cy.get('.breadcrumb-right > a')
      .contains('Basic HTML and HTML5')
      .and('be.visible');
    cy.get('.breadcrumb-right > a')
      .should('have.attr', 'href')
      .and('include', courseUrl);
  });

  it('Should redirect to the right url', () => {
    cy.visit(challengeUrl);
    cy.get('.breadcrumb-left > a').click();
    cy.url().should('include', '/responsive-web-design');
    cy.visit(challengeUrl);
    cy.get('.breadcrumb-right > a').click();
    cy.url().should('include', '/responsive-web-design/#basic-html-and-html5');
  });
});
