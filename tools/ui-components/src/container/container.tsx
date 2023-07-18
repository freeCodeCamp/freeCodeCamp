import React from 'react';
import type { ContainerProps } from './types';

export const Container = ({
  children,
  className,
  fluid
}: ContainerProps): JSX.Element => {
  const elementClasses = fluid
    ? ''
    : 'my-0 md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px]';

  return (
    <div className={`mx-auto px-[15px] ${elementClasses} ${className ?? ''}`}>
      {children}
    </div>
  );
};
