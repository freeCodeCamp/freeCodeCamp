/* global cy */

describe('Visit Front End Development', () => {
  it(`should be possible to visit all of the challenges`, () => {
    cy.task('getCurriculum', 'english').then(curriculum => {
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
