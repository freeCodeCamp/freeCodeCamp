import React from 'react';
import renderer from 'react-test-renderer';

import ChallengeTitle from './challenge-title';

const baseProps = {
  children: 'title text',
  isCompleted: true,
  translationPending: false
};

describe('<ChallengeTitle/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChallengeTitle {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
