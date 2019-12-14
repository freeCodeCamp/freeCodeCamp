/* global jest, expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Block } from './Block';
import mockChallengeNodes from '../../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../../__mocks__/intro-nodes';
import mockCompleted from '../../../__mocks__/completedChallengesMock';

test('<Block /> not expanded snapshot for logged in users', () => {
  const { container } = render(
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={false}
      isSignedIn={true}
      toggleBlock={() => {}}
      toggleMapModal={() => {}}
    />
  );

  expect(container).toMatchSnapshot('block-not-expanded-logged-in');
});

test('<Block /> not expanded snapshot if not logged in', () => {
  const { container } = render(
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={false}
      isSignedIn={false}
      toggleBlock={() => {}}
      toggleMapModal={() => {}}
    />
  );

  expect(container).toMatchSnapshot('block-not-expanded-not-logged-in');
});

test('<Block /> expanded snapshot for logged in users', () => {
  const { container } = render(
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={true}
      isSignedIn={true}
      toggleBlock={() => {}}
      toggleMapModal={() => {}}
    />
  );

  expect(container).toMatchSnapshot('block-expanded-logged-in');
});

test('<Block /> expanded snapshot if not logged in', () => {
  const { container } = render(
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={true}
      isSignedIn={false}
      toggleBlock={() => {}}
      toggleMapModal={() => {}}
    />
  );

  expect(container).toMatchSnapshot('block-expanded-not-logged-in');
});

test('<Block />  should handle toggle clicks correctly', async () => {
  const toggleSpy = jest.fn();
  const toggleMapSpy = jest.fn();

  const props = {
    blockDashedName: 'block-a',
    challenges: mockChallengeNodes.filter(node => node.block === 'block-a'),
    completedChallenges: mockCompleted,
    intro: mockIntroNodes[0],
    isExpanded: false,
    toggleBlock: toggleSpy,
    toggleMapModal: toggleMapSpy
  };

  const { container, rerender } = render(<Block {...props} />);

  expect(toggleSpy).not.toHaveBeenCalled();
  expect(container.querySelector('.map-title h4')).toHaveTextContent('Block A');
  expect(container.querySelector('ul').children.length).toBe(0);

  fireEvent.click(container.querySelector('.map-title'));

  expect(toggleSpy).toHaveBeenCalledTimes(1);
  expect(toggleSpy).toHaveBeenCalledWith('block-a');

  rerender(<Block {...props} isExpanded={true} />);

  expect(container.querySelector('.map-title h4')).toHaveTextContent('Block A');
  expect(container.querySelector('ul').children.length).toBe(
    props.challenges.length + (props.intro ? 1 : 0)
  );
});
