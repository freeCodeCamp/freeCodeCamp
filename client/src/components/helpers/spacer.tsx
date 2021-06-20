import React from 'react';

interface SpacerProps {
  size: number;
}

const styles = { padding: '15px 0', height: '1px' };

const Comp: React.FC = ({ ...props }) => (
  <div className='spacer' style={styles} {...props} />
);

const Spacer = ({ size = 1 }: SpacerProps): React.ReactNode =>
  size === 1 ? (
    <Comp />
  ) : (
    '#'
      .repeat(size)
      .split('')
      .map((_, i) => <Comp key={`spacer_${i}`} />)
  );

export default Spacer;
