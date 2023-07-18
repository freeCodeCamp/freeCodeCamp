import React from 'react';
import { render, screen } from '@testing-library/react';

import { Container } from '.';

describe('<Container />', () => {
  it('remove width when the container is fluid', () => {
    render(<Container fluid={true}>Learn to code for free.</Container>);
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'mx-auto px-[15px] '
    );
  });
  it('should add className to it', () => {
    render(
      <Container className='certificate-outer-wrapper'>
        Learn to code for free.
      </Container>
    );
    expect(screen.getByText('Learn to code for free.')).toHaveClass(
      'mx-auto px-[15px] my-0 md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px] certificate-outer-wrapper'
    );
  });
});
