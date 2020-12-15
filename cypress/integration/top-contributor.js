/* global cy Cypress */

describe('Top contributor in user profile', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('npm run seed -- --top-contributor');
  });

  after(() => {
    cy.exec('npm run seed');
  });

  beforeEach(() => {
    cy.login();
    cy.contains('Profile').click({ force: true });

    // If you `npm run build` the site, then this will fail (unless you set the
    // CYPRESS_CI environment variable to true)
    if (Cypress.env('CYPRESS_CI') !== 'true') {
      cy.contains('Preview custom 404 page').click();
    }
  });

  it('Should show `Top Contributor` text with badge', () => {
    cy.contains('Top Contributor')
      .parent()
      .within(() => {
        cy.contains('Top Contributor').should('be.visible');
        cy.get('svg').should('be.visible');
      });
  });

  // eslint-disable-next-line max-len
  it('Should take user to `Top Contributor` page when `Top Contributor` gets clicked', () => {
    cy.contains('Top Contributor').should(
      'have.attr',
      'href',
      '/top-contributors'
    );
  });

  it('Should show years when it was achieved', () => {
    cy.contains('2017, 2018 and 2019').should('be.visible');
  });
});
