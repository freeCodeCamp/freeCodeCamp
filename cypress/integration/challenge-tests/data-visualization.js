/* global cy */
describe('Visit Data Visualization', () => {
  before(() => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'data-visualization'
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
