import { SuperBlocks } from '../../../../../config/certification-settings';

const projects = {
  superBlock: SuperBlocks.FrontEndDevLibs,
  block: 'front-end-development-libraries-projects',
  challenges: [
    {
      slug: 'build-a-random-quote-machine',
      solution: 'https://codepen.io/moT01/pen/ZpJpKp'
    },
    {
      slug: 'build-a-markdown-previewer',
      solution: 'https://codepen.io/moT01/pen/LrrjGz?editors=1010'
    },
    {
      slug: 'build-a-drum-machine',
      solution: 'https://codepen.io/moT01/full/qKyKYL/'
    },
    {
      slug: 'build-a-javascript-calculator',
      solution: 'https://codepen.io/moT01/full/JBvzNL/'
    },
    {
      slug: 'build-a-25--5-clock',
      solution: 'https://codepen.io/moT01/pen/vgOaoJ'
    }
  ]
};

describe('Front End Development Libraries Superblock', () => {
  before(() => {
    cy.exec('pnpm run seed');
    cy.login();
    cy.visit('/learn/front-end-development-libraries');
  });
  describe('Before submitting projects', () => {
    it('should navigate to "/settings#certification-settings" when clicking the "Go to settings to claim your certification" anchor', () => {
      cy.contains('Go to settings to claim your certification').click();
      cy.url().should('match', /\/settings\/?#certification-settings/);
    });
  });
  describe('After submitting all 5 projects', () => {
    before(() => {
      cy.exec('pnpm run seed');
      cy.login();
      cy.visit('/settings');
      cy.setPrivacyTogglesToPublic();
    });

    it('should be possible to view certifications from the settings page', () => {
      submitFrontEndSolutions();
      cy.visit(`/learn/${projects.superBlock}/`);
      cy.contains('Go to settings to claim your certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.include(`/settings`);
      });
      cy.get('[data-cy=btn-for-front-end-development-libraries]').click();
      cy.contains('Show Certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.include(
          `/certification/developmentuser/${projects.superBlock}`
        );
      });
    });

    function submitFrontEndSolutions() {
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
        cy.intercept(
          `${String(Cypress.env('API_LOCATION'))}/project-completed`
        ).as('challengeCompleted');
        cy.contains('Submit and go to next challenge').click();
        cy.wait('@challengeCompleted')
          .its('response.statusCode')
          .should('eq', 200);
        cy.location().should(loc => {
          expect(loc.pathname).to.not.include(url);
        });
      });
    }
  });
});
