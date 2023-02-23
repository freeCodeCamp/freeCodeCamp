import React from 'react';

interface SpacerProps {
  size?: number;
}

const Spacer = ({ size = 15 }: SpacerProps): JSX.Element =>
  size === 0 ? (
    <></>
  ) : (
    <div className='spacer' style={{ padding: `${size}px 0`, height: '1px' }} />
  );

export default Spacer;
