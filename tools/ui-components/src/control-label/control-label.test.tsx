import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormGroup } from '../form-group';
import { ControlLabel } from '.';
describe('<ControlLabel>', () => {
  it('renders label', () => {
    render(<ControlLabel htmlFor='foo'>Label</ControlLabel>);
    const labelElement = screen.getByRole('label', { name: 'Label' });
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('id', 'foo');
  });
  it('inherit id', () => {
    render(
      <FormGroup controlId='foo'>
        <ControlLabel>Label in formgroup</ControlLabel>
      </FormGroup>
    );
    const labelElement = screen.getByRole('label', {
      name: 'Label in formgroup'
    });
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('id', 'foo');
  });
});
