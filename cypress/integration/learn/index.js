/* global cy expect */

const selectors = {
  challengeMap: "[data-test-label='learn-curriculum-map']"
};

const locations = {
  index: '/learn'
};

const superBlockNames = [
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'Front End Libraries',
  'Data Visualization',
  'APIs and Microservices',
  'Quality Assurance',
  'Scientific Computing with Python',
  'Data Analysis with Python',
  'Information Security',
  'Machine Learning with Python',
  'Coding Interview Prep'
];

describe('Learn Landing page (not logged in)', () => {
  it('Should render', () => {
    cy.visit(locations.index);

    cy.title().should('eq', 'Learn to code at home | freeCodeCamp.org');
  });

  it('Has the correct heading for an unauthenticated User', () => {
    cy.visit(locations.index);

    cy.contains('h1', "Welcome to freeCodeCamp's curriculum.");
  });

  it('Should render a curriuculum map', () => {
    cy.document().then(document => {
      const superBlocks = document.querySelectorAll(
        `${selectors.challengeMap} > ul > li`
      );
      expect(superBlocks).to.have.length(11);

      superBlocks.forEach((superBlock, idx) => {
        expect(superBlock.innerText).to.have.string(superBlockNames[idx]);
      });
    });
  });
});

describe('Quotes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains("Get started (it's free)").click({ force: true });
  });

  it('Should show a quote each time', () => {
    cy.get('blockquote').within(() => {
      cy.get('q').should('be.visible');
    });
  });

  it('Should show quote author', () => {
    cy.get('blockquote').within(() => {
      cy.get('cite').should('be.visible');
    });
  });
});
