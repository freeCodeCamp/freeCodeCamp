import React from 'react';

export const PanelBody = ({
  children,
  props
}: {
  children?: React.ReactNode;
  props?: React.ComponentProps<'div'>;
}): JSX.Element => {
  return (
    <div className='p-3.5' {...props}>
      {children}
    </div>
  );
};
