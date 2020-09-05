/* global cy */

describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render properly', () => {
    cy.get('#universal-nav').should('be.visible');
    cy.get('#universal-nav').should('have.class', 'universal-nav nav-padding');
  });

  it('Should take user to news page when clicked on `/news`', () => {
    cy.get('.nav-news').within(() => {
      cy.contains('/news').click();
    });
    cy.url().should('include', '/news');
  });

  it('Should take user to forum page when clicked on `/forum`', () => {
    cy.get('.nav-forum').within(() => {
      // Can't click on it in test due to CORS policy
      // So check the link instead
      cy.contains('/forum').should(
        'have.attr',
        'href',
        'https://forum.freecodecamp.org'
      );
    });
  });

  it('Should take user to learn page when clicked on `/learn`', () => {
    cy.get('.nav-projects').within(() => {
      cy.contains('/learn').click();
    });
    cy.url().should('include', '/learn');
  });

  it(
    'Should take user to learn page when clicked on ' + 'the freeCodeCamp logo',
    () => {
      cy.get('.universal-nav-middle').within(() => {
        cy.get('svg').click();
      });
      cy.url().should('include', '/learn');
    }
  );

  it('Should be able to search on navbar search field', () => {
    cy.get('.ais-SearchBox').within(() => {
      cy.get('input').type('Learn');
    });

    cy.get('.ais-Hits-list')
      .children()
      .should('have.length', 1);

    cy.get('.ais-SearchBox').within(() => {
      cy.get('input').clear();
    });

    cy.get('div.ais-Hits').should('not.be.visible');
  });
});
