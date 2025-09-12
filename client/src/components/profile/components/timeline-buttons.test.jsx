import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import completedChallenges from './__fixtures__/completed-challenges.json';
import Timeline from './time-line';

Date.prototype.toLocaleString = vi.fn(() => 'Dec 29, 2022');
Date.prototype.toISOString = vi.fn(() => '2016-09-28T20:31:56.730Z');

vi.mock('../../../analytics');

vi.mock('../../../utils/get-words');

vi.mock('gatsby', async () => {
  const edges = require('./__fixtures__/edges.json');
  const React = require('react');
  const gatsby = await vi.importActual('gatsby');
  return {
    ...gatsby,
    useStaticQuery: vi.fn().mockReturnValue({
      allChallengeNode: {
        edges: edges
      }
    }),
    graphql: vi.fn(),
    Link: vi.fn().mockImplementation(({ to, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
        gatsby: 'true'
      })
    )
  };
});

describe('Timeline buttons test', () => {
  it('should check certification page consistency', () => {
    const tree = renderer
      .create(
        <Provider store={createStore()}>
          <Timeline
            completedMap={completedChallenges}
            username='CeritifedUser'
            onPress={() => {}}
          />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
