import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormControl } from '../form-control/.';
import { FormGroup } from '.';

describe('<FormGroup>', () => {
  it('renders children', () => {
    render(
      <FormGroup data-testid='test-id'>
        <span className='firstChild' />
        <span className='secondChild' />
      </FormGroup>
    );

    const element = screen.getByTestId('test-id');
    element.childElementCount.should.equal(2);

    const formGroupChildren = screen.getAllByRole('span');
    formGroupChildren.length.should.equal(2);
    formGroupChildren[0].className.should.equal('firstChild');
    formGroupChildren[1].className.should.equal('secondChild');
  });

  it('provided controlId to label and control', () => {
    render(
      <FormGroup controlId='my-control' data-testid='test-id'>
        <FormControl />
      </FormGroup>
    );
    const input = screen.getByRole('input');
    input.id.should.equal('my-control');
  });
});
