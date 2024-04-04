describe('CodeAlly cert challenge', function () {
  describe('before completing the project', function () {
    before(() => {
      cy.task('seed');
      cy.login();
      cy.visit(
        '/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database'
      );
    });

    it('should not allow you to submit a URL', function () {
      cy.get('input[name="solution"]')
        .type('https://example.com')
        .type('{enter}');

      cy.contains('You must complete the project first.');
    });
  });

  describe('after completing the project', function () {
    before(() => {
      cy.task('seed', ['certified-user']);
      cy.login('certified-user');
      cy.visit(
        '/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database'
      );
    });

    it('should allow you to submit a URL', function () {
      cy.get('input[name="solution"]')
        .type('https://example.com')
        .type('{enter}');

      cy.get('div[role="dialog"]')
        .contains('Submit and go to next challenge')
        .should('be.visible');
    });
  });
});
