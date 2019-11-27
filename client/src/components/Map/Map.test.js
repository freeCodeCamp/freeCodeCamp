/* global expect jest */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/createStore';

import { Map } from './';
import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../__mocks__/intro-nodes';

import { dasherize } from '../../../../utils/slugs';

function renderWithRedux(ui) {
  return render(<Provider store={createStore()}>{ui}</Provider>);
}

const baseProps = {
  introNodes: mockIntroNodes,
  nodes: mockChallengeNodes,
  toggleBlock: () => {},
  toggleSuperBlock: () => {},
  resetExpansion: () => {},
  isSignedIn: true
};

// set .scrollTo to avoid errors in default test environment
window.scrollTo = jest.fn();

test('<Map /> snapshot', () => {
  const { container } = renderWithRedux(
    <Map
      introNodes={mockIntroNodes}
      nodes={mockChallengeNodes}
      resetExpansion={() => {}}
      toggleBlock={() => {}}
      toggleSuperBlock={() => {}}
    />
  );

  expect(container).toMatchSnapshot('Map');
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

      renderWithRedux(<Map {...props} />);

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

      renderWithRedux(<Map {...props} />);

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

      renderWithRedux(<Map {...props} />);

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

      renderWithRedux(<Map {...props} />);

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

      renderWithRedux(<Map {...props} />);

      expect(expansionSpy).toHaveBeenCalledTimes(1);
    });
  });
});
