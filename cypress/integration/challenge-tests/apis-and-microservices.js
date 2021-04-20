/* global cy */

describe('Visit APIs and Microservices', () => {
  it(`should be possible to visit all of the challenges`, () => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'apis-and-microservices'
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
