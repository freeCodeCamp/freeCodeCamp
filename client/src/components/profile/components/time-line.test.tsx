/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useStaticQuery } from 'gatsby';
import React from 'react';

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

  it('Render button when both githubLink and solution is present', () => {
    // @ts-expect-error
    render(<TimeLine {...propsForOnlySolution} />, store);

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(2);
    expect(menuItems[0]).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/freeCodeCamp1'
    );
    expect(menuItems[1]).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/freeCodeCamp2'
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
