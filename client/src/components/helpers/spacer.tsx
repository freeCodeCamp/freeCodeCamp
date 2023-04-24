import React from 'react';

const Padding = Object.freeze({
  small: 5,
  xSmall: 10,
  medium: 15,
  large: 30,
  exLarge: 45,
  doubleXL: 90
});

type PaddingKeys = keyof typeof Padding;
interface SpacerProps {
  size: PaddingKeys;
  children?: React.ReactNode;
}

const Spacer = ({ size, children }: SpacerProps): JSX.Element => (
  <div
    className='spacer'
    style={{ padding: `${Padding[size]}px 0`, height: '1px' }}
  >
    {children}
  </div>
);

export default Spacer;
