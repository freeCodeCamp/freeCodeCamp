import React from 'react';

const Padding = Object.freeze({
  small: 5,
  medium: 15,
  large: 30,
  exLarge: 45
});

type PaddingKeys = keyof typeof Padding;
interface SpacerProps {
  size: PaddingKeys;
  children?: React.ReactNode;
}

const Spacer = ({ size, children }: SpacerProps): JSX.Element => (
  <div
    className='spacer'
    style={{
      paddingBlock: children ? `${Padding[size] * 2}px` : `${Padding[size]}px`
    }}
  >
    {children}
  </div>
);

export default Spacer;
