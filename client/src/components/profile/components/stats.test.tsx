import { render, screen } from '@testing-library/react';
import React from 'react';
import Stats from './stats';

const props: { calendar: { [key: number]: number }; points: number } = {
  calendar: {},
  points: 0
};

describe('<Stats/>', () => {
  it('calculates the correct longest streak', () => {
    render(<Stats {...props} />);
    expect(screen.getByTestId('longest-streak')).toHaveTextContent(
      'profile.longest-streak'
    );
  });

  it('calculates the correct current streak', () => {
    render(<Stats {...props} />);
    expect(screen.getByTestId('current-streak')).toHaveTextContent(
      'profile.current-streak'
    );
  });
});
