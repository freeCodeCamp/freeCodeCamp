import React from 'react';

interface SpacerProps {
  size: string;
}

const Padding: { [key: string]: number } = Object.freeze({
  small: 5,
  medium: 15,
  large: 30,
  exLarge: 45
});

const Spacer = ({ size }: SpacerProps): JSX.Element => (
  <div
    className='spacer'
    style={{ padding: `${Padding[size]}px 0`, height: '1px' }}
  />
);

export default Spacer;
