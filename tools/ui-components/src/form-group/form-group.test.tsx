import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '../form-control/.';
import { FormGroup } from '.';
const sameNumberOfChildren = 2;
describe('<FormGroup>', () => {
  it('renders children', () => {
    render(
      <FormGroup data-testid='test-id'>
        <span className='firstChild' />
        <span className='secondChild' />
      </FormGroup>
    );

    const element = screen.getByTestId('test-id');
    expect(element.childElementCount).toBe(sameNumberOfChildren);

    const formGroupChildren = screen.getAllByRole('span');
    expect(formGroupChildren.length).toBe(sameNumberOfChildren);
    expect(formGroupChildren[0].className).toBe('firstChild');
    expect(formGroupChildren[1].className).toBe('secondChild');
  });

  it('provided controlId to label and control', () => {
    render(
      <FormGroup controlId='my-control' data-testid='test-id'>
        <FormControl />
      </FormGroup>
    );
    const input = screen.getByRole('input');
    expect(input.id).toBe('my-control');
  });
});
