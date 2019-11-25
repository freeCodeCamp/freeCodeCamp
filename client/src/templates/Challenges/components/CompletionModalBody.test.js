/* global jest, expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CompletionModalBody from './CompletionModalBody';

const props = {
  blockName: 'Basic HTML and HTML5',
  completedPercent: Math.floor(Math.random() * 101)
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

    test('renders with 0% complete shown initially', () => {
      const { getAllByText } = render(<CompletionModalBody {...props} />);
      expect(getAllByText('0% complete').length).toBe(2);
    });

    test('renders with 0% width initially', () => {
      const { container } = render(<CompletionModalBody {...props} />);
      expect(container.querySelector('.progress-bar-percent')).toHaveAttribute(
        'style',
        'width: 0%;'
      );
    });

    test('shows the correct percent after animation', () => {
      const { container, getAllByText } = render(
        <CompletionModalBody {...props} />
      );
      const progressBars = getAllByText('0% complete');
      fireEvent.animationEnd(
        container.querySelector('.completion-success-icon')
      );
      jest.runAllTimers();
      progressBars.forEach(bar =>
        expect(bar).toHaveTextContent(`${props.completedPercent}% complete`)
      );
    });

    test('has the correct width after animation', () => {
      const { container } = render(<CompletionModalBody {...props} />);

      fireEvent.animationEnd(
        container.querySelector('.completion-success-icon')
      );

      jest.runAllTimers();

      expect(container.querySelector('.progress-bar-percent')).toHaveAttribute(
        'style',
        `width: ${props.completedPercent}%;`
      );
    });
  });
});
