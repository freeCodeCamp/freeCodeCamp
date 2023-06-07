describe('User token widget on settings page,', function () {
  describe('initially', function () {
    beforeEach(() => {
      cy.exec('pnpm run seed');
      cy.login();
    });

    it('should not render', function () {
      cy.visit('/settings');
      // make sure 'Danger Zone' is there so we know the page has rendered
      cy.contains('Danger Zone');
      cy.get('[data-cy=user-token]').should('not.exist');
    });
  });

  describe('after creating token', function () {
    beforeEach(() => {
      cy.exec('pnpm run seed');
      cy.login();
      cy.visit(
        '/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate'
      );
      cy.get('[data-cy=start-codeally]').click();
      cy.get('[data-cy=codeally-frame]').should('be.visible');
    });

    it('should allow you to delete your token', () => {
      cy.visit('/settings');
      // make sure 'Danger Zone' is there so we know the page has rendered
      cy.contains('Danger Zone');
      cy.get('[data-cy=user-token]').should('have.length', 1);

      cy.get('[data-cy=delete-user-token]').click();
      cy.contains('Your user token has been deleted.');
      cy.get('[data-cy=user-token]').should('not.exist');
    });
  });
});
