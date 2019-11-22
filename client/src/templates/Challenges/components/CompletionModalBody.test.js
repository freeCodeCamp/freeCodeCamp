/* global expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import CompletionModalBody from './CompletionModalBody';

const props = {
  blockName: 'Basic HTML and HTML5',
  completedPercent: Math.floor(Math.random() * (101 - 0))
};

describe('<CompletionModalBody />', () => {
  test('matches snapshot', () => {
    const { container } = render(<CompletionModalBody {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe('progress-bar', () => {
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
      const { findAllByText } = render(<CompletionModalBody {...props} />);

      setTimeout(done => {
        expect(findAllByText(`${props.completedPercent} complete`).length).toBe(
          2
        );
        done();
      }, 2000);
    });

    test('has the correct width after animation', () => {
      const { container } = render(<CompletionModalBody {...props} />);

      setTimeout(done => {
        expect(
          container.querySelector('.progress-bar-percent')
        ).toHaveAttribute('style', `width: ${props.completedPercent}%;`);
        done();
      }, 2000);
    });
  });
});
