/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import 'jest-dom/extend-expect';
import { LearnPage } from '../../pages/learn';

import Welcome from './';

import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../__mocks__/intro-nodes';

describe('<Welcome />', () => {
  it('renders when visiting index page and logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<LearnPage {...loggedInProps} />);
    const result = shallow.getRenderOutput();
    expect(
      result.type.WrappedComponent.displayName === 'LearnLayout'
    ).toBeTruthy();
  });

  it('has a header', () => {
    const container = renderer.create(<Welcome name={'Development User'} />)
      .root;
    expect(container.findAllByType('h1').length === 1).toBeTruthy();
  });

  it('has a blockquote', () => {
    const container = renderer.create(<Welcome name={'Development User'} />)
      .root;
    expect(container.findAllByType('blockquote').length === 1).toBeTruthy();
  });
});

const nodes = mockChallengeNodes.map(node => {
  return { node };
});
const loggedInProps = {
  fetchState: {
    complete: true,
    error: null,
    errored: false,
    pending: false
  },
  isSignedIn: true,
  user: {
    name: 'Development User'
  },
  location: { hash: '' },
  data: {
    challengeNode: {
      fields: {
        slug:
          // eslint-disable-next-line max-len
          '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
      }
    },
    allChallengeNode: { edges: nodes },
    allMarkdownRemark: { edges: [{ mdEdges: mockIntroNodes }] }
  }
};
