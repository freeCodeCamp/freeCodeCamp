import { render, screen } from '@testing-library/react';
import React from 'react';
import { Image } from './image';

describe('Render the image', () => {
  it('sould render the image with the alt and src attributes', () => {
    render(
      <Image
        alt="Quincy Larson's Signature"
        src='https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
      />
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
    );
    expect(image).toHaveAttribute('alt', "Quincy Larson's Signature");
  });
});
