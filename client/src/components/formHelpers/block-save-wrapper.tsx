import React, { ReactElement } from 'react';

const style = {
  padding: '0 15px'
};

function BlockSaveWrapper({
  children
}: {
  children?: ReactElement | null;
}): JSX.Element {
  return <div style={style}>{children}</div>;
}

BlockSaveWrapper.displayName = 'BlockSaveWrapper';

export default BlockSaveWrapper;
