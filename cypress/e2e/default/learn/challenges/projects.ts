import { SuperBlocks } from '../../../../../config/superblocks';

interface Meta {
  challengeOrder: { id: string; title: string }[];
}

interface File {
  contents: unknown;
  fileKey: string;
}

type Solution = File[];

interface Challenge {
  title: string;
  block: string;
  superBlock: string;
  dashedName: string;
  solutions: Solution[];
  isPrivate?: boolean;
}

interface Curriculum {
  [key: string]: {
    blocks: {
      [key: string]: {
        meta: Meta;
        challenges: Challenge[];
      };
    };
  };
}

const selectors = {
  editor: '.react-monaco-editor-container'
};

const pythonProjects = {
  superBlock: SuperBlocks.MachineLearningPy,
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
    cy.task('seed');
    cy.login();
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
      cy.contains('go to next challenge');
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
      cy.fixture('../../config/curriculum.json').then(
        (curriculum: Curriculum) => {
          const targetBlock =
            'javascript-algorithms-and-data-structures-projects';
          const javaScriptSuperBlock = Object.values(curriculum).filter(
            ({ blocks }) => blocks[targetBlock]
          )[0];
          const { challenges, meta } = javaScriptSuperBlock.blocks[targetBlock];

          const projectTitles = meta.challengeOrder.map(({ title }) => title);
          const projectsInOrder = projectTitles.map(projectTitle => {
            return challenges.find(({ title }) => title === projectTitle);
          }) as Challenge[];

          // We need to wait for everything to finish loading and hydrating, so we
          // use this text as a proxy for that.
          const textInNextPage = projectTitles.slice(1);
          // The following text exists on the donation modal
          textInNextPage.push('Nicely done');

          projectsInOrder.forEach(
            ({ block, superBlock, dashedName, solutions }, i) => {
              const url = `/learn/${superBlock}/${block}/${dashedName}`;
              cy.visit(url);

              solutions.forEach(files => {
                files.forEach(({ contents }) => {
                  cy.get(selectors.editor, { timeout: 16000 })
                    .click()
                    .focused()
                    .type('{ctrl+a}{del}');
                  // NOTE: clipboard operations are flaky in watch mode, because
                  // the document can lose focus
                  cy.window()
                    .its('navigator.clipboard')
                    .invoke('writeText', contents);
                  cy.document().invoke('execCommand', 'paste');
                  cy.contains('Run the Tests').click();
                  cy.contains('Submit and go to next challenge', {
                    timeout: 16000
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

          cy.setPrivacyTogglesToPublic();
          cy.get(
            '[data-cy="btn-for-javascript-algorithms-and-data-structures"]'
          ).click();
          cy.get(
            '[data-cy="btn-for-javascript-algorithms-and-data-structures"]'
          )
            .should('contain.text', 'Show Certification')
            .click();

          projectTitles.forEach(title => {
            cy.get(`[data-cy="${title} solution"]`).click();
            // TODO: if we write a test to check that the solution is visible
            // before reloading, we should include that here.
            cy.contains('Solution for');
            cy.contains('Close').click();
          });
        }
      );
    }
  );

  it(
    'Ctrl + enter triggers the completion modal on multifile projects',
    { browser: 'electron' },
    () => {
      cy.fixture('../../config/curriculum.json').then(
        (curriculum: Curriculum) => {
          const targetBlock = 'build-a-personal-portfolio-webpage-project';
          const portfolioBlock = Object.values(curriculum).filter(
            ({ blocks }) => blocks[targetBlock]
          )[0];
          const { challenges, meta } = portfolioBlock.blocks[targetBlock];

          const projectTitle = meta.challengeOrder[0].title;
          const { block, superBlock, dashedName, solutions } = challenges.find(
            ({ title }) => title === projectTitle
          ) as Challenge;

          const url = `/learn/${superBlock}/${block}/${dashedName}`;
          cy.visit(url);

          solutions[0].forEach(({ contents, fileKey }) => {
            const tabSelector = `[data-cy=editor-tab-${fileKey}]`;
            if (fileKey !== 'indexhtml') {
              cy.get(tabSelector).click();
            }
            const editorContainerSelector = `[data-cy=editor-container-${fileKey}]`;
            cy.get(editorContainerSelector, { timeout: 16000 })
              .find(selectors.editor, { timeout: 16000 })
              .click()
              .focused()
              .type('{ctrl+a}{del}');
            // NOTE: clipboard operations are flaky in watch mode, because
            // the document can lose focus
            cy.window()
              .its('navigator.clipboard')
              .invoke('writeText', contents);
            cy.document().invoke('execCommand', 'paste');
          });

          cy.get('[data-cy=editor-container-indexhtml', { timeout: 16000 })
            .find(selectors.editor, { timeout: 16000 })
            .click()
            .focused()
            .type('{ctrl+enter}');
          // check the modal exists
          cy.contains('Submit and go to next challenge');
          cy.contains('Download my solution');
        }
      );
    }
  );

  it('should not be possible to submit twice in quick succession', () => {
    const { superBlock, block, challenges } = pythonProjects;
    const { slug } = challenges[0];

    cy.intercept('http://localhost:3000/project-completed', req => {
      req.continue(_res => {
        // delay the response by 0.5 seconds
        const wait = new Promise<void>(resolve => setTimeout(resolve, 500));
        return wait;
      });
    });

    const url = `/learn/${superBlock}/${block}/${slug}`;
    cy.visit(url);
    cy.get('#dynamic-front-end-form')
      .get('#solution')
      .type('https://replit.com/@camperbot/python-project#main.py');

    cy.contains("I've completed this challenge").click();
    cy.get('[data-cy=submit-challenge]').as('submitChallenge');
    cy.get('@submitChallenge').click();
    cy.get('@submitChallenge').should('be.disabled');
    // After the api responds, the button is enabled, but since the modal leaves
    // the DOM we just check for that.
    cy.get('[data-cy=completion-modal]').should('not.exist');
  });
});
