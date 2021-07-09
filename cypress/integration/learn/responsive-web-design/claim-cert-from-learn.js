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
      cy.get('a[href="#claim-cert-block"]')
        .parent()
        .parent()
        .find('ul.map-challenges-ul')
        .should('be.visible');
      cy.get('a[href="#claim-cert-block"]')
        .parent()
        .parent()
        .find('ul.map-challenges-ul')
        .children()
        .should('have.length', 5);
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
        cy.contains('Submit and go to next challenge').click().wait(1000);
      });
    });
    it('should redirect to the Superblock page', () => {
      cy.url().should('include', `/learn/${projects.superBlock}`);
    });
    it('should open the donation modal on the Superblock page', () => {
      cy.contains('Ask me later').should('be.visible').click().wait(300);
    });
    it('should have the hash "claim-cert-block" in the url', () => {
      cy.url().should('include', '#claim-cert-block');
    });
    it('should be able to claim certification', () => {
      cy.get('[href="/certification/developmentuser/responsive-web-design"]')
        .should('not.be.disabled')
        .click();
    });
    it('should be able to view the certification', () => {
      cy.contains('Show Certification').click();
      cy.url().should(
        'contain',
        'certification/developmentuser/responsive-web-design'
      );
    });
  });
});
