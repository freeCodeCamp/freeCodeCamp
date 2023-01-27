import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '.';

describe('<FormControl />', () => {
  it('should render correctly', () => {
    render(<FormControl testId='test' />);
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});

describe('<FormControl.Static />', () => {
  it('should render correctly', () => {
    render(<FormControl.Static testId='test' />);
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});

describe('<FormControl.Feedback />', () => {
  it('should render correctly', () => {
    render(<FormControl.Feedback testId='test' />);
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
