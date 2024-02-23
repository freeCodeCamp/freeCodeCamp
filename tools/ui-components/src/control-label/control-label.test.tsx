import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormGroup } from '../form-group';
import { ControlLabel } from '.';

describe('<ControlLabel>', () => {
  it('should inherit `controlId` from FormGroup', () => {
    render(
      <FormGroup controlId='foo'>
        <ControlLabel>Label</ControlLabel>
      </FormGroup>
    );

    const labelElement = screen.getByText('Label');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'foo');
  });

  it('should use `htmlFor` over `controlId` if both are specified', () => {
    render(
      <FormGroup controlId='foo'>
        <ControlLabel htmlFor='bar'>Label</ControlLabel>
      </FormGroup>
    );

    const labelElement = screen.getByText('Label');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'bar');
  });
});
