/* global cy */
describe('Visit APIs and Microservices', () => {
  before(() => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'apis-and-microservices'
      }).as('challenges');
    });
  });

  it(`has access to the text`, () => {
    cy.get('@challenges').then(challenges => {
      describe(`visit challenge`, () => {
        challenges.forEach(challenge => {
          it(`should work correctly`, () => {
            cy.visit(challenge);
          });
        });
      });
    });
  });
});
