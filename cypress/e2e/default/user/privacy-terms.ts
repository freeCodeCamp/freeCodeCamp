// TODO: DRY out the parts before clicking "Yes please" and "No thanks"
describe('Privacy terms', () => {
  it('should accept update privacy terms if requests emails from Quincy', () => {
    // Flag used to identify if the `/update-privacy-terms` have been called
    let privacyTermsUpdated = false;
    cy.intercept('PUT', '/update-privacy-terms', () => {
      privacyTermsUpdated = true;
    }).as('updatePrivacyTerms');
    // Seed dev user with `acceptedPrivacyTerms` unset
    cy.task('seed', ['--unset-privacy-terms']);
    // Go to the homepage and log in manually so we can assert the following:
    // 1. Redirection to /email-sign-up works properly
    // 2. The /update-privacy-terms has not been requested
    cy.visit('/');
    cy.get('[data-test-label="landing-small-cta"]').click();
    // Since we're using the dev login, we do
    cy.wrap(privacyTermsUpdated).should('eq', false);
    cy.visit('/email-sign-up');
    // Assert email sign up elements and make sure we don't get redirected somewhere else
    cy.title().should('contain', 'Email Sign Up');
    cy.get('[data-cy="email-sign-up"]').should('exist');
    // Accept
    cy.get('button:contains("Yes please")').click();
    cy.wait('@updatePrivacyTerms').then(() => {
      expect(privacyTermsUpdated).to.eq(true);
      cy.contains('Welcome back');
      cy.location('pathname').should('contain', '/learn');
    });
  });

  it('should accept update privacy terms if the user rejects emails from Quincy', () => {
    // Flag used to identify if the `/update-privacy-terms` have been called
    let privacyTermsUpdated = false;
    cy.intercept('PUT', '/update-privacy-terms', () => {
      privacyTermsUpdated = true;
    }).as('updatePrivacyTerms');
    // Seed dev user with `acceptedPrivacyTerms` unset
    cy.task('seed', ['--unset-privacy-terms']);
    // Go to the homepage and log in manually so we can assert the following:
    // 1. Redirection to /email-sign-up works properly
    // 2. The /update-privacy-terms has not been requested
    cy.visit('/');
    cy.get('[data-test-label="landing-small-cta"]').click();
    // Since we're using the dev login, we do
    cy.wrap(privacyTermsUpdated).should('eq', false);
    cy.visit('/email-sign-up');
    // Assert email sign up elements and make sure we don't get redirected somewhere else
    cy.title().should('contain', 'Email Sign Up');
    cy.get('[data-cy="email-sign-up"]').should('exist');
    // Accept
    cy.get('button:contains("No thanks")').click();
    cy.wait('@updatePrivacyTerms').then(() => {
      expect(privacyTermsUpdated).to.eq(true);
      cy.contains('Welcome back');
      cy.location('pathname').should('contain', '/learn');
    });
  });
});
