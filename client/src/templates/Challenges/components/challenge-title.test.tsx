import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

import ChallengeTitle from './challenge-title';

const baseProps = {
  children: 'What is HTML?',
  isCompleted: true,
  translationPending: false,
  link: 'learn/responsive-web-design-v9/lecture-understanding-html-attributes/what-is-html'
};

describe('<ChallengeTitle/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChallengeTitle {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
