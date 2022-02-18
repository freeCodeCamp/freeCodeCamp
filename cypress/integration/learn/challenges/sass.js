const location =
  '/learn/front-end-development-libraries/sass/' +
  'use-for-to-create-a-sass-loop';

const getIframeBody = () => {
  return cy
    .get('.challenge-preview iframe')
    .its('0.contentDocument')
    .should('exist')
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap);
};

describe('Sass Challenge', () => {
  before(() => {
    cy.visit(location);
  });

  it('should render the sass preview', () => {
    cy.get('.challenge-preview iframe')
      .its('0.contentDocument')
      .should('exist');
    getIframeBody().find('.text-1').should('exist');
    getIframeBody().find('.text-2').should('exist');
    getIframeBody().find('.text-3').should('exist');
    getIframeBody().find('.text-4').should('exist');
    getIframeBody().find('.text-5').should('exist');
  });
});
