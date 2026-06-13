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
  vi.clearAllMocks();
});

describe('<TimeLine />', () => {
  it('Render button when only solution is present', () => {
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
          }
        ]
      }
    }));

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
          }
        ]
      }
    }));

    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);

    const viewButtons = screen.getAllByRole('button', {
      name: 'buttons.view settings.labels.solution-for'
    });
    viewButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
  });

  it('does not duplicate A2 English timeline titles when the block title matches the challenge title', () => {
    // @ts-expect-error
    useStaticQuery.mockImplementationOnce(() => ({
      allChallengeNode: {
        edges: [
          {
            node: {
              challenge: {
                block: 'en-a2-quiz-discussing-new-ideas',
                fields: {
                  slug:
                    '/learn/a2-english-for-developers/en-a2-quiz-discussing-new-ideas/en-a2-quiz-discussing-new-ideas'
                },
                hasEditableBoundaries: false,
                id: 'a2-english-challenge-id',
                superBlock: 'a2-english-for-developers',
                title: 'Tech Updates and Trends Quiz'
              }
            }
          }
        ]
      }
    }));

    const propsForA2EnglishChallenge = {
      completedMap: [
        {
          id: 'a2-english-challenge-id',
          completedDate: 1710000000000
        }
      ],
      username: 'developmentuser',
      t: (key: string) => {
        if (
          key ===
          'intro:a2-english-for-developers.blocks.en-a2-quiz-discussing-new-ideas.title'
        ) {
          return 'Tech Updates and Trends Quiz';
        }

        return key;
      }
    };

    // @ts-expect-error
    render(<TimeLine {...propsForA2EnglishChallenge} />, store);

    expect(
      screen.getByRole('link', { name: 'Tech Updates and Trends Quiz' })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('link', {
        name: 'Tech Updates and Trends Quiz - Tech Updates and Trends Quiz'
      })
    ).not.toBeInTheDocument();
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
    }
  ],
  username: 'developmentuser'
};