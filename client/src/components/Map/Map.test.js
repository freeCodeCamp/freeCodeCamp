/* global expect jest */

import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';

import { Map } from './';
import mockChallengeNodes from '../../__mocks__/challenge-nodes';

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    allChallengeNode: {
      nodes: mockChallengeNodes
    }
  }));
});

// set .scrollTo to avoid errors in default test environment
window.scrollTo = jest.fn();

test('<Map /> snapshot', () => {
  const { container } = render(<Map {...props} />);

  expect(container).toMatchSnapshot('Map');
});

const props = {
  forLanding: true
};
