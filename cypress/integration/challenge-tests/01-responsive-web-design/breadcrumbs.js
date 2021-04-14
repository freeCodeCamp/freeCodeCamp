/* global cy */

describe('Test breadcrumbs', () => {
  it('should have the correct link', () => {
    cy.task('getCurriculum', { lang: 'english' }).then(curriculumObj => {
      cy.task('scopeCurriculum', {
        curriculum: curriculumObj,
        superblock: 'responsive-web-design',
        block: ['css-flexbox'],
        challenge: null
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
