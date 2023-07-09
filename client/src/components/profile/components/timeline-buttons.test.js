/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { createStore } from '../../../redux/create-store';
import completedChallenges from '../../../__mocks__/completed-challenges.json';
import Timeline from './time-line';

Date.prototype.toLocaleString = jest.fn(() => 'Dec 29, 2022');
Date.prototype.toISOString = jest.fn(() => '2016-09-28T20:31:56.730Z');

const t = jest.fn(key => {
  if (
    Object.is(
      key,
      'intro:2022/responsive-web-design.blocks.learn-accessibility-by-building-a-quiz.title'
    )
  )
    return 'Learn Accessibility by Building a Quiz';
  else if (Object.is(key, 'aria.step')) return 'Step';
  else return key;
});

jest.mock('../../../analytics');

jest.mock('gatsby', () => {
  const edges = require('../../../__mocks__/edges.json');
  const React = require('react');
  const gatsby = jest.requireActual('gatsby');
  return {
    ...gatsby,
    useStaticQuery: jest.fn().mockReturnValue({
      allChallengeNode: {
        edges: edges
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
  const tree = renderer
    .create(
      <Provider store={createStore()}>
        <Timeline
          completedMap={completedChallenges}
          username='CeritifedUser'
          t={t}
          onPress={() => {}}
        />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
