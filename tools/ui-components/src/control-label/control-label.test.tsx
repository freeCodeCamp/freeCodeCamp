import React from 'react';
import { render } from '@testing-library/react';

import { ControlLabel } from '.';
describe('<FormGroup>', () => {
  it('renders children', () => {
    render(<ControlLabel />);
  });
});
