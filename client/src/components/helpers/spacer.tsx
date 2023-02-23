import React from 'react';

interface SpacerProps {
  paddingSize: number;
}

const Spacer = ({ paddingSize }: SpacerProps): JSX.Element => (
  <div
    className='spacer'
    style={{ padding: `${paddingSize}px 0`, height: '1px' }}
  />
);

export default Spacer;
