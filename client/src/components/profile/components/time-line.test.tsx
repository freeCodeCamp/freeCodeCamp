/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useStaticQuery } from 'gatsby';
import React from 'react';
import { beforeEach, describe, it, expect, vi } from 'vitest';

vi.mock('../../../utils/get-words');

import { render, screen } from '../../../../utils/test-utils';
import { createStore } from '../../../redux/create-store';
import TimeLine from './time-line';

const store = createStore();

beforeEach(() => {
  // @ts-expect-error
  useStaticQuery.mockImplementationOnce(() => ({
    allChallengeNode: {
      edges: [
        {
          node: {
            challenge: {
              fields: {
                slug: ''
              },
              id: '5e46f802ac417301a38fb92b',
              title: 'Page View Time Series Visualizer'
            }
          }
        },
        {
          node: {
            challenge: {
              fields: {
                slug: ''
              },
              id: '5e4f5c4b570f7e3a4949899f',
              title: 'Sea Level Predictor'
            }
          }
        },
        {
          node: {
            challenge: {
              fields: {
                slug: ''
              },
              id: '5e46f7f8ac417301a38fb92a',
              title: 'Medical Data Visualizer'
            }
          }
        },
        {
          node: {
            challenge: {
              block: 'learn-accessibility-by-building-a-quiz',
              superBlock: '2022/responsive-web-design',
              fields: {
                slug: '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2'
              },
              id: '613297a923965e0703b64796',
              title: 'Step 2'
            }
          }
        },
        {
          node: {
            challenge: {
              block: 'quiz-debugging-javascript',
              superBlock: 'javascript-v9',
              fields: {
                slug: '/learn/javascript-v9/quiz-debugging-javascript/quiz-debugging-javascript'
              },
              id: '66edd10913f078e7669eca81',
              /*
                In the test environment, t(`intro:${superBlock}.blocks.${block}.title`) returns
                i18n key as it is instead of translating it, so we set title to the key string
                to simulate blockNametitle === title
              */
              title:
                'intro:javascript-v9.blocks.quiz-debugging-javascript.title'
            }
          }
        }
      ]
    }
  }));
});

describe('<TimeLine />', () => {
  it('Render button when only solution is present', () => {
    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);
    const showViewButton = screen.getByRole('link', {
      name: 'buttons.view settings.labels.solution-for (aria.opens-new-window)'
    });
    expect(showViewButton).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/freeCodeCamp'
    );
  });

  it('rendering the correct button when files is present', () => {
    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);

    const viewButtons = screen.getAllByRole('button', {
      name: 'buttons.view settings.labels.solution-for'
    });
    viewButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
  });

  it('does not prepend block when title matches block', () => {
    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);
    expect(
      screen.getByRole('link', {
        name: 'intro:javascript-v9.blocks.quiz-debugging-javascript.title'
      })
    ).toBeInTheDocument();
  });

  it('prepends block name to step challenge title', () => {
    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);
    expect(
      screen.getByRole('link', {
        name: 'intro:2022/responsive-web-design.blocks.learn-accessibility-by-building-a-quiz.title - Step 2'
      })
    ).toBeInTheDocument();
  });
});

const contents = 'This is not JS';
const ext = 'js';
const fileKey = 'indexjs';
const name = 'index';
const path = 'index.js';

const propsForOnlySolution = {
  completedMap: [
    {
      id: '5e46f802ac417301a38fb92b',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp',
      completedDate: 1604311988825
    },
    {
      id: '5e4f5c4b570f7e3a4949899f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp1',
      githubLink: 'https://github.com/freeCodeCamp/freeCodeCamp2',
      completedDate: 1604311988828
    },
    {
      id: '5e46f7f8ac417301a38fb92a',
      completedDate: 1604043678032,
      challengeFiles: [{ contents, ext, fileKey, name, path }]
    },
    {
      id: '613297a923965e0703b64796',
      completedDate: 1604311988820
    },
    {
      id: '66edd10913f078e7669eca81',
      completedDate: 1604311988810
    }
  ],
  username: 'developmentuser'
};
