describe('Privacy terms', () => {
  it('should not redirect away from email sign up page on login', () => {
    // Flag used to identify if the `/update-privacy-terms` have been called
    let privacyTermsUpdated = false;
    cy.intercept('PUT', '/update-privacy-terms', () => {
      privacyTermsUpdated = true;
    }).as('updatePrivacyTerms');

    // Seed dev user with `acceptedPrivacyTerms` unset
    cy.exec('pnpm run seed -- --unset-privacy-terms');
    // Go to the homepage and log in manually so we can assert the following:
    // 1. Redirection to /email-sign-up works properly
    // 2. The /update-privacy-terms has not been requested
    cy.visit('/');
    cy.get('[data-test-label="landing-small-cta"]').click();
    cy.location('pathname').should('contain', '/email-sign-up');
    cy.wrap(privacyTermsUpdated).should('eq', false);
    // Assert email sign up elements and make sure we don't get redirected somewhere else
    cy.title().should('contain', 'Email Sign Up');
    cy.get('[data-cy="email-sign-up"]').should('exist');
    // Navigate away from this page via quincy emails which should unmount the component
    // and request /update-privacy-terms
    cy.get('button:contains("Yes please")').click();
    cy.wait('@updatePrivacyTerms').then(() => {
      expect(privacyTermsUpdated).to.eq(true);
      cy.contains('Welcome back');
      cy.location('pathname').should('contain', '/learn');
    });
  });
});
