import React from 'react';

const style = {
  padding: '0 15px'
};

function BlockSaveWrapper({
  children
}: {
  children?: React.ReactElement;
}): JSX.Element {
  return <div style={style}>{children}</div>;
}

BlockSaveWrapper.displayName = 'BlockSaveWrapper';

export default BlockSaveWrapper;
