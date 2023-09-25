describe('Top contributor in user profile', () => {
  before(() => {
    cy.task('seed', ['--top-contributor']);
    cy.login('top-contributor');
  });

  after(() => {
    cy.task('seed');
  });

  it('Should show `Top Contributor` information', () => {
    // It it does 404, but still shows the profile.
    cy.visit('/developmentuser', { failOnStatusCode: false });
    // The following line is only required if you want to test it in development
    // cy.contains('Preview custom 404 page').click();
    cy.contains('Top Contributor')
      .parent()
      .within(() => {
        cy.contains('Top Contributor').should('be.visible');
        cy.get('svg').should('be.visible');
      });

    // it should have a link to the news article
    cy.contains('Top Contributor').should(
      'have.attr',
      'href',
      'https://www.freecodecamp.org/news/freecodecamp-top-contributors/'
    );

    // the years obtained should be visible
    cy.contains('2017, 2018 and 2019').should('be.visible');
  });
});
