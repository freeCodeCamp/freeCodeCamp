/* global cy */

describe('Visit Responsive Web Design', () => {
  it(`should be possible to visit all of the challenges`, () => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'responsive-web-design'
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
