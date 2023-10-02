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
      'relative min-h-[1px] px-[15px] float-left sm:w-full md:w-[83.3%] min-[1200px]:w-[66.6%] md:ml-[8.3%] min-[1200px]:ml-[16.6%]'
    );
  });
  it('should add className to it', () => {
    render(
      <Col className='certificate-outer-wrapper'>Learn to code for free.</Col>
    );
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'relative min-h-[1px] px-[15px] float-left certificate-outer-wrapper'
    );
  });
});
