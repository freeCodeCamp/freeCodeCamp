import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '../form-control/.';
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
    expect(element.childElementCount).toBe(sameNumberOfChildren);

    const formGroupChildren = screen.getAllByTitle('Child');
    expect(formGroupChildren.length).toBe(sameNumberOfChildren);
    element.childNodes.forEach((child, index) => {
      expect(child).toBe(formGroupChildren[index]);
    });
  });

  it('provided controlId to label and control', () => {
    render(
      <FormGroup controlId='my-control' data-testid='test-id'>
        <FormControl role='switch' />
      </FormGroup>
    );
    const input = screen.getByRole('switch');
    expect(input.id).toBe('my-control');
  });
});
