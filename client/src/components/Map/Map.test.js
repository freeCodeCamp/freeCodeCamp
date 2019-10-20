/* global expect jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Map } from './';
import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../__mocks__/intro-nodes';

import { dasherize } from '../../../../utils/slugs';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

const baseProps = {
  introNodes: mockIntroNodes,
  nodes: mockChallengeNodes,
  toggleBlock: () => {},
  toggleSuperBlock: () => {},
  resetExpansion: () => {}
};

// set .scrollTo to avoid errors in default test environment
window.scrollTo = jest.fn();

test('<Map /> snapshot', () => {
  const componentToRender = (
    <Map
      introNodes={mockIntroNodes}
      nodes={mockChallengeNodes}
      resetExpansion={() => {}}
      toggleBlock={() => {}}
      toggleSuperBlock={() => {}}
    />
  );
  const component = renderer.render(componentToRender);
  expect(component).toMatchSnapshot('Map');
});

describe('<Map/>', () => {
  describe('after reload', () => {
    const defaultNode = mockChallengeNodes[0];
    const idNode = mockChallengeNodes[7];
    const hashNode = mockChallengeNodes[9];
    const currentChallengeId = idNode.id;
    const hash = dasherize(hashNode.superBlock);

    it('should expand the block with the most recent challenge', () => {
      const initializeSpy = jest.spyOn(
        Map.prototype,
        'initializeExpandedState'
      );

      const blockSpy = jest.fn();
      const superSpy = jest.fn();
      const props = {
        ...baseProps,
        toggleBlock: blockSpy,
        toggleSuperBlock: superSpy
      };
      const mapToRender = <Map {...props} />;
      shallow(mapToRender);
      expect(blockSpy).toHaveBeenCalledTimes(1);
      expect(superSpy).toHaveBeenCalledTimes(1);
      expect(initializeSpy).toHaveBeenCalledTimes(1);
      initializeSpy.mockRestore();
    });

    it('should use the hash prop if it exists', () => {
      const blockSpy = jest.fn();
      const superSpy = jest.fn();
      const props = {
        ...baseProps,
        hash,
        toggleBlock: blockSpy,
        toggleSuperBlock: superSpy,
        currentChallengeId
      };

      const mapToRender = <Map {...props} />;
      shallow(mapToRender);

      expect(blockSpy).toHaveBeenCalledTimes(1);
      // the block here should always be the first block of the superblock
      // this is tested implicitly, as there is a second block in the mock nodes
      expect(blockSpy).toHaveBeenCalledWith(hashNode.block);

      expect(superSpy).toHaveBeenCalledTimes(1);
      expect(superSpy).toHaveBeenCalledWith(hashNode.superBlock);
    });

    it('should use the currentChallengeId prop if there is no hash', () => {
      const blockSpy = jest.fn();
      const superSpy = jest.fn();
      const props = {
        ...baseProps,
        toggleBlock: blockSpy,
        toggleSuperBlock: superSpy,
        currentChallengeId
      };

      const mapToRender = <Map {...props} />;
      shallow(mapToRender);

      expect(blockSpy).toHaveBeenCalledTimes(1);
      expect(blockSpy).toHaveBeenCalledWith(idNode.block);

      expect(superSpy).toHaveBeenCalledTimes(1);
      expect(superSpy).toHaveBeenCalledWith(idNode.superBlock);
    });

    it('should default to the first challenge otherwise', () => {
      const blockSpy = jest.fn();
      const superSpy = jest.fn();
      const props = {
        ...baseProps,
        toggleBlock: blockSpy,
        toggleSuperBlock: superSpy
      };
      const mapToRender = <Map {...props} />;
      shallow(mapToRender);
      expect(blockSpy).toHaveBeenCalledTimes(1);
      expect(blockSpy).toHaveBeenCalledWith(defaultNode.block);

      expect(superSpy).toHaveBeenCalledTimes(1);
      expect(superSpy).toHaveBeenCalledWith(defaultNode.superBlock);
    });

    it('calls resetExpansion when initializing', () => {
      const expansionSpy = jest.fn();
      const props = {
        ...baseProps,
        resetExpansion: expansionSpy
      };
      const mapToRender = <Map {...props} />;
      shallow(mapToRender);
      expect(expansionSpy).toHaveBeenCalledTimes(1);
    });
  });
});
