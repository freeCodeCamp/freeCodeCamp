/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';

import ChallengeTitle from './Challenge-Title';

const baseProps = {
  children: 'title text',
  isCompleted: true
};

describe('<ChallengeTitle/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChallengeTitle {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
