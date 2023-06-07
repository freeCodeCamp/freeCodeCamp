const sassPathLocation =
  '/learn/front-end-development-libraries/sass/' +
  'use-for-to-create-a-sass-loop';

const getIframeBody = () => {
  return cy
    .get('.challenge-preview iframe')
    .its('0.contentDocument')
    .should('exist')
    .its('body')
    .should('not.be.undefined')
    .then(body => cy.wrap(body));
};

describe('Sass Challenge', () => {
  before(() => {
    cy.visit(sassPathLocation);
    cy.wait(5000);
  });

  it('should render the sass preview', () => {
    getIframeBody().find('.text-1');
    getIframeBody().find('.text-2');
    getIframeBody().find('.text-3');
    getIframeBody().find('.text-4');
    getIframeBody().find('.text-5');
  });
});
