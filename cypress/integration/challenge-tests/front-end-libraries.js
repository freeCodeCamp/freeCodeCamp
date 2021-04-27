/* global cy */
describe('Visit Front End Development', () => {
  before(() => {
    cy.task('getCurriculum', 'english').then(curriculum => {
      cy.task('scopeCurriculum', {
        curriculum,
        superblock: 'front-end-libraries'
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
