describe('CodeAlly cert challenge', function () {
  describe('before completing the project', function () {
    before(() => {
      cy.exec('npm run seed');
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
      cy.exec('npm run seed:certified-user');
      cy.login();
      cy.visit(
        '/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database'
      );
    });

    it('should allow you to submit a URL', function () {
      cy.get('input[name="solution"]')
        .type('https://example.com')
        .type('{enter}');

      cy.get('.completion-modal-body');
    });
  });
});
