/* global cy */

describe('Visit Data Visualization', () => {
  cy.task('getCurriculum', { lang: 'english' }).then(curriculum => {
    it(`should be possible to visit all of the challenges`, () => {
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
