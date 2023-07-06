import React from 'react';

const styles = {
  width: 'min(100% - 2rem, 20em)',
  margin: '0 auto'
};

export const Container = ({
  children
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <div style={styles}>{children}</div>;
};
