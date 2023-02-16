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

    const formGroupChildren = screen.getAllByRole('span');
    formGroupChildren.length.should.equal(sameNumberOfChildren);
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
    input.id.match('my-control');
  });
});
