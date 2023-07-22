import React from 'react';

import { ColProps } from './types';

export const Col = ({ className, children, ...props }: ColProps) => {
  return (
    <div className={` ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};
