import React from 'react';

export const PanelTitle = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <h3 className='text-inherit mb-0 text-xl'>{children}</h3>;
};
