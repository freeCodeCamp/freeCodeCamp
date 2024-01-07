import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '.';

describe('<FormControl />', () => {
  it('should render correctly', () => {
    render(<FormControl aria-label='test' />);
    expect(screen.getByLabelText('test')).toBeInTheDocument();
  });
});

describe('<FormControl.Static />', () => {
  it('should render correctly', () => {
    render(<FormControl.Static aria-label='test' />);
    expect(screen.getByLabelText('test')).toBeInTheDocument();
  });
});

describe('<FormControl.Feedback />', () => {
  it('should render correctly', () => {
    render(<FormControl.Feedback aria-label='test' />);
    expect(screen.getByLabelText('test')).toBeInTheDocument();
  });
});
