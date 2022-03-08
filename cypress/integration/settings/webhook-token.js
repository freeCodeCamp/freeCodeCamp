describe('Webhook token widget on settings page,', function () {
  describe('initially', function () {
    before(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.visit('/settings');
    });

    it('should not render', function () {
      cy.contains('Danger Zone');
      cy.get('.webhook-token').should('not.exist');
    });
  });

  describe('after creating token', function () {
    beforeEach(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.visit(
        '/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate'
      );
      cy.contains('Click here to start the course').click();
      cy.wait(2000);
      cy.visit('/settings');
    });

    it('should render', function () {
      cy.contains('Danger Zone');
      cy.get('.webhook-token').should('have.length', 1);
    });

    it('should allow you to delete your token', function () {
      cy.contains('Delete my user token').click();
      cy.contains('Your user token has been deleted.');
    });
  });
});
