/* global cy */

describe('Visit APIs and Microservices', () => {
  cy.task('getCurriculum', { lang: 'english' }).then(curriculum => {
    it(`should be possible to visit all of the challenges`, () => {
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
