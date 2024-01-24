import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '../form-control/.';
import { ControlLabel } from '../control-label';
import { FormGroup } from '.';

const sameNumberOfChildren = 2;

describe('<FormGroup>', () => {
  it('renders children', () => {
    render(
      <FormGroup data-testid='test-id'>
        <span title='Child' />
        <span title='Child' />
      </FormGroup>
    );

    const element = screen.getByTestId('test-id');
    expect(element.childNodes.length).toBe(sameNumberOfChildren);

    const formGroupChildren = screen.getAllByTitle('Child');
    expect(formGroupChildren.length).toBe(sameNumberOfChildren);
    element.childNodes.forEach((child, index) => {
      expect(child).toBe(formGroupChildren[index]);
    });
  });

  it('should pass `controlId` to the label and input elements', () => {
    render(
      <FormGroup controlId='foo'>
        <ControlLabel>Foo</ControlLabel>
        <FormControl />
      </FormGroup>
    );

    const label = screen.getByText('Foo');
    const input = screen.getByLabelText('Foo');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'foo');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'foo');
  });
});
