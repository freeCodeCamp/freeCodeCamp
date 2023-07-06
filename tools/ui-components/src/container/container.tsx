import React from 'react';
import type { ContainerProps } from './types';

export const Container = ({
  children,
  className,
  fluid
}: ContainerProps): JSX.Element => {
  let elementClasses = '';
  if (!fluid) {
    elementClasses = `my-0 md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px]`;
  }

  if (!className) {
    className = '';
  }

  return (
    <div className={`mx-auto px-[15px] ${elementClasses} ${className}`}>
      {children}
    </div>
  );
};
