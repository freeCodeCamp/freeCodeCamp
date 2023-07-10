import React from 'react';
import { render, screen } from '@testing-library/react';

import { Container } from '.';

describe('<Container />', () => {
  it('remove width when the container is fluid', () => {
    render(
      <Container fluid={true}>Random text to test the element width</Container>
    );
    expect(
      screen.getByText('Random text to test the element width')
    ).toHaveClass('mx-auto px-[15px] ');
  });
  it('should add className to it', () => {
    render(
      <Container className='certificate-outer-wrapper'>
        Random text to test the element width
      </Container>
    );
    expect(
      screen.getByText('Random text to test the element width')
    ).toHaveClass(
      'mx-auto px-[15px] my-0 md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px] certificate-outer-wrapper'
    );
  });
});
