import React from 'react';
import { render } from '@testing-library/react';

import { FormControl } from '../form-control/.';
import { FormGroup } from '.';

describe('<FormGroup />', () => {
  it('should render correctly', () => {
    render(
      <FormGroup data-testid='test-id'>
        <span className='child1' />
        <span className='child2' />
      </FormGroup>
    );
  }),
    it('provided controlId to label and control', () => {
      render(
        // add form-label to the test when form-label is created
        <FormGroup data-testid='test-id'>
          <label htmlFor='test-id'>label</label>
          <FormControl />
        </FormGroup>
      );
    }),
    it('Should have div as default component', () => {
      render(<FormGroup />);
    });
});
