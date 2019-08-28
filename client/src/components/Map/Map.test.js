/* global expect jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from 'store';

import { Map } from './Map';
import mockNodes from '../../__mocks__/map-nodes';
import mockIntroNodes from '../../__mocks__/intro-nodes';
// eslint-disable-next-line max-len
import { CURRENT_CHALLENGE_KEY } from '../../templates/Challenges/redux/current-challenge-saga';
import { blockNameify } from '../../../utils/blockNameify';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

const baseProps = {
  introNodes: mockIntroNodes,
  nodes: mockNodes,
  toggleBlock: () => {},
  toggleSuperBlock: () => {}
};

test('<Map /> snapshot', () => {
  const componentToRender = (
    <Map
      introNodes={mockIntroNodes}
      nodes={mockNodes}
      toggleBlock={() => {}}
      toggleSuperBlock={() => {}}
    />
  );
  const component = renderer.render(componentToRender);
  expect(component).toMatchSnapshot('Map');
});

describe('<Map/>', () => {
  describe('after reload', () => {
    let initializeSpy = null;
    beforeEach(() => {
      initializeSpy = jest.spyOn(Map.prototype, 'initializeExpandedState');
    });
    afterEach(() => {
      initializeSpy.mockRestore();
      store.clearAll();
    });
    const currentChallengeUrl = 'https://learn/superblock/block/name';
    const anotherUrl = 'https://not-the-same';

    it('should expand the block with the most recent challenge', () => {
      const blockSpy = jest.fn();
      const superSpy = jest.fn();
      const props = {
        ...baseProps,
        toggleBlock: blockSpy,
        toggleSuperBlock: superSpy,
        currentChallengeUrl
      };
      const mapToRender = <Map {...props} />;
      shallow(mapToRender);
      expect(blockSpy).toHaveBeenCalledTimes(1);
      expect(blockSpy).toHaveBeenCalledWith('block');

      expect(superSpy).toHaveBeenCalledTimes(1);
      expect(superSpy).toHaveBeenCalledWith(blockNameify('superblock'));
    });

    it('should initialize if isInitialized is false', () => {
      const mapToRender = <Map {...baseProps} />;
      shallow(mapToRender);

      expect(initializeSpy).toHaveBeenCalledTimes(1);
    });

    it('should not initialize if isInitialized is true', () => {
      const props = { ...baseProps, currentChallengeUrl, isInitialized: true };
      const mapToRender = <Map {...props} />;

      shallow(mapToRender);
      expect(initializeSpy).toHaveBeenCalledTimes(0);
    });

    it('should use the currentChallengeUrl prop if it exists', () => {
      const props = { ...baseProps, currentChallengeUrl };
      store.set(CURRENT_CHALLENGE_KEY, anotherUrl);
      const mapToRender = <Map {...props} />;
      shallow(mapToRender);

      expect(initializeSpy).toHaveBeenCalledTimes(1);
      expect(initializeSpy).toHaveBeenCalledWith(currentChallengeUrl);
    });

    it('should use storage if the prop is not set', () => {
      store.set(CURRENT_CHALLENGE_KEY, currentChallengeUrl);
      const mapToRender = <Map {...baseProps} />;
      shallow(mapToRender);

      expect(initializeSpy).toHaveBeenCalledTimes(1);
      expect(initializeSpy).toHaveBeenCalledWith(currentChallengeUrl);
    });

    it('should default to the first challenge otherwise', () => {
      const mapToRender = <Map {...baseProps} />;
      shallow(mapToRender);

      expect(initializeSpy).toHaveBeenCalledTimes(1);
      // This is the first challenge in the 'nodes' prop.
      expect(initializeSpy).toHaveBeenCalledWith(
        '/super-block-one/block-a/challenge-one'
      );
    });
  });
});
