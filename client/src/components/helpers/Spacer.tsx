import React from 'react';

interface ISpacerProps {
  size?: number;
}

const styles = { padding: '15px 0', height: '1px' };

const Comp = (props: any): JSX.Element => (
  <div className='spacer' style={styles} {...props} />
);

const Spacer = ({ size = 1 }: ISpacerProps): JSX.Element =>
  size === 1 ? (
    <Comp />
  ) : (
    <>
      {'#'
        .repeat(size)
        .split('')
        .map((_, i) => (
          <Comp key={`spacer_${i}`} />
        ))}
    </>
  );

export default Spacer;
