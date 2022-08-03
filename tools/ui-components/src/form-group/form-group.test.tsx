import React from 'react';
import { render } from '@testing-library/react';

import { FormControl } from '../form-control/.';
import { ControlLabel } from '../control-label/.';
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
        <FormGroup data-testid='test-id'>
          <ControlLabel htmlFor='test-id' srOnly={false} bsClass={''}>
            label
          </ControlLabel>
          <FormControl />
        </FormGroup>
      );
    }),
    it('Should have div as default component', () => {
      render(<FormGroup />);
    });
});
