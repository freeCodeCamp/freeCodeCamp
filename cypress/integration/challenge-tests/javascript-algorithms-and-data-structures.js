/* global cy */
describe('Visit JavaScript Algorithms and Data Structures', () => {
  before(() => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'javascript-algorithms-and-data-structures'
      }).as('challenges');
    });
  });

  it(`has access to the text`, () => {
    cy.get('@challenges').then(challenges => {
      describe(`visit challenge`, () => {
        challenges.forEach(challenge => {
          it(`should work correctly`, () => {
            cy.visit(challenge);
          });
        });
      });
    });
  });
});
