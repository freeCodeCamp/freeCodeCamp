/* global cy */

const selectors = {
  editor: '.react-monaco-editor-container'
};

const pythonProjects = {
  superBlock: 'machine-learning-with-python',
  block: 'machine-learning-with-python-projects',
  challenges: [
    {
      slug: 'book-recommendation-engine-using-knn',
      nextChallengeText: 'Linear Regression Health Costs Calculator'
    },
    {
      slug: 'cat-and-dog-image-classifier',
      nextChallengeText: 'Book Recommendation Engine using KNN'
    },
    {
      slug: 'linear-regression-health-costs-calculator',
      nextChallengeText: 'Neural Network SMS Text Classifier'
    },
    {
      slug: 'neural-network-sms-text-classifier',
      nextChallengeText: 'Find the Symmetric Difference'
    },
    {
      slug: 'rock-paper-scissors',
      nextChallengeText: 'Cat and Dog Image Classifier'
    }
  ]
};

describe('project submission', () => {
  beforeEach(() => {
    cy.exec('npm run seed');
  });
  // NOTE: this will fail once challenge tests are added.
  it('Should be possible to submit Python projects', () => {
    const { superBlock, block, challenges } = pythonProjects;
    challenges.forEach(({ slug }) => {
      const url = `/learn/${superBlock}/${block}/${slug}`;
      cy.visit(url);
      cy.get('#dynamic-front-end-form')
        .get('#solution')
        .type('https://replit.com/@camperbot/python-project#main.py');

      cy.contains("I've completed this challenge").click();
      cy.contains('Go to next challenge');
      // clicking on 'Go to next challenge' seems to have caused flakiness, so
      // it's commented out until we figure out why.
      // cy.contains('Go to next challenge').click();

      // The next two commands are to confirm that go to next challenge has
      // moved us to the expected challenge before we loop again.
      // cy.get('.title-text').should('include.text', nextChallengeText);
      // cy.url().should('not.have.string', url);
    });
  });
  it(
    'JavaScript projects can be submitted and then viewed in /settings and on the certifications',
    { browser: 'electron' },
    () => {
      cy.login();
      cy.fixture('../../config/curriculum.json').then(curriculum => {
        const { challenges, meta } =
          curriculum['javascript-algorithms-and-data-structures'].blocks[
            'javascript-algorithms-and-data-structures-projects'
          ];

        const projectTitles = meta.challengeOrder.map(([, title]) => title);
        const projectsInOrder = projectTitles.map(projectTitle => {
          return challenges.find(({ title }) => title === projectTitle);
        });

        // We need to wait for everything to finish loading and hydrating, so we
        // use this text as a proxy for that.
        const textInNextPage = projectTitles.slice(1);
        textInNextPage.push('Claim Your Certification');

        projectsInOrder.forEach(
          ({ block, superBlock, dashedName, solutions }, i) => {
            const url = `/learn/${superBlock}/${block}/${dashedName}`;
            cy.visit(url);

            solutions.forEach(files => {
              files.forEach(({ contents }) => {
                cy.get(selectors.editor).as('editor');
                cy.get('@editor').click().focused().type('{ctrl+a}{del}');
                // NOTE: clipboard operations are flaky in watch mode, because
                // the document can lose focus
                cy.window()
                  .its('navigator.clipboard')
                  .invoke('writeText', contents);
                cy.document().invoke('execCommand', 'paste');
                cy.contains('Run the Tests').click();
                cy.contains('Submit and go to next challenge', {
                  timeout: 8000
                }).click();
                cy.contains(textInNextPage[i]);
              });
            });
          }
        );

        cy.visit('/settings');

        projectTitles.forEach(title => {
          cy.get(`[data-cy="${title}"]`).click();
          // TODO: if we write a test to check that the solution is visible
          // before reloading, we should include that here.
          cy.contains('Solution for');
          cy.contains('Close').click();
        });

        // Claim and view solutions on certification page

        cy.toggleAll();
        cy.visit('/learn/javascript-algorithms-and-data-structures');
        cy.contains('Claim Certification').click();
        cy.contains('Show Certification').click();

        projectTitles.forEach(title => {
          cy.get(`[data-cy="${title} solution"]`).click();
          // TODO: if we write a test to check that the solution is visible
          // before reloading, we should include that here.
          cy.contains('Solution for');
          cy.contains('Close').click();
        });
      });
    }
  );
});
