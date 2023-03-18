import React from 'react';

export const PanelTitle = ({
  children,
  props
}: {
  children: React.ReactNode;
  props?: React.ComponentProps<'h3'>;
}): JSX.Element => {
  return (
    <h3 className='text-inherit mb-0 text-xl' {...props}>
      {children}
    </h3>
  );
};
