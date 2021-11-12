import { ReactNode } from 'react';

const style = {
  padding: '0 15px'
};

function BlockSaveWrapper({
  children,
  ...restProps
}: {
  children?: ReactNode;
}): JSX.Element {
  return (
    <div style={style} {...restProps}>
      {children}
    </div>
  );
}

BlockSaveWrapper.displayName = 'BlockSaveWrapper';

export default BlockSaveWrapper;
