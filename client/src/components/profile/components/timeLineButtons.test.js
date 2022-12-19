/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { createStore } from '../../../redux/createStore';
import TimelineInner from './time-line';
import completedChallenges from './completedChallenges';

Date.prototype.toLocaleString = jest.fn(() => 'Dec 29, 2022');
Date.prototype.toISOString = jest.fn(() => '2016-09-28T20:31:56.730Z');

jest.mock('../../../analytics');

jest.mock('gatsby', () => {
  const edges = require('./edges');
  const React = require('react');
  const gatsby = jest.requireActual('gatsby');
  return {
    ...gatsby,
    useStaticQuery: jest.fn().mockReturnValue({
      allChallengeNode: {
        edges: edges.default
      }
    }),
    graphql: jest.fn(),
    Link: jest
      .fn()
      .mockImplementation(
        ({
          activeClassName,
          activeStyle,
          getProps,
          innerRef,
          partiallyActive,
          ref,
          replace,
          to,
          ...rest
        }) =>
          React.createElement('a', {
            ...rest,
            href: to,
            gatsby: 'true'
          })
      )
  };
});

it('should check certification page consistency', () => {
  Date.toLocaleString = jest.fn(() => 'Dec 29, 2022');
  Date.toISOString = jest.fn(() => '2016-09-28T20:31:56.730Z');

  const tree = renderer
    .create(
      <Provider store={createStore()}>
        <TimelineInner
          completedMap={completedChallenges}
          username='CeritifedUser'
          onPress={() => {}}
          t={t => t}
        />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
