import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormGroup } from '../form-group';
import { FormControl } from '.';

describe('<FormControl />', () => {
  it('should render correctly', () => {
    render(<FormControl aria-label='test' />);
    expect(screen.getByLabelText('test')).toBeInTheDocument();
  });

  it('should use `id` over `controlId` if both are specified', () => {
    render(
      <FormGroup controlId='foo'>
        <FormControl id='bar' />
      </FormGroup>
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'bar');
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
