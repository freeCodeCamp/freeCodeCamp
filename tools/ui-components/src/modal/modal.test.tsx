import React from 'react';
import { render } from '@testing-library/react';

import { Modal } from '.';

describe('<Modal />', () => {
  it('should render correctly', () => {
    render(<Modal />);
  });
});
