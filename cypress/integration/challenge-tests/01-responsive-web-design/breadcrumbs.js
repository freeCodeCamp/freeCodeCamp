/* global cy */

describe('Test breadcrumbs', () => {
  it('should have the correct link', () => {
    cy.task('getCurriculum', { lang: 'english' }).then(curriculumObj => {
      cy.task('scopeCurriculum', {
        curriculum: curriculumObj,
        superblock: 'responsive-web-design',
        blocks: ['css-flexbox'],
        challenges: [
          'use-the-flex-shorthand-property',
          'use-the-align-self-property'
        ]
      }).then(challenges => {
        challenges.forEach(challenge => {
          cy.visit(challenge);
        });
      });
    });
  });
});
