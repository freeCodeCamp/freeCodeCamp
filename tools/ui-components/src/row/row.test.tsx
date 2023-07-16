import React from 'react';
import { render, screen } from '@testing-library/react';

import { Row } from '.';

describe('<Row />', () => {
  it('Row can accept className', () => {
    render(<Row className='h-full'>Random text to test the element width</Row>);
    expect(
      screen.getByText('Random text to test the element width')
    ).toHaveClass('mx-[-15px] h-full');
  });
});
