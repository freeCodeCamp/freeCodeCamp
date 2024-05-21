describe('Front End Development Libraries Superblock', () => {
  before(() => {
    cy.task('seed');
    cy.login();
    cy.visit('/learn/front-end-development-libraries');
  });
  describe('Before submitting projects', () => {
    it('should navigate to "/settings#cert-front-end-development-libraries" when clicking the "Go to settings to claim your certification" anchor', () => {
      cy.contains('Go to settings to claim your certification').click();
      cy.url().should(
        'match',
        /\/settings\/?#cert-front-end-development-libraries/
      );
    });
  });
});
