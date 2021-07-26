/* global cy */

const projects = {
  superBlock: 'responsive-web-design',
  block: 'responsive-web-design-projects',
  challenges: [
    {
      slug: 'build-a-tribute-page',
      solution: 'https://codepen.io/moT01/pen/ZpJpKp'
    },
    {
      slug: 'build-a-survey-form',
      solution: 'https://codepen.io/moT01/pen/LrrjGz?editors=1010'
    },
    {
      slug: 'build-a-product-landing-page',
      solution: 'https://codepen.io/moT01/full/qKyKYL/'
    },
    {
      slug: 'build-a-technical-documentation-page',
      solution: 'https://codepen.io/moT01/full/JBvzNL/'
    },
    {
      slug: 'build-a-personal-portfolio-webpage',
      solution: 'https://codepen.io/moT01/pen/vgOaoJ'
    }
  ]
};

describe('Responsive Web Design Superblock', () => {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit('/learn/responsive-web-design');
  });
  describe('Before submitting projects', () => {
    it('should have a card with href "claim-cert-block"', () => {
      cy.get('a[href="#claim-cert-block"]').scrollIntoView();
      cy.get('a[href="#claim-cert-block"]').should('be.visible');
    });

    it('should have an anchor element with the text "Claim Certification", and class "disabled"', () => {
      cy.get('a.disabled').should('be.visible');
      cy.get('a.disabled').should('have.text', 'Claim Certification');
    });

    it('should have an unordered list with class "map-challenges-ul" containing 5 items', () => {
      cy.get('[data-cy=claim-cert-steps]').should('be.visible');
      cy.get('[data-cy=claim-cert-steps]').children().should('have.length', 5);
    });
  });
  describe('After submitting all 5 projects', () => {
    before(() => {
      cy.toggleAll();
      const { superBlock, block, challenges } = projects;
      challenges.forEach(({ slug, solution }) => {
        const url = `/learn/${superBlock}/${block}/${slug}`;
        cy.visit(url);
        cy.get('#dynamic-front-end-form')
          .get('#solution')
          .type(solution, { force: true, delay: 0 });
        cy.contains("I've completed this challenge")
          .should('not.be.disabled')
          .click();
        cy.intercept('http://localhost:3000/project-completed').as(
          'challengeCompleted'
        );
        cy.contains('Submit and go to next challenge').click();
        cy.wait('@challengeCompleted')
          .its('response.statusCode')
          .should('eq', 200);
        cy.location().should(loc => {
          expect(loc.pathname).to.not.eq(url);
        });
      });
    });
    it('should be possible to claim and view certifications from the superBlock page', () => {
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(`/learn/${projects.superBlock}/`);
      });
      cy.get('.donation-modal').should('be.visible');
      cy.contains('Ask me later').click();
      cy.get('.donation-modal').should('not.exist');
      // directed to claim-cert-block section
      cy.url().should('include', '#claim-cert-block');
      cy.contains('Claim Certification').should('not.be.disabled').click();
      cy.contains('Show Certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(
          '/certification/developmentuser/responsive-web-design'
        );
      });
    });
  });
});
