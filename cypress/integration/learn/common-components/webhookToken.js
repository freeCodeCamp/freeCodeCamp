describe('Webhook token component', function () {
  describe('while signed out', function () {
    describe('on CodeAlly project page', function () {
      before(() => {
        cy.exec('npm run seed');
        cy.visit(
          '/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database'
        );
      });

      it('should not render', function () {
        cy.get('[data-cy=webhook-challenge-page]').should('not.exist');
        cy.get('.webhook-token').should('not.exist');
      });
    });
  });

  describe('while signed in', function () {
    describe('on CodeAlly project page', function () {
      beforeEach(() => {
        cy.exec('npm run seed');
        cy.login();
        cy.visit(
          '/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database'
        );
      });

      it('should render', function () {
        cy.get('[data-cy=webhook-challenge-page]').should('exist');
      });

      it('should allow you to create a token', function () {
        cy.contains('Create a new token').click();
        cy.contains('You have successfully created a new token.');
      });
    });

    describe('on settings page', function () {
      beforeEach(() => {
        cy.exec('npm run seed');
        cy.login();
        cy.visit('/settings');
      });

      it('should render', function () {
        cy.get('[data-cy=webhook-settings-page]').should('exist');
      });

      it('should allow you to create and delete a token', function () {
        cy.contains('Create a new token').click();
        cy.contains('You have successfully created a new token.');
        cy.contains('Delete my token').click();
        cy.contains('Yes please, I would like to delete my token').click();
        cy.contains('Your token has been deleted');
      });
    });
  });
});
