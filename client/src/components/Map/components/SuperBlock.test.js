/* global jest, expect */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../../redux/createStore';

import { SuperBlock } from './SuperBlock';
import mockChallengeNodes from '../../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../../__mocks__/intro-nodes';

function renderWithRedux(ui, store) {
  return render(<Provider store={store || createStore()}>{ui}</Provider>);
}

test('<SuperBlock /> not expanded snapshot', () => {
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: false,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: () => {}
  };

  const { container } = render(<SuperBlock {...props} />);

  expect(container).toMatchSnapshot('superBlock-not-expanded');
});

test('<SuperBlock /> expanded snapshot', () => {
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: true,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: () => {}
  };

  const { container } = renderWithRedux(<SuperBlock {...props} />);

  expect(container).toMatchSnapshot('superBlock-expanded');
});

test('<SuperBlock should handle toggle clicks correctly', () => {
  const toggleSpy = jest.fn();
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: false,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: toggleSpy
  };

  const store = createStore();
  const { container, rerender } = renderWithRedux(
    <SuperBlock {...props} />,
    store
  );

  expect(toggleSpy).not.toHaveBeenCalled();
  expect(container.querySelector('.map-title h4')).toHaveTextContent(
    'Super Block One Certification (300 hours)'
  );
  expect(container.querySelector('ul')).not.toBeInTheDocument();

  fireEvent.click(container.querySelector('.map-title'));

  expect(toggleSpy).toHaveBeenCalledTimes(1);
  expect(toggleSpy).toHaveBeenCalledWith('Super Block One');

  rerender(
    <Provider store={store}>
      <SuperBlock {...props} isExpanded={true} />
    </Provider>
  );

  expect(container.querySelector('ul')).toBeInTheDocument();
});
