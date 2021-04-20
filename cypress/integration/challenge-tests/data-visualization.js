/* global cy */

describe('Visit Data Visualization', () => {
  it(`should be possible to visit all of the challenges`, () => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'data-visualization'
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
