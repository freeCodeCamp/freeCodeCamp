/* global cy */

describe('Visit JavaScript Algorithms and Data Structures', () => {
  cy.task('getCurriculum', { lang: 'english' }).then(curriculum => {
    it(`should be possible to visit all of the challenges`, () => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'javascript-algorithms-and-data-structures'
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
