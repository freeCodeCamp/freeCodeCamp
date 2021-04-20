/* global cy */

describe('Visit Front End Development', () => {
  cy.task('getCurriculum', { lang: 'english' }).then(curriculum => {
    it(`should be possible to visit all of the challenges`, () => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'front-end-libraries'
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
