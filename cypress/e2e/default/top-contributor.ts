describe('Top contributor in user profile', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('pnpm run seed -- --top-contributor');
  });

  after(() => {
    cy.exec('pnpm run seed');
  });

  beforeEach(() => {
    cy.login();
    cy.contains('Profile').click({ force: true });

    // The following line is only required if you want to test it in development
    // cy.contains('Preview custom 404 page').click();
  });

  // eslint-disable-next-line max-len
  it('Should take user to `Top Contributor` page when `Top Contributor` gets clicked', () => {
    cy.contains('Top Contributor').should(
      'have.attr',
      'href',
      'https://www.freecodecamp.org/news/freecodecamp-top-contributors/'
    );
  });
});
