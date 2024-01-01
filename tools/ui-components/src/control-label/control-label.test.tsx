import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormGroup } from '../form-group';
import { ControlLabel } from '.';

const id = 'foo';
describe('<ControlLabel>', () => {
  it('inherit id', () => {
    render(
      <FormGroup role='group' controlId={id}>
        <ControlLabel>Label in formgroup</ControlLabel>
      </FormGroup>
    );

    const labelElement = screen.getByText('Label in formgroup');
    const formGroupElement = screen.getByRole('group');

    expect(labelElement).toBeInTheDocument();
    expect(formGroupElement).toContainElement(labelElement);
    expect(labelElement).toHaveAttribute('for', id);
  });
});
