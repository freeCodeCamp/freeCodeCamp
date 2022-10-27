import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { SuperBlocks } from '../../../../../config/certification-settings';

import CompletionModalBody from './completion-modal-body';

const props = {
  block: 'basic-html-and-html5',
  completedPercent: Math.floor(Math.random() * 101),
  completedChallengesInBlock: 2,
  totalChallengesInBlock: 5,
  currentChallengeId: '',
  superBlock: SuperBlocks.RespWebDesign
};

describe('<CompletionModalBody />', () => {
  test('matches snapshot', () => {
    const { container } = render(<CompletionModalBody {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe('progress-bar', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    test('renders with 0% width initially', () => {
      render(<CompletionModalBody {...props} />);
      expect(screen.getByTestId('fcc-progress-bar-percent')).toHaveStyle({
        width: '0%'
      });
    });

    test('has the correct width after animation', () => {
      render(<CompletionModalBody {...props} />);

      fireEvent.animationEnd(screen.getByTestId('fcc-completion-success-icon'));

      jest.runAllTimers();

      expect(screen.getByTestId('fcc-progress-bar-percent')).toHaveStyle({
        width: `${props.completedPercent}%`
      });
    });
  });
});
