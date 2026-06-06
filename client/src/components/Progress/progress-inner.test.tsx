import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressInner from './progress-inner';

describe('<ProgressInner />', () => {
  it('exposes progress information to screen readers', () => {
    render(
      <ProgressInner
        title='Variables and Strings'
        meta='34 of 100 steps complete'
        completedPercent={34}
      />
    );

    const progressBar = screen.getByRole('progressbar', {
      name: 'Variables and Strings. 34 of 100 steps complete'
    });

    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-valuenow', '34');
    expect(progressBar).toHaveAttribute(
      'aria-valuetext',
      '34 of 100 steps complete'
    );
  });

  it('exposes progress information to screen readers in minified mode', () => {
    render(
      <ProgressInner
        title='Variables and Strings'
        meta='34 of 100 steps complete'
        completedPercent={34}
        minified
      />
    );

    const progressBar = screen.getByRole('progressbar', {
      name: 'Variables and Strings. 34 of 100 steps complete'
    });

    expect(progressBar).toHaveAttribute('aria-valuenow', '34');
    expect(progressBar).toHaveAttribute(
      'aria-valuetext',
      '34 of 100 steps complete'
    );
  });
});