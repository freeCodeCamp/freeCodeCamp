describe('User token widget on settings page,', function () {
  describe('initially', function () {
    before(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.visit('/settings');
    });

    it('should not render', function () {
      // make sure 'Danger Zone' is there so we know the page has rendered
      cy.contains('Danger Zone');
      cy.get('.user-token').should('not.exist');
    });
  });

  describe('after creating token', function () {
    beforeEach(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.visit(
        '/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate'
      );
      cy.get('[data-cy=start-codeally]').click();
      cy.wait(2000);
      cy.visit('/settings');
    });

    it('should render', function () {
      // make sure 'Danger Zone' is there so we know the page has rendered
      cy.contains('Danger Zone');
      cy.get('.user-token').should('have.length', 1);
    });

    it('should allow you to delete your token', function () {
      cy.get('[data-cy=delete-user-token]').click();
      cy.contains('Your user token has been deleted.');
    });
  });
});
