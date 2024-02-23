import React from 'react';
import { render, screen } from '@testing-library/react';

import { Row } from '.';

describe('<Row />', () => {
  it('Row can accept className', () => {
    render(<Row className='h-full'>Learn to code for free.</Row>);
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'mx-[-15px] h-full'
    );
  });
});
