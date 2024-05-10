import { SuperBlocks } from '../../../../../shared/config/superblocks';

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

  it(
    'Ctrl + enter triggers the completion modal on multifile projects',
    { browser: 'electron' },
    () => {
      cy.fixture('../../shared/config/curriculum.json').then(
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
    cy.get('div[role="dialog"]').should('exist');
    cy.get('[data-cy=submit-challenge]').as('submitChallenge');
    cy.get('@submitChallenge').click();
    cy.get('@submitChallenge').should('have.attr', 'aria-disabled');
    cy.get('div[role="dialog"]').should('not.exist');
  });
});
