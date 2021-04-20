/* global cy */

describe('Visit Responsive Web Design', () => {
  cy.task('getCurriculum', { lang: 'english' }).then(curriculum => {
    it(`should be possible to visit all of the challenges`, () => {
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
