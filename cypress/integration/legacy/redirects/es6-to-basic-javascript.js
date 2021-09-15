describe('ES6 to Basic JavaScript Redirects', () => {
  const basePath = '/learn/javascript-algorithms-and-data-structures';

  it(`should redirect from ${basePath}/es6/... to ${basePath}/basic-javascript/...`, () => {
    cy.visit(
      `${basePath}/es6/explore-differences-between-the-var-and-let-keywords`
    );
    cy.location().should(loc => {
      expect(loc.pathname).to.eq(
        `${basePath}/basic-javascript/explore-differences-between-the-var-and-let-keywords`
      );
    });

    cy.visit(
      `${basePath}/es6/declare-a-read-only-variable-with-the-const-keyword`
    );
    cy.location().should(loc => {
      expect(loc.pathname).to.eq(
        `${basePath}/basic-javascript/declare-a-read-only-variable-with-the-const-keyword`
      );
    });
  });
});
