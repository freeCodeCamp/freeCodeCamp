/* global cy */

describe('Visit JavaScript Algorithms and Data Structures', () => {
  it(`should be possible to visit all of the challenges`, () => {
    cy.task('getCurriculum', 'english').then(curriculum => {
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
