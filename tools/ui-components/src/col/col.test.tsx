import React from 'react';
import { render, screen } from '@testing-library/react';

import { Col } from '.';

describe('<Col />', () => {
  it('should change className when props are passed', () => {
    render(
      <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
        Learn to code for free.
      </Col>
    );
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'min-h-[1px] px-[15px] w-full md:w-5/6 min-[1200px]:w-2/3 md:ml-[8.3%] min-[1200px]:ml-[16.6%]'
    );
  });
  it('should have lgOffSet 0 when it is passed to the component', () => {
    render(<Col lgOffset={0}>Learn to code for free.</Col>);
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'min-h-[1px] px-[15px] min-[1200px]:ml-0'
    );
  });
  it('should add className to it', () => {
    render(
      <Col className='certificate-outer-wrapper'>Learn to code for free.</Col>
    );
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'min-h-[1px] px-[15px] certificate-outer-wrapper'
    );
  });
});
