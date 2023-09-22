// Utility functions
const search = (query: string) => {
  cy.get('.ais-SearchBox').within(() => {
    cy.get('input').type(query);
  });

  cy.wait(300);
};

const clear = () => {
  cy.get('.ais-SearchBox').within(() => {
    cy.get('input').clear();
  });
};

// Search bar optimized describe block
describe('Search bar optimized', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    clear();
  });

  // Test: Search bar should be visible
  it('Search bar should be visible', () => {
    cy.get('[data-cy=ais-SearchBox]').should('be.visible');
  });

  // Test: Should not display hits
  it('Should not display hits', () => {
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]').should('not.exist');
  });

  // Test: Should open a new tab
  it('Should open a new tab ', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('open');
      }
    });
    search('freeCodeCamp');
    cy.get('[data-cy=ais-SearchBox-form]').submit();
    const queryUrl =
      'https://www.freecodecamp.org/news/search/?query=freeCodeCamp';
    cy.get('@open').should('have.been.calledOnceWith', queryUrl);
  });
});

// Search bar describe block
describe('Search bar', () => {
  before(() => {
    cy.visit('/learn');
  });

  beforeEach(() => {
    clear();
  });

  // Test: Search bar should be visible
  it('Search bar should be visible', () => {
    cy.get('.ais-SearchBox').should('be.visible');
  });

  // Test: Should accept input and display hits
  it('Should accept input and display hits', () => {
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]')
      .children()
      .should('to.have.length.of.at.least', 1);
  });

  // Test: Should clear hits when input is cleared
  it('Should clear hits when input is cleared', () => {
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]')
      .children()
      .should('to.have.length.of.at.least', 1);
    clear();
    cy.get('div.ais-Hits').should('not.exist');
  });

  // Test: Should show up to 8 hits when height >= 768px
  it('Should show up to 8 hits when height >= 768px', () => {
    cy.viewport(1300, 768);
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 8);
  });

  // Test: Should show up to 5 hits when height < 768px
  it('Should show up to 5 hits when height < 768px', () => {
    cy.viewport(1300, 767);
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 5);
  });

  // Test: Should show no hits for queries that do not exist in the Algolia index
  it('Should show no hits for queries that do not exist in the Algolia index', () => {
    search('testtttt');
    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 0);
    cy.contains('No tutorials found');
  });

  // Test: Should not redirect to the News search page if there are no hits
  it('Should not redirect to the News search page if there are no hits', () => {
    search('testtttt');
    cy.get('.ais-SearchBox-form').submit();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/learn/');
    });
  });
});
