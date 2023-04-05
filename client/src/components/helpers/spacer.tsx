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
  children?: JSX.Element;
  direction?: 'top' | 'bottom';
}

const Spacer = ({ size, children, direction }: SpacerProps): JSX.Element => (
  <div
    className='spacer'
    style={{
      padding:
        direction === 'top'
          ? `${Padding[size] * 2}px 0 0 0`
          : direction === 'bottom'
          ? `0 0 ${Padding[size] * 2}px 0`
          : `${Padding[size]}px 0`
    }}
  >
    {children}
  </div>
);

export default Spacer;
