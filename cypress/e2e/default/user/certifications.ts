describe('Public profile certifications', () => {
  context('Signed in user viewing their own public profile', () => {
    before(() => {
      cy.exec('pnpm run seed:certified-user');
    });

    beforeEach(() => {
      cy.login();
    });

    it('Should show claimed certifications if the username has all lowercase characters', () => {
      cy.visit('/certifieduser', { failOnStatusCode: false });

      // The following line is only required if you want to test it in development
      //cy.contains('Preview custom 404 page').click();

      cy.get('[data-cy=claimed-certification]').should('have.length', 16);
    });

    it('Should show claimed certifications if the username includes uppercase characters', () => {
      // Modify username to include uppercase characters
      cy.goToSettings();
      cy.typeUsername('CertifiedUser');
      cy.contains('Username is available');
      cy.get('@usernameForm').contains('Save').click();
      cy.contains('We have updated your username to CertifiedUser').should(
        'be.visible'
      );

      cy.visit('/certifieduser', { failOnStatusCode: false });

      // The following line is only required if you want to test it in development
      //cy.contains('Preview custom 404 page').click();

      cy.get('[data-cy=claimed-certification]').should('have.length', 16);
    });
  });

  // To do: Add another context to test for cases where a logged out user views
  // a profile where the username has all lowercase chars, and some uppercase chars
  // when that's fixed
});
